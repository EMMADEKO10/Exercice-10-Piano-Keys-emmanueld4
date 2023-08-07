// // The keys and notes variables store the piano keys
// const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
// const notes = [];
// keys.forEach(function(key){
//   notes.push(document.getElementById(key));
// })

// // Write named functions that change the color of the keys below

// // Fonction pour changer la couleur de fond des touches


// // Write a named function with event handler properties


// // Write a loop that runs the array elements through the function


// // These variables store the buttons that progress the user through the lyrics
// let nextOne = document.getElementById('first-next-line');
// let nextTwo = document.getElementById('second-next-line');
// let nextThree = document.getElementById('third-next-line');
// let startOver = document.getElementById('fourth-next-line');

// // This variable stores the '-END' lyric element
// let lastLyric = document.getElementById('column-optional');

// // These statements are "hiding" all the progress buttons, but the first one
// nextTwo.hidden = true;
// nextThree.hidden = true;
// startOver.hidden= true;

// // Write anonymous event handler property and function for the first progress button


// // Write anonymous event handler property and function for the second progress button


// // Write anonymous event handler property and function for the third progress button


// // This is the event handler property and function for the startOver button
// startOver.onclick = function() {
//   nextOne.hidden = false;
//   startOver.hidden = true;
//    document.getElementById('word-one').innerHTML = 'HAP-';
//   document.getElementById('letter-note-one').innerHTML = 'G';
//   document.getElementById('word-two').innerHTML = 'PY';
//   document.getElementById('letter-note-two').innerHTML = 'G';
//   document.getElementById('word-three').innerHTML = 'BIRTH-';
//   document.getElementById('letter-note-three').innerHTML = 'A';
//   document.getElementById('word-four').innerHTML = 'DAY';
//   document.getElementById('letter-note-four').innerHTML = 'G';
//   document.getElementById('word-five').innerHTML = 'TO';
//   document.getElementById('letter-note-five').innerHTML = 'C';
//   document.getElementById('word-six').innerHTML = 'YOU!';
//   document.getElementById('letter-note-six').innerHTML = 'B';
// }












// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below

// Function to change the background color of the keys
function changeKeyColor(event) {
  event.target.style.backgroundColor = 'red';
}
// Fonction qui renvoie la couleur de fond des touches à leur valeur par défaut lorsqu'elles sont relâchées avec une chaîne vide
function keyReturn(event) {
  event.target.style.backgroundColor = '';
}

// Fonction qui joue la note correspondante lorsqu'une touche est cliquée
function playNote() {
  const note = document.getElementById(`${this.dataset.note}`);
  note.currentTime = 0;
  note.play();
}

// Ajoute les gestionnaires d'événements pour chaque note
function addEventListenersToNotes(note) {
  note.addEventListener('mousedown', changeKeyColor); // Lorsque la souris est enfoncée sur une touche, change sa couleur de fond
  note.addEventListener('mouseup', keyReturn); // Lorsque la souris est relâchée sur une touche, renvoie sa couleur de fond à sa valeur par défaut
  note.addEventListener('click', playNote); // Lorsqu'une touche est cliquée, joue sa note correspondante
}

// Ajouter les gestionnaires d'événements à chaque note
notes.forEach(addEventListenersToNotes);

// // Write a loop that runs the array elements through the function
// notes.forEach(function(note) {
//   note.addEventListener('click', playNote);
//   note.addEventListener('mousedown', changeKeyColor);
//   note.addEventListener('mouseup', function(event) {
//     event.target.style.backgroundColor = '';
//   });
// });

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
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
  document.getElementById('letter-note-four').innerHTML = 'F';
  document.getElementById('letter-note-five').innerHTML = 'G';
  document.getElementById('letter-note-six').innerHTML = 'E';
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