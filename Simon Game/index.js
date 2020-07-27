// Listing all the buttons
var btnsId = ['red', 'blue', 'green', 'yellow'];

// Function to get a random button
var randBtn = () =>  btnsId[Math.floor(Math.random() * 4)];

// Game Status
var started = false;
var lvl = 0;
var gamePattern = [];
var userPattern = [];

// Function to detect the initial keypress
$(document).keypress(() => {
    if (!started) {
        nextSeq();
        started = true;
    }
});

// Function to generate a new sequence every level
function nextSeq() {
    userPattern = [];

    lvl++;
    $('.main-heading').text('Level ' + lvl);

    let btnId = randBtn();
    gamePattern.push(btnId);
    $('#' + btnId).fadeIn(100).fadeOut(100).fadeIn(100);
}

// Adding Click Event Listener to store the sequence of User clicks
$('.button').click(function () {
    let userBtnId = $(this).attr("id");
    userPattern.push(userBtnId);
    toggleBtn(userBtnId);
    checkAnswer(userPattern.length - 1);
});

// Toggle the Styles of Clicked Button
var toggleBtn = (userBtnId) => {
    var activeBtn = $('#' + userBtnId);
    $(activeBtn).addClass('pressed');
    setTimeout(() => $(activeBtn).removeClass('pressed'), 100);
} 

// Function to check the Clicked Button maches the System Generated Sequence
var checkAnswer = (curLvl) => {
    console.log(gamePattern);
    console.log(userPattern);
    console.log(curLvl);
    if (gamePattern[curLvl] === userPattern[curLvl]) {
        if (userPattern.length === gamePattern.length) {
            setTimeout(nextSeq, 1000);
        }
    } else {
        $('body').addClass('game-over');
        $('.main-heading').text('Game Over, Press Any Key to Restart!');
        setTimeout(() => $('body').removeClass('game-over'), 200);
        startOver();
    }
}

// Function to reset the game status
var startOver = () => {
    lvl = 0;
    gamePattern = [];
    started = false;
}
