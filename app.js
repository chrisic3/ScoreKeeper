const player1 = {
    score: 0,
    display: document.querySelector("#p1Display"),
    button: document.querySelector("#p1Button")
}

const player2 = {
    score: 0,
    display: document.querySelector("#p2Display"),
    button: document.querySelector("#p2Button")
}

const resetButton = document.querySelector("#reset");
const selection = document.querySelector("#winningScore");

let winningScore = parseInt(selection.value);
let isGameOver = false;

reset();

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        player.display.textContent = player.score;
     
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

p1Button.addEventListener("click", function() {
    updateScore(player1, player2);
})

p2Button.addEventListener("click", function() {
    updateScore(player2, player1);
})

resetButton.addEventListener("click", reset)

selection.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    winningScore = parseInt(selection.value);
    player1.score = 0;
    player2.score = 0;
    player1.display.textContent = player1.score;
    player2.display.textContent = player2.score;
    player1.display.classList.remove("has-text-success", "has-text-danger");
    player2.display.classList.remove("has-text-success", "has-text-danger");
    player1.button.disabled = false;
    player2.button.disabled = false;
    isGameOver = false;
}