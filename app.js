import ScoreBoard from "./components/scoreBoard.js";

const playerAmount = document.querySelector("#playerAmount")

let playerList = ["player 1", "player 2"]
document.body.appendChild(ScoreBoard(playerList))


// Event Listeners_____________________________________________________

playerAmount.addEventListener("change", (event) => {
  if (event.target.valueAsNumber <= Number(event.target.max)
    && event.target.value >= Number(event.target.min)) {
    playerList = []

    for (let i = 1; i <= event.target.value; i++) {
      playerList.push("player " + i)
    }

    document.querySelector("main").replaceWith(ScoreBoard(playerList))
  } else {
    event.target.value = playerList.length;
  }
})
