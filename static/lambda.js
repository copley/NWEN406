function ajax() {

   var maxi = document.getElementById("maxi").value;
         var loops =document.getElementById("loop").value;
        var times =document.getElementById("t").value;
var e = document.getElementById("mb")
var mb   =  e.options[e.selectedIndex].value;
var e2 = document.getElementById("concurrent")
var conc   =  e2.options[e2.selectedIndex].value;

var e3 = document.getElementById("chartmode")
var chartmode   =  e3.options[e3.selectedIndex].value;



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




     dataVisualize (duration,  labels , chartmode );



    }
  };


//  xhttp.open("GET", "/get", true);
 // xhttp.send ();        //  Request URL:http://52.10.250.199:5000/get
 xhttp.open("POST", "/post", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 xhttp.send(JSON.stringify({ maxi:  maxi,  loops: loops , times : times, mb :mb  , conc : conc }));
//xhttp.setRequestHeader("auth-key":"")
}







function dataVisualize(data, times , chartmode ) {

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: chartmode,

    // The data for our dataset
    //  cost  :  [10.0066559315*0.00000208,3.33517885208*0.00000417,1.55926299095*0.00000834,0.717894077301*0.00001667 ]   [0.000020813844337519998,0.000013907695813173598,0.000013004253344522999,0.00001196729426860767]
    // duration  :  [10.0066559315,3.33517885208,1.55926299095,0.717894077301 ]
    //   MB    :  [128, 256, 512 ,1024]

    // "Lambda memory in MB (X axis) vs duration in seconds (Y axis) ",
//  label: "Lambda memory in MB (X axis) vs cost in dollars (Y axis) ",
//  label: "Lambda cost in dollars (X axis) vs duration in seconds (Y axis) ",
    data: {

        labels:  ["128MB", "256MB", "512MB" ,"1024MB"]  ,
        datasets: [{
                 label:   "Lambda memory in MB (X axis) vs duration in seconds (Y axis) " ,

            data:   [10.0066559315,3.33517885208,1.55926299095,0.717894077301 ],
              borderColor: 'rgb(25, 100, 166)'
        },
        {
                 label:   "Lambda memory in MB (X axis) vs cost in dollars per 100000 requests(Y axis) "  ,

            data:    [10.0066559315*0.00000208*100000,3.33517885208*0.00000417*100000,1.55926299095*0.00000834*100000,0.717894077301*0.00001667*100000 ],
              borderColor: 'rgb(37, 209, 24)'
        }


      ]
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
