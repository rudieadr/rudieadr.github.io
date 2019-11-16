var xay = new Date();

var CurrentDay = xay.getDay();
var output = friday();
function friday() {
    var x=document.getElementById("msg");
    if(CurrentDay ==5) {
        x.style.display = "block";
    } else {
        x.style.display="none";
    }
}