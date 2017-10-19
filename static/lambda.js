function dataVisualize(data, times) {

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: times ,
        datasets: [{
            label: "Lambda performance",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data,
        }]
    },

    // Configuration options go here
    options: {}
});

}



function jparsing (datas){

  var jsons = [] ;
for  (var i = 0 ; i < datas.length ; i++)  {
      jsons.push (  JSON.parse (datas[i]))  ;

}
  return jsons  ;
}

function ajax() {

   var maxi = document.getElementById("maxi").value;
         var loops =document.getElementById("loop").value;
        var times =document.getElementById("t").value;
var e = document.getElementById("mb")
var mb   =  e.options[e.selectedIndex].value;
var e2 = document.getElementById("concurrent")
var conc   =  e2.options[e2.selectedIndex].value;


  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 201) {
          var   datas    =  JSON.parse( this.responseText).json  ;

           var jsons  = [] ;
           if( conc =="on")    jsons =  jparsing  (datas) ;
            else {
              jsons    =  datas ;
            }
            insertHTML (jsons) ;
               var duration = [] ;
 for (var i = 0 ; i < jsons.length ; i++ ) {
              duration.push   (  jsons[i].durationSeconds);

		}

   var labels =  [] ;
 for  (var i= 0 ; i < times ; i++) {


       labels.push (i+"th times") ;

}




     dataVisualize (duration,  labels );



    }
  };


//  xhttp.open("GET", "/get", true);
 // xhttp.send ();        //  Request URL:http://52.10.250.199:5000/get
 xhttp.open("POST", "/post", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 xhttp.send(JSON.stringify({ maxi:  maxi,  loops: loops , times : times, mb :mb  , conc : conc }));

}

function insertHTML  (D){

for (var i=0;i< D.length  ;i++) {
   (function(ind) {

 setTimeout(function(){
 var  li  ;  li =   " durationSeconds :"+   D[ind].durationSeconds+ " ;  loops : "  + D[ind].loops +"; max : " + D[ind].max  ;

   var node = document.createElement("LI");
    var textnode = document.createTextNode(li);
    node.appendChild(textnode);
       document.getElementById("demo").appendChild(node)  ;



}, 1000 * (ind+1) );
   }  )(i);
}


}
