const numofdice = document.getElementById("num");
const result = document.getElementById("results");
const photo = document.getElementById("photos");

function roll() {

    let values = [];
    let images = [];
    let sum = 0;
    let temp;

    if (numofdice.value <= 0) {
        result.textContent = "Enter a valid number.";
        return;
    }
    else {
        for (let i = 0; i < Number(numofdice.value); i++) {
            temp = Math.floor(Math.random() * 6 + 1);
            sum += temp;
            values.push(temp);
            images.push(`<img src="images/${temp}.png" alt="Dice ${temp}" width="100px">`)
        }

        result.textContent = `Dice: ${values.join(`, `)} | Sum: ${sum}`;
        photo.innerHTML = images.join(` `);
    }
}