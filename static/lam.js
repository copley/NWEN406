
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
                                                               
    
      }
  };
  xhttp.open("POST", "/postlamb", true);
  var  subm  = document.getElementById("ta").value
  var jp   =JSON.parse (subm);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(jp));
}
