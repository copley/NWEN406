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
    var oReq = new XMLHttpRequest();
    oReq.open("POST", "/k1post", true);
    oReq.onload = function(oEvent) {
        if (oReq.status == 201) {
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
            
            var cols =[ 'Lambda live performanc'] ;

for (var i=0 ; i< duration.length ; i++ ){
	cols.push (duration[i]) ;


}
		
            
            	var chart = c3.generate({
                    bindto: '#chart',
                    data: {
                      columns: [
                           cols  
                      
                      ]
                    }
                	});
                            
            
            
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



