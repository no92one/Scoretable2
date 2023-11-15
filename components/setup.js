import ScoreBoard from "./scoreBoard.js";
import CreateBtn from "./setupComponents/createBtn.js";
import PlayerAmount from "./setupComponents/playerAmount.js"
import PlayerNames from "./setupComponents/playerNames.js";

let playerList = []
let numbersOfPlayers = 2;

export default function Setup() {
  const main = document.createElement("main")
  const playerAmount = PlayerAmount(numbersOfPlayers, 2, 12);
  const playerNames = PlayerNames(numbersOfPlayers);
  const createBtn = CreateBtn();

  createBtn.addEventListener("click", createScoreboard)

  playerAmount.addEventListener("change", (event) => {
    updatePlayerNames(event)
  })

  main.appendChild(playerAmount)
  main.appendChild(createBtn)
  main.appendChild(playerNames)

  return main
}

function updatePlayerNames(event) {
  if (event.target.valueAsNumber <= Number(event.target.max)
    && event.target.valueAsNumber >= Number(event.target.min)) {
    numbersOfPlayers = event.target.valueAsNumber
    document.querySelector("section").replaceWith(PlayerNames(numbersOfPlayers))
  } else {
    event.target.value = numbersOfPlayers;
  }
}

function createScoreboard() {
  playerList = []
  for (let i = 1; i <= numbersOfPlayers; i++) {
    const playerName = document.querySelectorAll("input")[i].value
    if (playerName.trim().length != 0) {
      playerList.push(playerName)
    }
  }
  console.log(playerList);
  if (playerList.length >= 2) document.querySelector("main").replaceWith(ScoreBoard(playerList))
}