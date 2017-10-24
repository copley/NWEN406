
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "postlamb", true);
  xhttp.send();
  

  
    var  subm  = document.getElementById("ta").value
  
     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    xhttp.send(subm);
}
