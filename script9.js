var timer =60;
setInterval(function() {
timer--;
if(timer < 0) {
location.replace('soal10.html')
}else{
document.getElementById("timer").innerHTML = timer;
}
}, 1000);