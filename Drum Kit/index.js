// Preparing Sound Name
var soundName = ['tom-1', 'tom-2', 'tom-3', 'tom-4', 'snare', 'crash', 'kick-bass'];

// Mapping Keys to Audio Links
var keySound = {};
document.querySelectorAll('button').forEach((btn, index) => {
    keySound[btn.innerHTML] = new Audio('sounds/' + soundName[index] + '.mp3');
});

// Adding Annimation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(() => activeButton.classList.remove('pressed'), 100);
}

//Keypress Event Listener
document.addEventListener("keyup", (event) => {
    if (keySound[event.key] !== undefined) {
        keySound[event.key].play();
        buttonAnimation(event.key);
    }
    else {
        console.log('Please press valid key!');
        console.log(keySound);
    }
});

