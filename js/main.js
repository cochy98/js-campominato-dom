/**
 *  Consegna
    Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
    L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
        con difficoltà 1 => tra 1 e 100
        con difficoltà 2 => tra 1 e 81
        con difficoltà 3 => tra 1 e 49
    Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. I numeri nella lista delle bombe non possono essere duplicati.
    In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
        - abbiamo calpestato una bomba
        - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
    La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
    BONUS:
    1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
    2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
 */

// Mi richiamo il bottone tramite 'querySelector'
const playBtn = document.querySelector('#play');

// Avvio una nuova partita al click del pulsante play
playBtn.addEventListener('click', function(){
    newGame ();
});  



/* ****************************FUNCTIONS************************************* */

/**
 * Questa funzione permette di creare un elemento 'div' ed aggiunge la classe 'cell'.
 * @param {*} number    Numero che verrà inserito dentro l'html del div.cell.
 * @returns             Restituisce l'elemento appena creato.
 */
function createNewCell (number, gridRow){
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.style.width = `calc(100% / ${gridRow})`;
    newCell.style.height = newCell.style.width;
    newCell.innerHTML = `${number}`;
    return newCell;
}

function newGame (){
    let gridElements;
    let gridRow;

    // Vado a richiamare tramite ID il div 'grid'
    const grid = document.getElementById('grid');

    // Faccio un reset ad ogni nuova partita
    grid.innerHTML = "";

    // Quando clicco sul bottone seleziono il livello di difficoltà associato
    const levelDifficult = document.getElementById('level-difficult').value;
    // E ne visualizzo il valore in console
    console.log(`Livello di difficoltà selezionato: ${levelDifficult}`);
    
    
    // Controllo il livello di difficoltà e imposto un limite di celle
    switch (levelDifficult){
        case 'easy':
        default:
            gridElements = 100;
            break;
        case 'medium':
            gridElements = 81;
            break;
        case 'hard':
            gridElements = 49;
            break;
    }

    gridRow = Math.sqrt(gridElements);

    // Ciclo per 'gridElements' volte e aggiungo ogni volta una nuova 'cell' alla 'grid'
    for (let i = 1; i <= gridElements; i++){
        const currentCell = createNewCell(i, gridRow);

        // aggiungo l'evento di click e i suoi effetti
        currentCell.addEventListener('click', function() {
            console.log(this); // this = currentCell;
            this.classList.toggle('active');
        });

        // Aggiungo la cella appena creata alla griglia
        grid.appendChild(currentCell);
    }
}