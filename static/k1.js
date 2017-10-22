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
    oReq.open("POST", "/post", true);
    oReq.onload = function(oEvent) {
        if (oReq.status == 201) {
            var jsons = JSON.parse(this.responseText).json;
            insertHTML(jsons);
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
