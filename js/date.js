var d = new Date();
var time = d.getHours() + ":" + d.getMinutes() 
var Month=["January",
"February",
"March",
"April",
"May",
"June",
"July",
"August"]


var date= d.getUTCDate()+" "+Month[d.getMonth()]+" "+d.getFullYear()
$(".time").text(time)

$(
    ".date"
).text(date)