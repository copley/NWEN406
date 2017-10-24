
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   //      document.getElementById("demo").innerHTML = this.responseText;
       var jsons = JSON.parse(this.responseText).response;
      
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



    var chart = new Chart(ctx, {
  
        type: 'bar',
     
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {}
    });
        // The type of chart we want to create
        //         type: chartmode,
        //                 // The data for our dataset
        //                         //  cost  :  [10.0066559315*0.00000208,3.33517885208*0.00000417,1.55926299095*0.00000834,0.717894077301*0.00001667 ]   [0.000020813844337519998,0.000013907695813173598,0.000013004253344522999,0.00001196729426860767]
        //                                 // duration  :  [10.0066559315,3.33517885208,1.55926299095,0.717894077301 ]
        //                                         //   MB    :  [128, 256, 512 ,1024]
        //
        //                                                 // "Lambda memory in MB (X axis) vs duration in seconds (Y axis) ",
        //                                                         //  label: "Lambda memory in MB (X axis) vs cost in dollars (Y axis) ",
        //                                                                 //  label: "Lambda cost in dollars (X axis) vs duration in second




  };
  xhttp.open("POST", "/postlamb", true);
//  xhttp.send();
  

  
    var  subm  = document.getElementById("ta").value
     var jp   =JSON.parse (subm);
     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    xhttp.send(JSON.stringify(jp));
}
