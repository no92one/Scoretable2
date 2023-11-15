export default function PlayerNames(amount) {
  console.log("Rebuilding - ", amount);
  const playerNames = document.createElement("section")

  for (let i = 1; i <= amount; i++) {
    const div = document.createElement("div")

    const playerInput = document.createElement("input")
    playerInput.type = "text"
    playerInput.id = i + "NameInput";
    playerInput.placeholder = "Enter name"

    const playerLabel = document.createElement("label")
    playerLabel.htmlFor = i + "NameInput";
    playerLabel.innerText = `Player ${i} name:`

    div.appendChild(playerLabel)
    div.appendChild(playerInput)
    playerNames.appendChild(div)
  }

  return playerNames
}