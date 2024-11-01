document.getElementById("btn2").onclick = task2;
function task2(){
    let chislo = Number(document.getElementById("chislo").value);
    let otvet;
    if (chislo <1000){
         otvet='Неправильное число'
    }
    else{
    let thousands = Math.floor(chislo % 10);
    chislo=Math.floor(chislo / 10);
    let hundreds = Math.floor(chislo % 10);
    chislo=Math.floor(chislo / 10);
    let tens = Math.floor(chislo % 10);
    chislo=Math.floor(chislo / 10);
    let units = chislo % 10;
    otvet = thousands * 1000 + hundreds  * 100 + tens* 10 + units;
}
    document.getElementById('output_task2').innerHTML = `перевернутое число: ${otvet}`; 
    return;
}
