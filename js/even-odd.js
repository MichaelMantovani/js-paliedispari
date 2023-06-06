console.log('JS OK')

// Recupero gli elementi dal DOM
const userChoiceInput = document.getElementById('even-odd');
const userNumberInput = document.getElementById('number');
const resultPlaceholder = document.querySelector('.number-game .result')
const numberButton = document.getElementById('btn-even-odd')

// Creo una funzione che genera un numero randomico da 1 a 5  
function getRandomNumber (min,max){
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

// Creo una funzione di controllo per verificare se il numero è pari
function isEven(number){
  let isEven = false 
  if (number % 2 === 0) isEven = true 
  return isEven; 
}



// Mi metto in ascolto del bottone
numberButton.addEventListener('click', function(){

  // Recupero il valore degli input dal DOM
  userChoice = parseInt(userChoiceInput.value);
  userNumber = parseInt(userNumberInput.value); 
  console.log(userChoice)
  console.log(typeof userChoice)
  console.log(typeof 1 )


  // Verifico se l'utente ha inserito un numero valido 
  if (isNaN(userNumber) || userNumber < 1 || userNumber > 5){
    alert('Numeri inseriti non validi')
    return; 
  } else {
    
    // Uso la funzione per genere il numero per il PC
    const pcNumber = getRandomNumber(1,5); 
    
    // Sommo i numeri e uso la funzione per verificare se il numero è pari o dispari
    const compareNumberSum = isEven(pcNumber + userNumber)
    console.log(compareNumberSum)

    // Verifico se l'utente ha scelto pari o dispari
    let resultMessage;
    if ((userChoice === 1 && compareNumberSum) || (userChoice === 2 && !compareNumberSum)) {
       resultMessage = `Mi dispiace hai perso. Il pc ha scelto ${pcNumber}`
    } else {
      resultMessage = `Hai vinto. Il pc ha scelto ${pcNumber}`
    }

    resultPlaceholder.innerText = resultMessage
  
}})


