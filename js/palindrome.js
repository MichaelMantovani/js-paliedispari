console.log('JS OK')


// Recupero gli elementi dal DOM
const wordInput = document.getElementById('palindrome');
const palindromeButton = document.getElementById('btn-palindrome');
const palindromeMessagePlaceholder = document.querySelector('.word .result');


// Creo una funzione di controllo per verificare se la parola è palindroma
function isPalindrome(word){
  const wordLetters = word.split('')
  
  let reversedWord = ''
  for(let i = wordLetters.length - 1; i >= 0; i--) {
    reversedWord += wordLetters[i]
  }


  let isPalindrome = false
  if (reversedWord === word) isPalindrome = true 


  return isPalindrome;
}


palindromeButton.addEventListener('click', function(){
  wordElement = wordInput.value.trim()

  let isPalindromeResult;
  
  if (!isNaN(wordElement) || wordElement.length < 1) {
    alert('Inserisci una parola valida')
    return
  } else {
    isPalindromeResult = isPalindrome(wordElement)
  }
  
  let isPalindromeMessage = 'La parola che hai scelto è palidroma'
  if (isPalindromeResult === false) isPalindromeMessage = 'La parola che hai scelto non è palidroma'


  palindromeMessagePlaceholder.innerText = isPalindromeMessage

})





