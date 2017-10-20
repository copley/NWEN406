var form = document.forms.namedItem("fileinfo");
form.addEventListener('submit', function(ev) {

  var l4 =document.getElementById("l4").value;
 var maxi = document.getElementById("maxi").value;
       var loops =document.getElementById("loop").value;
      var times =document.getElementById("t").value;
var e = document.getElementById("mb")
var mb   =  e.options[e.selectedIndex].value;
var e2 = document.getElementById("concurrent")
var conc   =  e2.options[e2.selectedIndex].value;

var e3 = document.getElementById("chartmode")
var chartmode   =  e3.options[e3.selectedIndex].value;


  var oReq = new XMLHttpRequest();
oReq.open("POST", "/post", true);
  oReq.onload = function(oEvent) {
    if (oReq.status == 201) {
      var   datas    =  JSON.parse( this.responseText).json  ;

       var jsons  = [] ;
       if( conc =="on")    jsons =  jparsing  (datas) ;
        else {
          jsons    =  datas ;
        }
        insertHTML (jsons) ;
         stat (jsons)

           var duration = [] ;
for (var i = 0 ; i < jsons.length ; i++ ) {
          duration.push   (  jsons[i].durationSeconds);

}

var labels =  [] ;
for  (var i= 0 ; i < times ; i++) {


   labels.push (i+"th times") ;

}




 dataVisualize (duration,  labels , chartmode );
    } else {
     alert("[HTTP "+ this.status + " Forbidden] due to wrong API key and this unauthorized access incident had been reported to AWS IP address backlist server.")
    }
  };

  oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

var   oData = new FormData(form);

 oData.append("CustomField", "This is some extra data");
//oReq.send(oData);

 oReq.send(JSON.stringify({ maxi:  maxi,  loops: loops , times : times, mb :mb  , conc : conc  , l4 : l4}));
  ev.preventDefault();


}, false);



function stat (D , s) {
        var durationSeconds_arr = [];
            for (var i =0 ; i< D.length ;  i++ ) {
                        durationSeconds_arr.push(D[i].durationSeconds);
            }



      var  a  =[   arr.mean(durationSeconds_arr) , arr.median(durationSeconds_arr) , arr.standardDeviation(durationSeconds_arr)]  ;
    return  a[s]  ;
}




function offon() {




  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 ) {

             if (this.status == 200 ) {
               var   datas    = JSON.parse(this.responseText).task  ;

                    var meams         =  [stat (datas[0][0]  , 0)    , stat (datas[0][1]  , 0) ,stat (datas[0][2]  , 0) ,stat (datas[0][3]  , 0)  ]  ;
                      var medians       =  [stat (datas[0][0]  , 1)    , stat (datas[0][1]  , 1) ,stat (datas[0][2]  , 1) ,stat (datas[0][3]  , 1)  ]  ;
                        var sts         =  [stat (datas[0][0]  , 2)    , stat (datas[0][1]  , 2) ,stat (datas[0][2]  , 2) ,stat (datas[0][3]  , 2)  ]  ;




var  datasets  =   [{
           label:    "meams-"  ,

      data:   meams,
        borderColor: 'rgb(25, 100, 166)'
  },
  {
           label:   "medians-"  ,

      data:    medians,
        borderColor: 'rgb(37, 209, 24)'
  },
  {
           label: "standard Deviation-"  ,

      data:  sts,
        borderColor: 'rgb(37, 1, 24)'
  }


]  ;


    dataVisualize ( ["128MB", "256MB", "512MB" ,"1024MB"] ,  datasets, 'line' , "myChart1" );






    var meams1         =  [stat (jparsing(datas[1][0])  , 0)    , stat (jparsing(datas[1][1])  , 0) ,stat (jparsing(datas[1][2])  , 0) ,stat (jparsing(datas[1][3] ) , 0)  ]  ;
      var medians1       =  [stat (jparsing(datas[1][0] ) , 1)    , stat (jparsing(datas[1][1])  , 1) ,stat (jparsing(datas[1][2])  , 1) ,stat (jparsing(datas[1][3])  , 1)  ]  ;
        var sts1         =  [stat (jparsing(datas[1][0] ) , 2)    , stat (jparsing(datas[1][1])  , 2) ,stat (jparsing(datas[1][2])  , 2) ,stat (jparsing(datas[1][3] ) , 2)  ]  ;




var  datasets1  =   [{
label:    "meams-concurr"  ,

data:   meams1,
borderColor: 'rgb(25, 100, 166)'
},
{
label:   "medians-concurr"  ,

data:    medians1,
borderColor: 'rgb(37, 209, 24)'
},
{
label: "standard Deviation-concurr"  ,

data:  sts1,
borderColor: 'rgb(37, 1, 24)'
}


]  ;


dataVisualize ( ["128MB", "256MB", "512MB" ,"1024MB"] ,  datasets1, 'line' , "myChart2" );















             }

             else {

                 alert("[HTTP "+ this.status + " Forbidden] due to wrong API key and this unauthorized access incident had been reported to AWS IP address backlist server.")
             }





    }





  };


  xhttp.open("GET", "/get", true);
  xhttp.send ();        //  Request URL:http://52.10.250.199:5000/get
 //xhttp.open("POST", "/post", true);
//  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
 //xhttp.send(JSON.stringify({ maxi:  maxi,  loops: loops , times : times, mb :mb  , conc : conc  , l4 : l4}));
//xhttp.setRequestHeader("auth-key":"")
}







function dataVisualize(labels , datasets , chartmode  , chartID ) {

var ctx = document.getElementById(chartID).getContext('2d');
     if (chartmode == "bubble")  data = [{ x: 128  , y :10.0066559315 , r :  2.0813844337519998  },{  x: 256   , y :3.33517885208 , r :  1.3907695813173598  },{ x: 512    , y :1.55926299095 , r:  1.3004253344522999   },{   x:1024  , y : 0.717894077301, r  : 1.196729426860767  }]
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
     labels: labels ,
     datasets:  datasets
 },

  /*
data: {
     labels: labels ,
     datasets: [{
         label: chartName,
      //   backgroundColor: 'rgb(255, 99, 132)',
          //radius : 100,
         borderColor: 'rgb(255, 99, 132)',
         data: data

     }]
 },
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
    */

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





var arr = {
	max: function(array) {
		return Math.max.apply(null, array);
	},

	min: function(array) {
		return Math.min.apply(null, array);
	},

	range: function(array) {
		return arr.max(array) - arr.min(array);
	},

	midrange: function(array) {
		return arr.range(array) / 2;
	},

	sum: function(array) {
		var num = 0;
		for (var i = 0, l = array.length; i < l; i++) num += array[i];
		return num;
	},

	mean: function(array) {
		return arr.sum(array) / array.length;
	},

	median: function(array) {
		array.sort(function(a, b) {
			return a - b;
		});
		var mid = array.length / 2;
		return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
	},

	modes: function(array) {
		if (!array.length) return [];
		var modeMap = {},
			maxCount = 0,
			modes = [];

		array.forEach(function(val) {
			if (!modeMap[val]) modeMap[val] = 1;
			else modeMap[val]++;

			if (modeMap[val] > maxCount) {
				modes = [val];
				maxCount = modeMap[val];
			}
			else if (modeMap[val] === maxCount) {
				modes.push(val);
				maxCount = modeMap[val];
			}
		});
		return modes;
	},

	variance: function(array) {
		var mean = arr.mean(array);
		return arr.mean(array.map(function(num) {
			return Math.pow(num - mean, 2);
		}));
	},

	standardDeviation: function(array) {
		return Math.sqrt(arr.variance(array));
	},

	meanAbsoluteDeviation: function(array) {
		var mean = arr.mean(array);
		return arr.mean(array.map(function(num) {
			return Math.abs(num - mean);
		}));
	},

	zScores: function(array) {
		var mean = arr.mean(array);
		var standardDeviation = arr.standardDeviation(array);
		return array.map(function(num) {
			return (num - mean) / standardDeviation;
		});
	}
};

// Function aliases:
arr.average = arr.mean;
