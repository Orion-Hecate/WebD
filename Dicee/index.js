// Generating 2 random numbers between 1 to 6
var randNum1 = Math.floor(Math.random() * 6) + 1;
var randNum2 = Math.floor(Math.random() * 6) + 1;

// Preparing the attribute values
var randImgSrc1 = 'images/dice' + randNum1 + '.png';
var randImgSrc2 = 'images/dice' + randNum2 + '.png';

// Changing the attribute values for both image tags
document.querySelectorAll('img')[0].setAttribute('src', randImgSrc1);
document.querySelectorAll('img')[1].setAttribute('src', randImgSrc2);

// Winning Logic
if (randNum1 > randNum2) {
    document.querySelector('h1').innerHTML = '🚩Player1 Wins!';
}
else if (randNum2 > randNum1) {
    document.querySelector('h1').innerHTML = 'Player2 Wins!🚩';
}
else {
    document.querySelector('h1').innerHTML = 'Draw!';    
}
