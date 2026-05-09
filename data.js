// Card Category Data + Global Variables
const cardSets = {
  fruits: ["🍎", "🍌", "🍇", "🍓", "🍒", "🍉", "🥝", "🍍", "🥥", "🍑"],
  animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯"],
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
};

let icons = [...cardSets.fruits];
let selectedTheme = "fruits";
let playerName = "";
let playerId = "";
let leaderboard = JSON.parse(localStorage.getItem("memoryGameLeaderboard")) || [];

// Game Variables
let level = 1;
let score = 0;
let moves = 0;
let timeLeft = 60;
let timer;

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
let totalPairs = 0;

// One-time helper per level
let extraTimeUsed = false;
