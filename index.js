const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const bodyEl = document.querySelector('body');

let bgChangeIntervalID = '';

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColorSelect(array) {
  return array[randomIntegerFromInterval(0, array.length - 1)];
}

function onStartButtonClick() {
  bgChangeIntervalID = setInterval(() => { bodyEl.style = `background-color: ${randomColorSelect(colors)};` }, 1000);
  startButton.setAttribute('disabled', true);
}

function onStopButtonClick() {
  clearInterval(bgChangeIntervalID);
  startButton.removeAttribute('disabled');
}


