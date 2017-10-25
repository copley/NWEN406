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
       
         
            
            var cols =[ 'Lambda live performance'] ;
   var du = ['duration'] ,costs = ['cost'] ;
                        var price = [0.00000208,0.00000417 , 0.00000834 ,  0.00001667 ] ;
			var  p   =0       ;if (mb=="128") { p = price[0]} ;  if (mb=="256") { p = price[1]}  ;   if (mb=="512") { p = price[2]}   ;   if (mb=="1024") { p = price [3]} ;
                        for (var i = 0; i < duration.length; i++) {
                            du.push(duration[i]);
                            
costs.push(duration[i]* p* 100000)
                        }
    

		
            
            	var chart = c3.generate({
                    bindto: '#chart',
                    data: {
                      columns:[du, costs]
                      
                     
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



