var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate random number from 1 to 6


var randomDiceImage = "dice" + randomNumber1 + ".png"; // Randomise the dice images

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png through to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//var image2 = document.querySelectorAll("img")[1];

//var randomNumber2 = Math.floor(Math.random() * 6) + 1;


//image2.setAttribute("src", randomImageSource);
