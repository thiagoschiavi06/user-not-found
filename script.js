const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const resultText = resultContainer.querySelector("h2");


function moveNoButton() {
  noBtn.style.position = "fixed"; 

  const margin = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - margin;
  const maxY = window.innerHeight - noBtn.offsetHeight - margin;

  const newX = Math.floor(Math.random() * (maxX - margin)) + margin;
  const newY = Math.floor(Math.random() * (maxY - margin)) + margin;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
  noBtn.style.transform = "none";
}

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  resultContainer.style.display = "flex";
  resultText.textContent = "{error: Já existe um usuário com esse nome }";
});
