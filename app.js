

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const selection = document.querySelector("#winningScore");

let p1Score = 0;
let p2Score = 0;
let winningScore = selection.value;
let isGameOver = false;

p1Button.addEventListener("click", function() {
    if (!isGameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
     
        if (p1Score === winningScore) {
            isGameOver = true;
        }
    }
})

p2Button.addEventListener("click", function() {
    if (!isGameOver) {
        p2Score++;
        p2Display.textContent = p2Score;

        if (p2Score === winningScore) {
            isGameOver = true;
        }
    }
})

resetButton.addEventListener("click", reset)

selection.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    isGameOver = false;
}