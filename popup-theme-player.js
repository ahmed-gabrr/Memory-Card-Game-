// How to Play Popup
function openRules() {
  document.getElementById("rulesPopup").classList.remove("hidden");
}

function closeRules() {
  document.getElementById("rulesPopup").classList.add("hidden");
}

function closeRulesByBackground(event) {
  if (event.target.id === "rulesPopup") {
    closeRules();
  }
}

// Select Card Theme
function selectTheme(card) {
  document.querySelectorAll(".theme-card").forEach(themeCard => {
    themeCard.classList.remove("selected");
  });

  card.classList.add("selected");
  selectedTheme = card.dataset.theme;
}

// Generate Unique Player ID
function generatePlayerId(name) {
  const cleanName = name.trim().substring(0, 3).toUpperCase().replace(/[^A-Z0-9]/g, "P") || "PLY";
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  const timeCode = Date.now().toString().slice(-4);
  return `${cleanName}-${randomNumber}-${timeCode}`;
}
