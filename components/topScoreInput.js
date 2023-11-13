export default function TopScoreDisplay() {
  const topScoreDisplay = document.createElement("input");

  topScoreDisplay.type = "number";
  topScoreDisplay.id = "resetBtn";
  topScoreDisplay.value = 5;

  return topScoreDisplay;
}