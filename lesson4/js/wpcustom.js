var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
var GetWeekDays = function (format) {
    var weekDays = {};

    var curDate = new Date();
    for (var i = 0; i < 7; ++i) {
        weekDays[curDate.getDay()] = curDate.toLocaleDateString('ru-RU', {
            weekday: format ? format : 'short'
        });

        curDate.setDate(curDate.getDate() + 1);
    }
    return weekDays;
}
document.getElementById("date").innerHTML=(weekDays+", "+ date + " "+ month+" " year);

