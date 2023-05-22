let btnC = document.getElementById("btnC")
let btnF = document.getElementById("btnF")
let sum = document.getElementById("sum")
let value = 0;
let result = document.getElementById("result")


btnC.addEventListener("click", e => {
    btnC.style.backgroundColor ="lightgreen"
    btnF.style.backgroundColor ="lightcoral"
    value = 1;
    console.log(value)
})
btnF.addEventListener("click", e => {
    btnF.style.backgroundColor ="lightgreen"
    btnC.style.backgroundColor ="lightcoral"
    value = 2;
    console.log(value)
})

sum.addEventListener("click", e => {
    if (value == 1) {
        let T = parseInt(document.getElementById("T").value)
        result.innerHTML = (T*(9/5))+32 + " Stopni Farenheita"
    }
    else if (value == 2) {
        let T = parseInt(document.getElementById("T").value)
        result.innerHTML = ((T-32)/(1.8000)) + " Stopni Celsjusza"
    }
    else {
        alert("Zaznacz tryb działania")
    }
})