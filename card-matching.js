// Shuffle Cards
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Flip Card
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  if (this.classList.contains("matched")) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  moves++;
  updateInfo();
  checkMatch();
}

// Check Matching Cards
function checkMatch() {
  const isMatch = firstCard.dataset.icon === secondCard.dataset.icon;

  if (isMatch) {
    disableMatchedCards();
  } else {
    unflipCards();
  }
}

// Correct Match
function disableMatchedCards() {
  firstCard.classList.add("matched");
  secondCard.classList.add("matched");

  score += 10 * level;
  matchedPairs++;

  resetBoard();
  updateInfo();

  if (matchedPairs === totalPairs) {
    levelCompleted();
  }
}

// Wrong Match
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 800);
}

// Reset Selected Cards
function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}
