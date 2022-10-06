import { kirim, halo } from "./script10.js";
// const Benar = document.querySelector(Benar)
// if (kirim == true){
//     Benar.innerHtml = 
// }

function nilai(){
    const Benar = document.querySelector('#Benar')
    const Salah = document.querySelector('#Salah')
    let poinBenar = 0;
    let poinSalah = 0;
    if (kirim > 1){
        poinBenar = poinBenar + 10
    } else{
        poinSalah = poinSalah + 10
    }
    console.log(Benar.innerHTML = "Benar" + poinBenar + "/100") 
    console.log(Salah.innerHTML = "salah" + poinSalah + "/100")
}
console.log(halo)
console.log(nilai())
