
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const resultText = resultContainer.querySelector('h2');

function moveNoButton() {
  noBtn.style.position = 'fixed';
  noBtn.style.transform = 'none';

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    gifResult.style.display = 'none';
    resultContainer.style.display = "flex";
    resultText.textContent = '{ error: Já existe um usuário com esse nome }';
  }, 3000);
});

noBtn.addEventListener('click', moveNoButton);
