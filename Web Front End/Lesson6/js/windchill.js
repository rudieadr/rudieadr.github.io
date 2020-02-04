
    var o = parseFloat(document.getElementById('temp').textContent);
    var t = parseFloat(document.getElementById('windspd').textContent);
    var output=doInputOutput(o,t);

    function doInputOutput(o,t) {
        if (o > 50) {
            return output = "N/A"
        } else if (t < 3) {
            return output = "N/2"
        } else {
            output = Math.round(35.74 + 0.6215 * o - 35.75 * Math.pow(t, 0.16) + .4275 * o * Math.pow(t, .16),2);
            return output
        }
    }

document.getElementById('outputtf').innerHTML=output;