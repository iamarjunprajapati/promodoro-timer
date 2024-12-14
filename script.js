// for (let i = )

let minute = 25;
let seconds = 0;

let displaySeconds = document.querySelector('#display-seconds');
let displayMinutes = document.querySelector('#display-minutes');
function timer() {
    let interval = setInterval(() => {
        if (minute <= 0 && seconds <= 0) {
            clearInterval(interval);
            displayMinutes.innerText = "00"
            displaySeconds.innerText = "00";
        }
        // Handle second and minute adjustments
        if (seconds <= 0) {
            seconds = 60; // Reset seconds
            minute--; // Decrease minute
            displayMinutes.innerText = minute; // Update minutes
        }
        seconds--;
        displaySeconds.innerText = seconds;
    }, 1000);
}





