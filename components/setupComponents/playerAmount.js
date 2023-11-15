export default function PlayerAmount(startValue, minValue, maxValue) {
  const playerAmount = document.createElement("input")

  playerAmount.type = "number"
  playerAmount.id = "playerAmount"
  playerAmount.value = startValue;
  playerAmount.min = minValue;
  playerAmount.max = maxValue;

  return playerAmount
}