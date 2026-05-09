
// Save Score to Leaderboard

function saveToLeaderboard(won) {
  const record = {
    name: playerName,
    id: playerId,
    score: score,
    level: level,
    moves: moves,
    result: won ? "Won" : "Lost",
    date: new Date().toLocaleString()
  };

  leaderboard.push(record);
  leaderboard.sort((a, b) => b.score - a.score || b.level - a.level || a.moves - b.moves);
  leaderboard = leaderboard.slice(0, 10);
  localStorage.setItem("memoryGameLeaderboard", JSON.stringify(leaderboard));
}

// Display Leaderboard
function displayLeaderboard(bodyId) {
  const body = document.getElementById(bodyId);
  if (!body) return;

  body.innerHTML = "";

  if (leaderboard.length === 0) {
    body.innerHTML = `<tr><td colspan="5">No scores yet</td></tr>`;
    return;
  }

  leaderboard.forEach((player, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${player.name}</td>
      <td>${player.id}</td>
      <td>${player.score}</td>
      <td>${player.level}</td>
    `;
    body.appendChild(row);
  });
}
