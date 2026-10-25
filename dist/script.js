function myLineUp(event) {
  event.preventDefault();

  const form = document.getElementById("lineupForm");
  const data = new FormData(form);

  for (const [name, value] of data) {
    console.log(name + ": " + value);
  }

  const status = data.get("status");
  const gameDate = data.get("gameDate");
  const players = data.getAll("players");

  const message =
    "Status: " + status +
    ", Date: " + gameDate +
    ", Players: " + (players.length > 0 ? players.join(", ") : "none selected");

  document.getElementById("result").textContent = message;
}

document.getElementById("submitBtn").addEventListener("click", myLineUp);