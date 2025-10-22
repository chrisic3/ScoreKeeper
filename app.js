// TODO: Add winning score selector and logic

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
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

function reset() {
    p0Score = 0;
    p1Score = 0;
    p0Display.textContent = p1Score;
    p1Display.textContent = p2Score;
    isGameOver = false;
}