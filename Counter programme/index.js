const decrease = document.getElementById("dec");
const increase = document.getElementById("inc");
const reset = document.getElementById("res");

let count = 0

decrease.onclick = function () {
    count--;
    document.getElementById("counter").textContent = count;
}

increase.onclick = function () {
    count++;
    document.getElementById("counter").textContent = count;
}

reset.onclick = function () {
    count = 0;
    document.getElementById("counter").textContent = count;
}