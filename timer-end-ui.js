// Timer
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    updateInfo();

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame(false);
    }
  }, 1000);
}

// Level Completed
function levelCompleted() {
  clearInterval(timer);

  if (level >= 3) {
    endGame(true);
  } else {
    document.getElementById("gameMessage").textContent = "Level Completed! Moving to next level...";
    level++;

    setTimeout(() => {
      loadLevel();
    }, 1500);
  }
}

// End Game
function endGame(won) {
  clearInterval(timer);

  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("endScreen").classList.remove("hidden");

  document.getElementById("endTitle").textContent = won ? "Congratulations! You Won!" : "Game Over!";
  document.getElementById("finalScore").textContent = score;
  document.getElementById("finalMoves").textContent = moves;
  document.getElementById("finalLevel").textContent = level;

  saveToLeaderboard(won);
  displayLeaderboard("finalLeaderboardBody");
}

// Restart Game
function restartGame() {
  document.getElementById("endScreen").classList.add("hidden");
  document.getElementById("startScreen").classList.remove("hidden");
  document.getElementById("playerName").value = "";
  document.getElementById("playerWarning").textContent = "";
}

// Update Information
function updateInfo() {
  document.getElementById("level").textContent = level;
  document.getElementById("score").textContent = score;
  document.getElementById("moves").textContent = moves;
  document.getElementById("time").textContent = timeLeft;
}
