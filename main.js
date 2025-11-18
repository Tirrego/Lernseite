// Alle Themen zusammenführen, um Mix-Modus zu ermöglichen
const alleThemen = { thema1, thema2, thema3, thema4};
alleThemen.mix = [].concat(...Object.values(alleThemen));

let currentTopic = null;
let currentIndex = 0;
let showAnswer = false;

const card = document.getElementById('card');
const cardNumber = document.getElementById('card-number');
const container = document.querySelector('.card-container');
const topicButtons = document.querySelectorAll('.topic-btn');
const numberNav = document.getElementById('number-nav');

topicButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentTopic = btn.dataset.topic;
    currentIndex = 0;
    showAnswer = false;
    container.style.display = "flex";
    createNumberNav();
    showCard();
  });
});

card.addEventListener('click', () => {
  showAnswer = !showAnswer;
  showCard();
});

function createNumberNav() {
  numberNav.innerHTML = '';
  const total = alleThemen[currentTopic].length;
  
  for(let i = 0; i < total; i++) {
    const box = document.createElement('div');
    box.classList.add('number-box');
    box.textContent = i + 1;
    box.addEventListener('click', () => {
      currentIndex = i;
      showAnswer = false;
      showCard();
    });
    numberNav.appendChild(box);
  }
}

function updateActiveNumber() {
  const boxes = document.querySelectorAll('.number-box');
  boxes.forEach((box, index) => {
    box.classList.toggle('active', index === currentIndex);
  });
}

function showCard() {
  if(!currentTopic || !alleThemen[currentTopic].length) return;
  const item = alleThemen[currentTopic][currentIndex];
  
  card.textContent = showAnswer ? item.a : item.q;
  
  card.classList.remove('frage', 'antwort');
  card.classList.add(showAnswer ? 'antwort' : 'frage');
  
  cardNumber.textContent = `Frage ${currentIndex + 1} von ${alleThemen[currentTopic].length}`;
  
  updateActiveNumber();
}
