  "use strict";
// document.querySelector(".message").textContent = "🎉 Correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const readText = (read) => {
  let utterance = new SpeechSynthesisUtterance(read);
  speechSynthesis.speak(utterance);
};
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    readText("No Number!");
    displayMessage("⛔ No Number!");
  } else if (guess === secretNumber) {
    readText("Correct Number!")
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    console.log(secretNumber, guess);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      readText(guess > secretNumber ? "Too high" : "Too low");
      displayMessage(guess > secretNumber ? "🍇 Too high" : "☠️ Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      readText("You lost the game!");
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
