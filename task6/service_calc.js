const food_prices = {
    "Бургер": 300,
    "Шаурма": 200,
    "Картофель фри": 100,
};

const additional_prices = {
    "Сырный лаваш": 50,
    "Обычный лаваш": 0
};

const salt_price = {
    true: 20,
    false: 0
};


function calculate(food_type, additional_type, amount) {
    if(/^[0-9]+$/.test(amount))
        return `Итого: ${String((food_prices[food_type] + additional_prices[additional_type]) * amount)}`
    return "Ошибка: Недопустимое значение"
}

function changeValue(value) {
    document.getElementById("result").replaceChildren(value);
}

function updatePrice() {
    let VALUE = 0;
    let radios = document.getElementsByName("r");
    let radio_val = "Бургер";

    radios.forEach((radio) => {
        if(radio.checked) {
            radio_val = radio.value;
            let radio_price = food_prices[radio.value];

            if (radio_price !== undefined) {
                VALUE += radio_price;
            }
        }
    });

    let sel = document.getElementById("add");
    sel.style.display = (radio_val == "Шаурма") ? "block" : "none";
    let selection = document.getElementById("additional");
    let select = selection[0];

    VALUE += additional_prices[select.value];

    let check = document.getElementById("check");
    check.style.display = (radio_val == "Картофель фри" ? "block" : "none");

    

    console.log(select);
    console.log(VALUE)
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    let radios = document.getElementsByName("r");

    let additionals = document.getElementById("add");
    let additional_select = document.getElementById("additional");
    let check = document.getElementById("check");

    additionals.style.display = "none";
    check.style.display = "none";

    additional_select.addEventListener("change", (event) => {
        let target = event.target;
        console.log(target.value);
        updatePrice();
    });

    radios.forEach((radio) => {
        radio.addEventListener("change", (event) => {
            let target = event.target;
            updatePrice();
        })
    });

    document.getElementById("checkbox").addEventListener("change", (event) => {
        let target = event.target;
        console.log(target.value)
        updatePrice();
   
    });
});