const temp = document.getElementById("Temp");
const ToCelsius = document.getElementById("ToCelsius");
const ToFahrenheit = document.getElementById("ToFahrenheit");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let tem;

submit.onclick = function () {

    if (ToCelsius.checked && ToFahrenheit.checked) {
        result.textContent = "Please select one unit...!";
    }
    else if (ToCelsius.checked) {
        tem = (Number(temp.value) - 32) * (5 / 9);
        result.textContent = `${Number(temp.value)}°F = ${tem.toFixed(2)}°C`;
    }
    else if (ToFahrenheit.checked) {
        tem = (Number(temp.value) * 9 / 5) + 32;
        result.textContent = `${Number(temp.value)}°C = ${tem.toFixed(2)}°F`;
    }
    else {
        result.textContent = "Please select a unit...!";
    }

}