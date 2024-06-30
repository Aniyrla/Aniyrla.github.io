function calculateFunction(x) {
    if (x <= 7) {
        return -3 * x + 9;
    } else {
        if (x !== 7) {
            return 1 / (x - 7);
        } else {
            alert("Ошибка: деление на ноль");
        }
    }
}

var input = 10; // Пример входного значения
var result = calculateFunction(input);

if (result !== undefined) {
    document.getElementById("result").innerText = "Результат вычисления для x = " + "Входное значение: " + input +"." + " Результат = " + result;
}
