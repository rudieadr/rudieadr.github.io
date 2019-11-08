var date = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("datex").textContent = date.toLocaleDateString('en-us',options);