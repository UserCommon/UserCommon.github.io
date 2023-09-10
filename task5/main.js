const prices = {
    "Арбуз": 100,
    "Банан": 70,
    "Дыня": 87,
    "Яблоко": 30
}

let setCalculation = (value) => {
    let domAns = document.getElementById("result")
    if(validateInput(value)) {
        domAns.replaceChildren(`Стоимость: ${value}`);
    } else {
        domAns.replaceChildren(`Недопустимое значение!`);
    }
};

let getCalculation = () => {
    let amount = document.getElementById("amount").value;
    let select = document.getElementById("choice").value;

    return prices[select] * Number(amount);
};

let onSubmit = () => {
    let val = getCalculation();
    setCalculation(val);
};

let validateInput = (obj) => {
    const regex = /^[0-9]+$/;

    if(!regex.test(obj)) {
        return false;
    }
    return true;
};

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    let btn = document.getElementById("calculate");
    btn.addEventListener("click", onSubmit);
});