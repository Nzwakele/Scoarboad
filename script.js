const players = ["Player 1", "Player 2", "Player 3", "Player 4"];

const scoreboard = document.getElementById("scoreboard");

players.forEach((player) => {
  const row = document.createElement("tr");
  const name = document.createElement("td");
  name.textContent = player;
  row.appendChild(name);
  scoreboard.appendChild(row);
});
