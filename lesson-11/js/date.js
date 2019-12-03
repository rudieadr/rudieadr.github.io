var date = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("datex").textContent = date.toLocaleDateString('en-us',options);
function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("active");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.visible = "hidden";
    } else {
        x.style.display = "block";
        y.style.visible = "visible";
    }

}