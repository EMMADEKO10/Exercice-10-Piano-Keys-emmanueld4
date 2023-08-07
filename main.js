// 1.   The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

//2.   Write named functions that change the color of the keys below

// Function to change the background color of the keys
function changeKeyColor(event) {
  event.target.style.backgroundColor = 'red';
}
//3.    Fonction qui renvoie la couleur de fond des touches à leur valeur par défaut lorsqu'elles sont relâchées avec une chaîne vide
function keyReturn(event) {
  event.target.style.backgroundColor = '';
}
//4.     Fonction qui joue la note correspondante lorsqu'une touche est cliquée
function playNote() {
  const note = document.getElementById(`${this.dataset.note}`);
  note.currentTime = 0;
  note.play();
}

//5.   Ajoute les gestionnaires d'événements pour chaque note  // // Écrivez une boucle qui fait passer les éléments du tableau à travers la fonction.
function addEventListenersToNotes(note) {
  note.addEventListener('mousedown', changeKeyColor); // Lorsque la souris est enfoncée sur une touche, change sa couleur de fond
  note.addEventListener('mouseup', keyReturn); // Lorsque la souris est relâchée sur une touche, renvoie sa couleur de fond à sa valeur par défaut
  note.addEventListener('click', playNote); // Lorsqu'une touche est cliquée, joue sa note correspondante
}

//6.   Ajouter les gestionnaires d'événements à chaque note
notes.forEach(addEventListenersToNotes);





