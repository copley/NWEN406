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
       // serverMuxA := http.NewServeMux()
       // serverMuxA.HandleFunc("/hello", hello)

     //   serverMuxB := http.NewServeMux()
     //   serverMuxB.HandleFunc("/world", world)
        
        router := mux.NewRouter()
        people = append(people, Person{ID: "1", Firstname: "John", Lastname: "Doe", Address: &Address{City: "City X", State: "State X"}})
        router.HandleFunc("/people", GetPeople).Methods("GET")
        http.HandleFunc("/edit/", editHandler)
        go func() {
             
                http.ListenAndServe(":8000", nil)
        }()

        http.ListenAndServe(":8080", router)
}
