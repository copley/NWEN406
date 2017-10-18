function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 201) {
          var   data    =   this.responseText    ;   console.log (data)  ;  debugger ;   
  document.getElementById("demo").innerHTML = data ; 
    }
  };

        var maxi = document.getElementById("maxi").value;
         var loops =document.getElementById("loop").value; 
        var times =document.getElementById("t").value; 
         var mb    = document.getElementById("mb").value;
//  xhttp.open("GET", "/get", true);
 // xhttp.send ();        //  Request URL:http://52.10.250.199:5000/get
 xhttp.open("POST", "/post", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 xhttp.send(JSON.stringify({ maxi:  maxi,  loops: loops , times : times, mb :mb }));
  
}
