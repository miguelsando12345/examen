const clickButton = document.getElementById("clickenelboton");
const clickCountDisplay = document.getElementById("clickCount");

let clickCount = 0;

clickButton.addEventListener("click", function () {
  clickCount++;

  clickCountDisplay.textContent = clickCount;
});
