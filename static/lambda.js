

var form = document.forms.namedItem("fileinfo");
form.addEventListener('submit', function(ev) {
    var l4 = document.getElementById("l4").value;
    var maxi = document.getElementById("maxi").value;
    var loops = document.getElementById("loop").value;
    var times = document.getElementById("t").value;
    var e = document.getElementById("mb")
    var mb = e.options[e.selectedIndex].value;
    var e2 = document.getElementById("concurrent")
    var conc = e2.options[e2.selectedIndex].value;
    var e3 = document.getElementById("chartmode")
    var chartmode = e3.options[e3.selectedIndex].value;
    var oReq = new XMLHttpRequest();
    oReq.open("POST", "/post", true);
    oReq.onload = function(oEvent) {
        if (oReq.status == 201) {
            var jsons = JSON.parse(this.responseText).json;
            insertHTML(jsons);
            stat(jsons)
            var duration = [];
            for (var i = 0; i < jsons.length; i++) {
                duration.push(jsons[i].durationSeconds);
            }
            var labels = [];
            for (var i = 0; i < times; i++) {
                labels.push(i + "th");
            }
            var datasets = [{
                    label: "live dynamic time series Lamda performance ",
                    data: duration,
                    borderColor: 'rgb(25, 100, 166)'
                }
            ];
            dataVisualize(labels, datasets, chartmode, "c0");
        } else {
            alert("[HTTP " + this.status + " Forbidden] due to wrong API key and this unauthorized access incident had been reported to AWS IP address backlist server.")
        }
    };
    oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var oData = new FormData(form);
    oData.append("CustomField", "This is some extra data");
    oReq.send(JSON.stringify({
        maxi: maxi,
        loops: loops,
        times: times,
        mb: mb,
        conc: conc,
        l4: l4
    }));
    ev.preventDefault();
}, false);

function stat(D, s) {
    var durationSeconds_arr = [];
    var arr = arr_stat () ;
    for (var i = 0; i < D.length; i++) {
        durationSeconds_arr.push(D[i].durationSeconds);
    }
    var a = [arr.mean(durationSeconds_arr), arr.median(durationSeconds_arr), arr.standardDeviation(durationSeconds_arr)];
    return a[s];
}

document.addEventListener('DOMContentLoaded', function() {
    // setInterval(function(){ offon(); }, 3000);
});

function offon(getMode, chartIDs) {
    switch(getMode) {
      case "getMB":
          Xaxis = ["128MB", "256MB", "512MB", "1024MB"];
          break;
      case "getXLoops":
          Xaxis = ["2X", "3X", "4X", "5X"];
          break;
      case "getSatisfactory":
          Xaxis = ["128MB", "256MB", "512MB", "1024MB"];
          break;
      default:

    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var datas = JSON.parse(this.responseText).task;
                if (getMode == 'getMB') { //Varying the Lambda memory settings: 128MB, 256MB, 512MB and 1024MB.
                    var meams=[] , medians=[], sts=[] , cmeams=[] , cmedians=[], csts=[] ;
                    for (var i=0 ; i < 4 ; i++) {
                        meams.push(stat(datas[0][i], 0));
                        medians.push (stat(datas[0][i], 1));
                        sts.push (stat(datas[0][i], 2));
                        cmeams.push(stat(datas[1][i], 0));
                        cmedians.push (stat(datas[1][i], 1));
                        csts.push (stat(datas[1][i], 2));
                    }
                    var datasets = [{
                            label: "meams-",
                            data: meams,
                            borderColor: 'rgb(25, 100, 166)'
                        },
                        {
                            label: "medians-",
                            data: medians,
                            borderColor: 'rgb(37, 209, 24)'
                        },
                        {
                            label: "standard Deviation-",
                            data: sts,
                            borderColor: 'rgb(37, 1, 24)'
                        }
                    ];
                    dataVisualize(Xaxis, datasets, 'line', chartIDs[0]);
                    var datasetsc = [{
                            label: "meams-concurr",
                            data: cmeams,
                            borderColor: 'rgb(25, 100, 166)'
                        },
                        {
                            label: "medians-concurr",
                            data: cmedians,
                            borderColor: 'rgb(37, 209, 24)'
                        },
                        {
                            label: "standard Deviation-concurr",
                            data: csts,
                            borderColor: 'rgb(37, 1, 24)'
                        }
                    ];
                    dataVisualize(Xaxis, datasetsc, 'line', chartIDs[1]);
                } else if(getMode == 'getXLoops'){ // Varying the time taken to do a computation while holding memory static: 2x, 3x, 4x and 5x.
                    var la = ["128MB", "256MB", "512MB", "1024MB"] ;
                    var k = 0   ;
                    for (var i = 0; i < 4; i++) {
                        var meams = [],
                            medians = [],
                            sts = [],
                            cmeams = [],
                            cmedians = [],
                            csts = [];
                        for (var j = 0; j < 4; j++) {
                            meams.push(stat(datas[0][k], 0));
                            medians.push(stat(datas[0][k], 1));
                            sts.push(stat(datas[0][k], 2));
                            cmeams.push(stat(datas[1][k], 0));
                            cmedians.push(stat(datas[1][k], 1));
                            csts.push(stat(datas[1][k], 2));
                            ++k;
                        }

                        console.log (k);
                        var dt = [{
                                label: "meams-" + la[i],
                                data: meams,
                                borderColor: 'rgb(25, 100, 166)'
                            },
                            {
                                label: "medians-" + la[i],
                                data: medians,
                                borderColor: 'rgb(37, 209, 24)'
                            },
                            {
                                label: "standard Deviation-" + la[i],
                                data: sts,
                                borderColor: 'rgb(37, 1, 24)'
                            },
                            {
                                label: "concu-meams-" + la[i],
                                data: cmeams,
                                borderColor: 'rgb(255, 80, 80)'
                            },
                            {
                                label: "concu-medians-" + la[i],
                                data: cmedians,
                                borderColor: 'rgb(255, 255, 102)'
                            },
                            {
                                label: "concu-standard Deviation-" + la[i],
                                data: csts,
                                borderColor: 'rgb(230, 230, 230)'
                            }
                        ]
                        dataVisualize(Xaxis, dt, 'line', chartIDs[i]);
                    }
                }else {
                        var duration = [] ,costs = [] ;
                        var price = [0.00000208,0.00000417 , 0.00000834 ,  0.00001667 ] ;
                        for (var i = 0; i < datas[0].length; i++) {
                            duration.push(datas[0][i][0].durationSeconds);
                            costs.push(datas[0][i][0].durationSeconds* price[i]* 100000)
                        }
                        var datasets = [{
                                label: "Lambda memory in MB (X axis) vs duration in seconds (Y axis) ",
                                data: duration ,
                                borderColor: 'rgb(25, 100, 166)'
                            },
                            {
                                label: "Lambda memory in MB (X axis) vs cost in dollars per 100000 requests(Y axis) ",
                                data: costs,
                                borderColor: 'rgb(37, 209, 24)'
                            }
                        ]
var cols =[ 'Lambda memory in MB (X axis) vs duration in seconds (Y axis)'] ;
var cols2 = ['Lambda memory in MB (X axis) vs cost in dollars per 100000 requests(Y axis)' ] ; 
for (var i=0 ; i< duration.length ; i++ ){
	cols.push (duration[i]) ;
	cols2.push (costs[i])   ; 

}
			var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
           cols  // ['Lambda memory in MB (X axis) vs duration in seconds (Y axis)', 30, 200, 100, 400, 150, 250],
         , cols2    //     ['Lambda memory in MB (X axis) vs cost in dollars per 100000 requests(Y axis)', 50, 20, 10, 40, 15, 25]
      ]
    }
	});
                        dataVisualize(Xaxis, datasets, 'line', "c1");
                }
            } else {
                alert("[HTTP " + this.status + " Forbidden] due to wrong API key and this unauthorized access incident had been reported to AWS IP address backlist server.")
            }
        }
    };
    switch(getMode) {
      case "getMB":
          xhttp.open("GET", "/getMB", true);
          break;
      case "getXLoops":
          xhttp.open("GET", "/getXLoops", true);
          break;
      case "getSatisfactory":
          xhttp.open("GET", "/getSatisfactory", true);
          break;
      default:

    }
    xhttp.send();

}


function dataVisualize(labels, datasets, chartmode, chartID) {
    if (chartID =='c2' || chartID =='c3')    var cdom = ['c0','c1','c4','c5','c6', 'c7'] ;
    else if (chartID =='c4' || chartID =='c5'|| chartID =='c6' || chartID =='c7')    var cdom = ['c0','c1','c2','c3'] ;
    else  var cdom = ['c0','c1','c2','c3','c4','c5','c6', 'c7'] ;

    for  (var i = 0 ; i < cdom.length ; i++){
          if (document.getElementById(cdom[i]) !=null )
          {
              document.getElementById(cdom[i]).remove();
          }
    }
    var c = document.createElement('canvas')
    c.setAttribute("id", chartID);
    document.getElementById("cv").appendChild(c);
    var ctx = document.getElementById(chartID).getContext('2d');
    if (chartmode == "bubble") data = [{
        x: 128,
        y: 10.0066559315,
        r: 2.0813844337519998
    }, {
        x: 256,
        y: 3.33517885208,
        r: 1.3907695813173598
    }, {
        x: 512,
        y: 1.55926299095,
        r: 1.3004253344522999
    }, {
        x: 1024,
        y: 0.717894077301,
        r: 1.196729426860767
    }]
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
            labels: labels,
            datasets: datasets
        },
        options: {}
    });

}

function jparsing(datas) {
    var jsons = [];
    for (var i = 0; i < datas.length; i++) {
        jsons.push(JSON.parse(datas[i]));

    }
    return jsons;
}


function insertHTML(D) {
    for (var i = 0; i < D.length; i++) {
        (function(ind) {
            setTimeout(function() {
                var li;
                li = " durationSeconds :" + D[ind].durationSeconds + " ;  loops : " + D[ind].loops + "; max : " + D[ind].max;
                var node = document.createElement("LI");
                var textnode = document.createTextNode(li);
                node.appendChild(textnode);
                document.getElementById("demo").appendChild(node);
            }, 1000 * (ind + 1));
        })(i);
    }

}

function arr_stat () {
  var arr = {     // from https://gist.github.com/Daniel-Hug/7273430
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
              } else if (modeMap[val] === maxCount) {
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
  return arr;
}
