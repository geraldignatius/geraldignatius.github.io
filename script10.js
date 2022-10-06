var timer =60;
setInterval(function() {
timer--;
if(timer < 0) {
//  location.replace('nilai.html')
}else{
document.getElementById("timer").innerHTML = timer;
}
}, 1000);

// function kirim(nilaiBenar){
//     const jno1 = document.querySelector("#jno10");
//     let poinBenar = 0;
//     let poinSalah = 0;
//     if (jno1.checked){
//         poinBenar + 10
//     } else{
//         poinSalah + 10
//     }
//     nilaiBenar = poinBenar
//     return nilaiBenar
// }

// let halo = 'hello world'

// export{kirim, halo}