document.getElementById("btn1").onclick = task1;
function task1(){
    let win = Number(document.getElementById("win").value);
    let defeat = Number(document.getElementById("defeat").value);
    let draw = Number(document.getElementById("draw").value);

    let sum = win*2+draw*1
    document.getElementById('output_task1').innerHTML = `Сумма очков равна: ${sum}`; 
    return;
}