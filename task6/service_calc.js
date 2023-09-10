const food_prices = {
    "Бургер": 300,
    "Шаурма": 200,
    "Картофель фри": 100
};

const additional_prices = {
    "Посыпать солью": 20,
    "Сырный лаваш": 50,
    "Обычный лаваш": 0
};

function calculate(food_type, additional_type, amount) {
    if(/^[0-9]+$/.test(amount))
        return `Итого: ${String((food_prices[food_type] + additional_prices[additional_type]) * amount)}`
    return "Ошибка: Недопустимое значение"
}

function changeValue(value) {
    document.getElementById("result").replaceChildren(value);
}


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    let calcuation = 0;

    let radios = document.getElementsByName("r");
    let stateDom = document.getElementById("state");
    let state = "Бургер";
    let input = document.getElementById("amount_service");
    let add = document.getElementById("add");
    let additional = document.getElementById("additional")
    let check = document.getElementById("check");

    radios.forEach((radio) => {
        radio.addEventListener('change', (event) => {
            state = radio.value;

            calcuation = calculate(state, additional.value, input.value);
            if(state == "Бургер") {
                add.style.display = "none";
                check.style.display = "none";
            } else if (state == "Шаурма") {
                console.log(state)
                add.style.display = "block";
                check.style.display = "none";
            } else if (state == "Картофель фри") {
                add.style.display = "none";
                check.style.display = "block";
            }
            changeValue(calcuation);
        })
    });

    additional.addEventListener('change', () => {
        calcuation = calculate(state, additional.value, input.value);
        changeValue(calcuation);
    })

    check.addEventListener('change', () => {
        calcuation = calculate(state, additional.value, input.value);
        changeValue(calcuation);
    });
    
});