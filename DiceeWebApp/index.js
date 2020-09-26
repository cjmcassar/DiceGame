
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate random number from 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // Randomise the dice images

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png through to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate random number from 1 to 6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png through to images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // select the second image class and set the image source

//If player 1 wins
if (randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}

// If player 2 wins
else if (randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}
