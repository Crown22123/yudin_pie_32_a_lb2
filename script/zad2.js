alert("№2")
let chislo = Number(prompt('Введите четырехзначное число'));
let thousands = Math.floor(chislo % 10);
chislo=Math.floor(chislo / 10);
let hundreds = Math.floor(chislo % 10);
chislo=Math.floor(chislo / 10);
let tens = Math.floor(chislo % 10);
chislo=Math.floor(chislo / 10);
let units = chislo % 10;
let reversed_chislo = thousands * 1000 + hundreds  * 100 + tens* 10 + units;

alert (reversed_chislo)
