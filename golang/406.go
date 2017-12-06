// Copyright 2010 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
//https://www.codementor.io/codehakase/building-a-restful-api-with-golang-a6yivzqdo
//https://golang.org/doc/articles/wiki/
// go get -u github.com/gorilla/mux

package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"github.com/gorilla/mux"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"sort"
	"sync"
)

type Page struct {
	Title string
	Body  []byte
}

func (p *Page) save() error {
	filename := p.Title + ".txt"
	return ioutil.WriteFile(filename, p.Body, 0600)
}

func loadPage(title string) (*Page, error) {
	filename := title + ".txt"
	body, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, err
	}
	return &Page{Title: title, Body: body}, nil
}

func renderTemplate(w http.ResponseWriter, tmpl string, p *Page) {
	t, _ := template.ParseFiles(tmpl + ".html")
	t.Execute(w, p)
}

func viewHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/view/"):]
	p, _ := loadPage(title)
	renderTemplate(w, "view", p)
}

func editHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/edit/"):]
	p, err := loadPage(title)
	if err != nil {
		p = &Page{Title: title}
	}
	fmt.Printf("go lang server running on port 8000")
	renderTemplate(w, "edit", p)
}

// The person Type (more like an object)
type Person struct { //  people = append(people, Person{mem: mem, avg: totalDurations[mem]/float64(executionCounts[mem]), cost: cost, executionCounts : executionCounts[mem] ,  maxPrime: maxPrime})
	Mem             string `json:"mem,omitempty"`
	Avg             string `json:"avg,omitempty"`
	Cost            string `json:"cost,omitempty"`
	ExecutionCounts string `json:"executionCounts,omitempty"`
	MaxPrime        string `json:"maxPrime,omitempty"`
}
type Address struct {
	City  string `json:"city,omitempty"`
	State string `json:"state,omitempty"`
}

var people []Person
var people2 []Person2

// Display all from the people var
func GetPeople(w http.ResponseWriter, r *http.Request) {
	//fmt.Printf("json.NewEncoder(w).Encode(people)")
	executions := make(chan execution)
	invokeLambda(executions)
	displayResults(executions)
	fmt.Printf(fmt.Sprint(people))
	fmt.Printf("---------------")
	fmt.Printf(fmt.Sprint(people2))
	json.NewEncoder(w).Encode(people)
}

// Display a single data
func GetPerson(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for _, item := range people {
		if item.Mem == params["mem"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&Person{})
}

// create a new item
func CreatePerson(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var person Person
	_ = json.NewDecoder(r.Body).Decode(&person)
	person.Mem = params["mem"]
	people = append(people, person)
	json.NewEncoder(w).Encode(people)
}

// Delete an item
func DeletePerson(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for index, item := range people {
		if item.Mem == params["mem"] {
			people = append(people[:index], people[index+1:]...)
			break
		}
		json.NewEncoder(w).Encode(people)
	}
}

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "hello")
}

func world(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "world")
}

var lambdaFunctions map[int]string
var lambdaErrors int

// Command line parameters
var (
	maxPrime       int
	numExecutions  int
	numLoops       int
	maxConcurrency int
	configFile     string
)

func init() {
	flag.IntVar(&maxPrime, "max", 100, "maximum number to search for primes (<=2M to not cause out of memory in the lowest Lambda memory setting)")
	flag.IntVar(&numExecutions, "execs", 3, "number of times to execute the Lambda function")
	flag.IntVar(&numLoops, "loops", 1, "number of times to repeat the search for primes (without consuming additional memory)")
	flag.IntVar(&maxConcurrency, "conc", 80, "limit of concurrently running Lambda functions")
	flag.StringVar(&configFile, "config", "config.json", "name of config file")
	flag.Parse()

	if maxPrime < 3 {
		log.Fatal("-max must be 3 or greater")
	}
	if numExecutions < 1 {
		log.Fatal("-execs must be 1 or greater")
	}
	if numLoops < 1 {
		log.Fatal("-loops must be 1 or greater")
	}
	if maxConcurrency < 1 {
		log.Fatal("-conc must be 1 or greater")
	}

	parseConfig()
}

type execution struct {
	DurationSeconds float64
	memory          int
}

// AWS Lambda pricing in USD as of Jan 2017
var costPerRequest = 0.0000002
var costPerGbSeconds = 0.00001667

func parseConfig() {
	contents, err := ioutil.ReadFile(configFile)
	if err != nil {
		log.Fatal(fmt.Sprintf("Error opening config file %s: %v\n", configFile, err))
	}

	type configStruct struct {
		Functions map[int]string
	}
	var config configStruct

	err = json.Unmarshal(contents, &config)
	if err != nil {
		log.Fatal(fmt.Sprintf("Error parsing config file: %v\n", err))
	}
	lambdaFunctions = config.Functions
}

func triggerLambda(url string, mem int, max int, loops int) (execution, error) {
	var e execution
	e.memory = mem

	client := &http.Client{
	//	CheckRedirect: redirectPolicyFunc,
	}

	//	resp, err := client.Get(fmt.Sprintf("%s?max=%d&loops=%d", url, max, loops))
	// ...
	req, err := http.NewRequest("GET", fmt.Sprintf("%s?max=%d&loops=%d", url, max, loops), nil)
	//	fmt.Printf(fmt.Sprintf("%s?max=%d&loops=%d", url, max, loops))
	// ...
	req.Header.Add("x-api-key", "rDGgZtlFRY7CaGQy7Qvb21R0VxICImme5FiJVvuc") // 'x-api-key': "rDGgZtlFRY7CaGQy7Qvb21R0VxICImme5FiJ"+last4,   #Vvuc
	resp, err := client.Do(req)
	// ...

	//	resp, err := http.Get(fmt.Sprintf("%s?max=%d&loops=%d", url, max, loops))
	if err != nil {
		return e, err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		return e, fmt.Errorf("function %dmb returned status code: %d", mem, resp.StatusCode)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return e, err
	}
	err = json.Unmarshal(body, &e)

	return e, nil
}

func invokeLambda(executions chan execution) {
	var wg sync.WaitGroup
	var tokens = make(chan struct{}, maxConcurrency) // counting semaphore used to enforce a concurrency limit on calls to Lambda

	fmt.Printf("Triggering %d Lambda functions %d times each, all in parallel\n", len(lambdaFunctions), numExecutions)
	fmt.Printf("Each function will loop %d time(s) and in each loop calculate all primes <=%d\n", numLoops, maxPrime)
	fmt.Println("Working...")
	for c := 0; c < numExecutions; c++ {
		for mem, url := range lambdaFunctions {
			wg.Add(1)
			go func(u string, m int) {
				defer wg.Done()
				tokens <- struct{}{} // acquire a token
				e, err := triggerLambda(u, m, maxPrime, numLoops)
				<-tokens // release the token
				if err != nil {
					fmt.Println(err)
					lambdaErrors++
				}
				executions <- e
			}(url, mem)
		}
	}

	// Wait for all goroutines to finish their work
	go func() {
		wg.Wait()
		close(executions)
	}()
}

type Person2 struct {
	ID        string   `json:"id,omitempty"`
	Firstname string   `json:"firstname,omitempty"`
	Lastname  string   `json:"lastname,omitempty"`
	Address   *Address `json:"address,omitempty"`
}

func displayResults(executions chan execution) {
	var totalDurations map[int]float64 = make(map[int]float64)
	var executionCounts map[int]int = make(map[int]int)

	// Pull all execution results from the channel
	for e := range executions {
		if e.DurationSeconds > 0 { // only count executions that didn't error
			totalDurations[e.memory] += e.DurationSeconds
			executionCounts[e.memory]++
		}
	}

	// Sort the various lambda function memory sizes for pretty printing
	var memories []int
	for mem, _ := range lambdaFunctions {
		memories = append(memories, mem)
	}
	sort.Ints(memories)
	people = []Person(nil)
	// Display results
	fmt.Printf("Number of lambda executions returning errors: %d\n", lambdaErrors)
	fmt.Println("Stats for each Lambda function by Lambda memory allocation:")
	var totalCost float64
	for _, mem := range memories {
		cost := float64(executionCounts[mem])*costPerRequest +
			(float64(mem)/float64(1024))*float64(totalDurations[mem])*costPerGbSeconds // convert duration to GB-seconds
		totalCost += cost
		fmt.Printf("  %dmb %fsec(avg) $%f(total) to calculate %d times all prime numbers <=%d\n",
			mem, totalDurations[mem]/float64(executionCounts[mem]), cost, executionCounts[mem], maxPrime)

		people = append(people, Person{Mem: fmt.Sprint(mem), Avg: fmt.Sprint(totalDurations[mem] / float64(executionCounts[mem])), Cost: fmt.Sprint(cost), ExecutionCounts: fmt.Sprint(executionCounts[mem]), MaxPrime: fmt.Sprint(maxPrime)})
		people2 = append(people2, Person2{ID: "2", Firstname: "Koko", Lastname: "Doe", Address: &Address{City: "City Z", State: "State Y"}})
		//	fmt.Printf(fmt.Sprint(people2))
	}
	fmt.Printf("Total cost of this test run: $%f\n", totalCost)
}

func SendJ(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "echarts.min.js")
}

func SendJqueryJs(w http.ResponseWriter, r *http.Request) {
	data, err := ioutil.ReadFile("echarts.min.js")
	if err != nil {
		http.Error(w, "Couldn't read file", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/javascript; charset=utf-8")
	w.Write(data)
}

func main() {

	router := mux.NewRouter()

	router.HandleFunc("/people", GetPeople).Methods("GET")
	router.HandleFunc("/edit/", editHandler)
	router.HandleFunc("/echarts.min.js", SendJqueryJs)

	log.Fatal(http.ListenAndServe(":8000", router))

}
