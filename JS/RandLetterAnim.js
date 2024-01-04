const CorrectWord = ["John", "Vhan", "JPVC","Live","love","Code"];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let currentIndex = 0;
let currentWord = CorrectWord[currentIndex];
let animationInterval;

function getRandomLetter() {
  return letters[Math.floor(Math.random() * 26)];
}

function startAnimation() {
  let iteration = 0;
  const targetElements = document.querySelectorAll(".randomletter");

  clearInterval(animationInterval);

  animationInterval = setInterval(() => {
    targetElements.forEach((targetElement) => {
      targetElement.innerText = targetElement.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return currentWord[index];
          }

          return getRandomLetter();
        })
        .join("");
    });

    if (iteration >= currentWord.length) {
      clearInterval(animationInterval);
      setTimeout(() => {
        clearWordAndProceed();
      }, 1000); // Freeze for 1 second
    }

    iteration += 1;
  }, 60);
}

function clearWordAndProceed() {
  currentIndex = (currentIndex + 1) % CorrectWord.length;
  currentWord = CorrectWord[currentIndex];
  startAnimation();
}

document.addEventListener("DOMContentLoaded", function () {
  startAnimation();
});