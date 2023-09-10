const prices = {
    "Арбуз": 100,
    "Банан": 70,
    "Дыня": 87,
    "Яблоко": 30
}

let setCalculation = (value) => {
    let domAns = document.getElementById("result")
    domAns.replaceChildren(`${value}`);
};

let getCalculation = (amount, select) => {
    if(validateInput(amount))
        return "Стоимость: " + String(prices[select] * Number(amount));
    return "Недопустимое значение!";
};

let onSubmit = () => {
    let amount = document.getElementById("amount").value;
    let select = document.getElementById("choice").value;
    let val = getCalculation(amount, select);
    setCalculation(val);
};

let validateInput = (obj) => {
    const regex = /^[0-9]+$/;

    return regex.test(obj);
};

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    let btn = document.getElementById("calculate");
    btn.addEventListener("click", onSubmit);
});