// 1. funzione che genera la tabella con tutti i numeri
// 2. una funzione che va a scrivere i numeri (push in un array)
// 3. una funzione (associata al bottone) che genera dei numeri random
// 4. funzione che aggiunge una class classList.add (per evidenziare i numeri usciti)
// 5. funzione che genera delle tabelline da 24
// funzioni vanno dichiarate e invocate


//  1. funzione che genera tabella con i numeri  
function generateTable(containerId, rows, cols) {   // 1 parametro = id del contenitore dove generare tabella | n righe | n colonne
    const container = document.getElementById(containerId); 
    const table = document.createElement('table');
  
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('tr'); // finche i < parametro rows genera righe
  
      for (let j = 1; j <= cols; j++) {         // uguale ma con colonne
        const cell = document.createElement('td'); 
        const number = i * 10 + j;              // i riga *10 numero colonne + j colonne
        cell.textContent = number;
        row.appendChild(cell);
      }
  
      table.appendChild(row);
    }
  
    container.appendChild(table);
  }
  

const extractedNumbers = [];          // array che contiene numeri gia estratti

// 3. funzione che genera numeri random associata al bottone

const randomNumbersButtonGenerator = document.getElementById('randomNumbers');
randomNumbersButtonGenerator.addEventListener('click', function() {
  const randomNum = generateNumbers();
  console.log(randomNum);
  highlightNumber(randomNum);                   // chiamo la funzione per applicare l'highlight e stampare
});


// 3.1 (2) funzione che stampa i numeri in un array e se sono gia usciti non li riestrae


function generateNumbers() {
    let randomNum = Math.floor(Math.random() * 90) + 1;    // genero numero casuale da 0 a 90
    if (extractedNumbers.includes(randomNum)) {
      return generateNumbers();                            // funzione riparte se il numero si trova gia nell'array
    }
    extractedNumbers.push(randomNum);
    console.log(extractedNumbers)
    return randomNum;
  }


// 4. funzione che evidenza i numeri usciti e li stampa a schermo

function highlightNumber(number) {
    const cells = document.querySelectorAll('td');
  
    cells.forEach((cell) => {
      const cellNumber = parseInt(cell.textContent);                    
  
      if (cellNumber === number) {
        console.log('evidenzia cella n:', number);
        cell.classList.add('highlight');

        const numbersList = document.getElementById('numbersList');  
        numbersList.innerHTML = '';                                     // svuoto la lista
        const listItem = document.createElement('li');
        listItem.textContent = `Il numero estratto è ${number}`;
        numbersList.appendChild(listItem);                             // stampo il numero
      }
    });
  }


// chiamo funzione per generare tabella 

generateTable('tableContainer', 9, 10);