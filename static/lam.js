
function loadDoc() {
  
var  times ; var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (	this.readyState == 4)
        if ( this.status == 200) {
               //      document.getElementById("demo").innerHTML = this.responseText;
           var jsons = JSON.parse(this.responseText).json;
          
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
     if (document.getElementById('c')!=null)  document.getElementById('c').remove();
     var c = document.createElement('canvas');
    c.setAttribute("id", "c");
    document.getElementById("cv").appendChild(c);
    var ctx = document.getElementById('c').getContext('2d');
    
        var chart = new Chart(ctx, {
      
            type: 'bar',
         
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {}
        });
setTimeout(function(){ ; }, 3000);                                                               
    
      }else {
            alert("please email beaconwarden@gmail.com for the correct last four digit api aws lamb key .")
        }
  };
  xhttp.open("POST", "/postlamb", true);
  var  subm  = document.getElementById("ta").value
  var jp   =JSON.parse (subm);
    times   = jp.times ;
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(jp));
}
