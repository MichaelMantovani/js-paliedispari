# Pali e dispari

<br>
<br>
<br>

**TRACCIA**
**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.


**SVOLGIMENTO TRACCIA PALIDROMA**

- Recupero gli elementi dal DOM
*Creo una funzione* di controllo per verificare se la parola è palindroma
  - Recupero la parola 
  - Scompongo la parola lettera per lettera 
  - Riconpongo la parola invertendola
  - Controllo se la parola invertita è uguale a quella data dall'utente
  **SE** sono uguali 
    - La parola è palindroma
  **ALTRIMENTI**
    - La parola non è palindroma 
**AL CLICK** di un bottone 
  - Recupero il valore dell'input
  - Verifico che sia una parola 
  - Controllo se la parola è palindroma
  - Stampo in pagina il risultato 