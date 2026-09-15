
// ===============================
// DARS TAYMERI
// ===============================

let remainingSeconds = (1 * 60 * 60) + (56 * 60) + 11;

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const hours = Math.floor(remainingSeconds / 3600);

    const minutes = Math.floor((remainingSeconds % 3600) / 60);

    const seconds = remainingSeconds % 60;

    countdownElement.textContent =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

    if (remainingSeconds > 0) {
        remainingSeconds--;
    } else {
        clearInterval(timerInterval);
        countdownElement.textContent = "00:00:00";
    }
}

updateCountdown();

const timerInterval = setInterval(updateCountdown, 1000);