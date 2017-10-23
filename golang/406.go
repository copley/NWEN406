// Copyright 2010 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.
//https://www.codementor.io/codehakase/building-a-restful-api-with-golang-a6yivzqdo
//https://golang.org/doc/articles/wiki/
package main

import (
	"fmt"
	"encoding/json"
	"github.com/gorilla/mux"
	"html/template"
	"io/ioutil"
	//"log"
	"net/http"
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
	renderTemplate(w, "edit", p)
}

// The person Type (more like an object)
type Person struct {
	ID        string   `json:"id,omitempty"`
	Firstname string   `json:"firstname,omitempty"`
	Lastname  string   `json:"lastname,omitempty"`
	Address   *Address `json:"address,omitempty"`
}
type Address struct {
	City  string `json:"city,omitempty"`
	State string `json:"state,omitempty"`
}

var people []Person

// Display all from the people var
func GetPeople(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(people)
}

// Display a single data
func GetPerson(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for _, item := range people {
		if item.ID == params["id"] {
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
	person.ID = params["id"]
	people = append(people, person)
	json.NewEncoder(w).Encode(people)
}

// Delete an item
func DeletePerson(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for index, item := range people {
		if item.ID == params["id"] {
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



// main function to boot up everything
func maikn() {
	//http.HandleFunc("/view/", viewHandler)
       // http.HandleFunc("/edit/", editHandler)
        //http.HandleFunc("/save/", saveHandler)
       // http.ListenAndServe(":8080", nil)
	//router := mux.NewRouter()
	//people = append(people, Person{ID: "1", Firstname: "John", Lastname: "Doe", Address: &Address{City: "City X", State: "State X"}})
	//people = append(people, Person{ID: "2", Firstname: "Koko", Lastname: "Doe", Address: &Address{City: "City Z", State: "State Y"}})
	//router.HandleFunc("/people", GetPeople).Methods("GET")
	//router.HandleFunc("/people/{id}", GetPerson).Methods("GET")
	//router.HandleFunc("/people/{id}", CreatePerson).Methods("POST")
	//router.HandleFunc("/people/{id}", DeletePerson).Methods("DELETE")
	//http.ListenAndServe(":8000", router)
//	http.HandleFunc("/view/", viewHandler)
//	http.HandleFunc("/edit/", editHandler)
	//http.HandleFunc("/save/", saveHandler)
	//http.ListenAndServe(":8080", nil)
	serverMuxA := http.NewServeMux()
	serverMuxA.HandleFunc("/hello", hello)

	serverMuxB := http.NewServeMux()
	serverMuxB.HandleFunc("/world", world)

	go func() {
		http.ListenAndServe(":8000", serverMuxA)
	}()

	http.ListenAndServe(":8080", serverMuxB)
}

        //http.HandleFunc("/view/", viewHandler)
       // http.HandleFunc("/edit/", editHandler)
        //http.HandleFunc("/save/", saveHandler)
       // http.ListenAndServe(":8080", nil)
        //router := mux.NewRouter()
        //people = append(people, Person{ID: "1", Firstname: "John", Lastname: "Doe", Address: &Address{City: "City X", State: "State X"}})
        //people = append(people, Person{ID: "2", Firstname: "Koko", Lastname: "Doe", Address: &Address{City: "City Z", State: "State Y"}})
        //router.HandleFunc("/people", GetPeople).Methods("GET")
        //router.HandleFunc("/people/{id}", GetPerson).Methods("GET")
        //router.HandleFunc("/people/{id}", CreatePerson).Methods("POST")
        //router.HandleFunc("/people/{id}", DeletePerson).Methods("DELETE")
        //http.ListenAndServe(":8000", router)
//      http.HandleFunc("/view/", viewHandler)
//      http.HandleFunc("/edit/", editHandler)
        //http.HandleFunc("/save/", saveHandler)
        //http.ListenAndServe(":8080", nil)



func main() {
        //http.HandleFunc("/view/", viewHandler)
       // http.HandleFunc("/edit/", editHandler)
        //http.HandleFunc("/save/", saveHandler)
       // http.ListenAndServe(":8080", nil)
        //router := mux.NewRouter()
        //people = append(people, Person{ID: "1", Firstname: "John", Lastname: "Doe", Address: &Address{City: "City X", State: "State X"}})
        //people = append(people, Person{ID: "2", Firstname: "Koko", Lastname: "Doe", Address: &Address{City: "City Z", State: "State Y"}})
        //router.HandleFunc("/people", GetPeople).Methods("GET")
        //router.HandleFunc("/people/{id}", GetPerson).Methods("GET")
        //router.HandleFunc("/people/{id}", CreatePerson).Methods("POST")
        //router.HandleFunc("/people/{id}", DeletePerson).Methods("DELETE")
        //http.ListenAndServe(":8000", router)
//      http.HandleFunc("/view/", viewHandler)
//      http.HandleFunc("/edit/", editHandler)
        //http.HandleFunc("/save/", saveHandler)
        //http.ListenAndServe(":8080", nil)
	router := mux.NewRouter()
        people = append(people, Person{ID: "1", Firstname: "John", Lastname: "Doe", Address: &Address{City: "City X", State: "State X"}})
        router.HandleFunc("/people", GetPeople).Methods("GET")
        http.HandleFunc("/edit/", editHandler)
        go func() {

                http.ListenAndServe(":8000", nil)
        }()

        http.ListenAndServe(":8080", router)


}

