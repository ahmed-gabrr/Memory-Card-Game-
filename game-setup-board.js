// Start Game
function startGame() {
  const nameInput = document.getElementById("playerName").value.trim();
  const warning = document.getElementById("playerWarning");

  if (nameInput.length < 2) {
    warning.textContent = "Please enter a player name with at least 2 characters.";
    return;
  }

  warning.textContent = "";
  playerName = nameInput;
  playerId = generatePlayerId(playerName);
  icons = [...cardSets[selectedTheme]];

  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("endScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");

  level = 1;
  score = 0;
  moves = 0;

  loadLevel();
}

// Load Level
function loadLevel() {
  clearInterval(timer);

  firstCard = null;
  secondCard = null;
  lockBoard = false;
  matchedPairs = 0;
  extraTimeUsed = false;

  if (level === 1) {
    totalPairs = 4;
    timeLeft = 60;
  } else if (level === 2) {
    totalPairs = 6;
    timeLeft = 50;
  } else {
    totalPairs = 8;
    timeLeft = 40;
  }

  updateInfo();
  document.getElementById("gameMessage").textContent = "";
  createHelperButtons();
  createBoard();
  startTimer();
}

// Helper Button UI
function createHelperButtons() {
  let helperContainer = document.getElementById("helpers");

  if (!helperContainer) {
    helperContainer = document.createElement("div");
    helperContainer.id = "helpers";
    helperContainer.style.marginBottom = "15px";
    document.getElementById("gameScreen").prepend(helperContainer);
  }

  helperContainer.innerHTML = `
    <button id="timeHelperBtn" onclick="addExtraTime()">+5 Seconds</button>
  `;
}

// Add 5 Seconds Helper
function addExtraTime() {
  if (extraTimeUsed) return;

  timeLeft += 5;
  extraTimeUsed = true;

  document.getElementById("timeHelperBtn").disabled = true;

  const bonus = document.getElementById("timeBonus");
  bonus.style.opacity = "1";
  bonus.style.transform = "translateY(-6px) scale(1.3)";

  setTimeout(() => {
    bonus.style.opacity = "0";
    bonus.style.transform = "translateY(0px) scale(1)";
  }, 1200);

  updateInfo();
}

// Create Board
function createBoard() {
  const gameBoard = document.getElementById("gameBoard");
  gameBoard.innerHTML = "";

  const selectedIcons = icons.slice(0, totalPairs);
  let cardsArray = [...selectedIcons, ...selectedIcons];
  cardsArray = shuffle(cardsArray);

  gameBoard.style.gridTemplateColumns = "repeat(4, 100px)";

  cardsArray.forEach(icon => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.icon = icon;

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">${icon}</div>
        <div class="card-back"></div>
      </div>
    `;

    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}
