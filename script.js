//Crie um array com 30 palavras que serão usadas para nosso jogo da forca: as palavras são a sua escolha e não usaremos acentuação e nem letras especiais.Será feito um sorteio dentre uma dessas palavras para termos nossa palavra da forca. No momento que a mesma for escolhida, temos de preparar nossa aplicação, mostrando os espaços para letras conforme o tamanho da nossa palavra sorteada...

import getWord from "./words.js";

const loginForm = document.querySelector(".login-form");
const gameSection = document.querySelector(".game");
const messageBox = document.querySelector(".game-message");
let wrongLetters = [];

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nickname = document.getElementById("usuario").value.trim();

  if (nickname) {
    loginForm.style.display = "none";
    gameSection.style.display = "block";
    init();
  }
});

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");
const wrongLettersContainer = document.querySelector(".wrong-letters");
btnNew.onclick = () => init();

let indexImg;

function init() {
  indexImg = +1;
  img.src = `forca${indexImg}.jpg`;

  generateGuessSection();
  generateButtons();

  wrongLetters = [];
  wrongLettersContainer.textContent = "";
  messageBox.style.display = "none";
}

function generateGuessSection() {
  contentGuessWord.textContent = "";

  const { word, clue } = getWord();
  const wordWithoutAccent = word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(wordWithoutAccent).forEach((letter) => {
    const span = document.createElement("span");

    span.textContent = "_";
    span.setAttribute("word", letter.toUpperCase());
    contentGuessWord.appendChild(span);
  });

  contentClue.textContent = `Dica: ${clue}`;
}

function wrongAnswer(letter) {
  if (!wrongLetters.includes(letter)) {
    wrongLetters.push(letter);
    wrongLettersContainer.textContent = `Letras erradas: ${wrongLetters.join(
      ", "
    )}`;
  }

  indexImg++;
  img.src = `forca${indexImg}.jpg`;

  if (indexImg === 8) {
    setTimeout(() => {
      showMessage("Perdeu :/");
      setTimeout(() => init(), 5000);
    }, 100);
  }
}

function verifyLetter(letter) {
  const arr = document.querySelectorAll(`[word="${letter}"]`);

  if (!arr.length) {
    wrongAnswer(letter);
    return;
  }

  arr.forEach((e) => {
    e.textContent = letter;
  });

  const spans = document.querySelectorAll(`.guess-word span`);
  const won = !Array.from(spans).find((span) => span.textContent === "_");

  if (won) {
    setTimeout(() => {
      showMessage("Ganhou!!!");
      setTimeout(() => init(), 5000);
    });
  }
}

function generateButtons() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letter = String.fromCharCode(i).toUpperCase();
    btn.textContent = letter;

    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
      verifyLetter(letter);
    };

    contentBtns.appendChild(btn);
  }
}

function showMessage(text) {
  messageBox.textContent = text;
  messageBox.style.display = "block";
  const buttons = document.querySelectorAll(".btns button");
  buttons.forEach(btn => btn.disabled = true);
  setTimeout(() => {
    messageBox.style.display = "none";
  }, 3000);
}
