const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    const date = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    const dayName = days[now.getDay()];
    document.getElementById("time").textContent = timeString;
    document.getElementById("day").textContent = `${dayName}`;

    let suffix = "th";

    if (date === 1 || date === 21 || date === 31) {
        suffix = "st";
    }
    else if (date === 2 || date === 22) {
        suffix = "nd";
    }
    else if (date === 3 || date === 23) {
        suffix = "rd";
    }

    document.getElementById("date").textContent =
        `-- ${date}${suffix} ${monthName}, ${year} --`;
}

updateClock();
setInterval(updateClock, 1000);