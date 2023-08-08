// 1.   The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

//2.   Write named functions that change the color of the keys below

// Function to change the background color of the keys
function keyPlay(event) {
  event.target.style.backgroundColor = 'red';
}
//3.   Fonction qui renvoie la couleur de fond des touches à leur valeur par défaut lorsqu'elles sont relâchées avec une chaîne vide

function keyReturn(event) {
  event.target.style.backgroundColor = '';
}


// Sélectionner toutes les sections de classe 'keynote'
const keynotes = document.querySelectorAll('.keynote');

// Ajouter un gestionnaire d'événements 'click' à chaque section de classe 'keynote'
keynotes.forEach(function(keynote) {
  keynote.addEventListener('mousedown', function() {
    // Changer la couleur de fond des sections #c-key.key et #e-key.key
    keynote.parentNode.style.backgroundColor = 'red';

    keynote.addEventListener('mouseup',function() {
      keynote.parentNode.style.backgroundColor = '';
    });

  });
});
// Sélectionner toutes les sections de classe 'black-keynote'
const black_keynotes = document.querySelectorAll('.black-keynote');

// Ajouter un gestionnaire d'événements 'click' à chaque section de classe 'black-keynote'

black_keynotes.forEach(function(black_keynote) {
  black_keynote.addEventListener('mousedown', function() {
    // Changer la couleur de fond des sections #c-key.key et #e-key.key
    this.parentNode.style.backgroundColor = 'red';

    black_keynote.addEventListener('mouseup',function() {
      this.parentNode.style.backgroundColor = '';            //J'ai utilisé this, vu que nous sommes dans l'object  ou la classe black-keynotes
    });

  });
});



//5.   Ajoute les gestionnaires d'événements pour chaque note  // // Écrivez une boucle qui fait passer les éléments du tableau à travers la fonction.
function addEventListenersToNotes(note) {
  note.addEventListener('mousedown', keyPlay); // Lorsque la souris est enfoncée sur une touche, change sa couleur de fond
  note.addEventListener('mouseup', keyReturn); // Lorsque la souris est relâchée sur une touche, renvoie sa couleur de fond à sa valeur par défaut
   
}

//6.   Ajouter les gestionnaires d'événements à chaque note
notes.forEach(addEventListenersToNotes);


//7. These variables store the buttons that progress the user through the lyrics

let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

//8.   This variable stores the '-END' lyric element
let lastLyric = document.getElementById ('column-optional');

//9.  These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}


// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
  lastLyric.style.display = 'none';
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}