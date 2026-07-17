const guessElement = document.getElementById("Guess");
const button = document.getElementById("submit");
const hint = document.getElementById("hint");
const tryn = document.getElementById("tries");

let num = Math.floor(Math.random() * 100 + 1);
console.log(num);

let tries = 0;

button.onclick = function () {
    tries++;
    const guessValue = Number(guessElement.value);

    if (num > guessValue) {
        hint.textContent = `Guess Higher`;
    }
    else if (num < guessValue) {
        hint.textContent = `Guess Lower`;
    }
    else {
        hint.textContent = `You Won! :)`;
    }
    tryn.textContent = `Tries: ` + tries;
}