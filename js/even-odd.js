console.log('JS OK')

// Recupero gli elementi dal DOM
const userChoice = document.getElementById('even-odd');
const numberInput = document.getElementById('number');
const resultPlaceholder = document.querySelector('.number-game .result')
const numberButton = document.getElementById('btn-even-odd')

// Creo una funzione che genera un numero randomico da 1 a 5  
function getRandomNumber (min,max){
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}





