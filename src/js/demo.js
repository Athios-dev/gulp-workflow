// 🎯 DOM ITEMS
const body = document.querySelector('body');
const h1 = document.createElement('h1');

// ▶️ INITIALISATION
init();
function init() {
  h1.textContent = getRandomWord();
  body.append(h1);
}

// ⚙️ GET RANDOM WORD
function getRandomWord() {
  let words = ["Hi", "Hey", "Hello"];
  let alea = Math.floor(Math.random() * words.length);
  return words[alea];
}