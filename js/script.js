console.log('JS OK')


// Recupero gli elementi dal DOM
const palindromeInput = document.getElementById('palindrome');
const palindromeButton = document.getElementById('btn-palindrome');
const palindromeResultPlaceholder = document.querySelector('.word .result');


// Creo una funzione di controllo per verificare se la parola è palindroma
function isPalindrome(word){
  const wordLetters = word.split('')
  
  let reversedWord = ''
  for(let i = wordLetters.length - 1; i >= 0; i--) {
    reversedWord += wordLetters[i]
  }


  let isValid = false
  if (reversedWord === word) isValid = true 


  return isValid;
}





