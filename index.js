var randomNumber1 = Math.floor(6*Math.random()) + 1;
// console.log(randomNumber1);

var randomDice = "dice" + randomNumber1 + ".png"

var randomImage = "images/" + randomDice

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage)

var randomNumber2 = Math.floor(6*Math.random()) + 1;
// console.log(randomNumber1);

var randomDice2 = "dice" + randomNumber2 + ".png"

var randomImage2 = "images/" + randomDice2

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2)

if( randomDice > randomDice2){
    document.querySelector("h1").innerHTML = "Player 1 wins!!"

}

else if(randomDice < randomDice2){
    document.querySelector("h1").innerHTML = "Player 2 wins!!"
}

else{
    document.querySelector("h1").innerHTML = "Draw!!!"
}