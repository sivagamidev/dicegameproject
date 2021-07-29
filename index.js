var randomNumber1 = Math.floor(Math.random() * 6 )+1;   // generates random number 1

leftRandomImg = "images/dice"+randomNumber1 + ".png";     // that random number is assigmed to image

document.querySelectorAll('img')[0].setAttribute("src",leftRandomImg);       // replacing image value to it

var randomNumber2 = Math.floor(Math.random() * 6)+1;             // generates random number 2

rightRandomImg = "images/dice"+randomNumber2 + ".png";          // that random number is assigmed to image

document.querySelectorAll("img")[1].setAttribute("src", rightRandomImg);     // replacing image value to it


// Displaying heading based on highest value

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML =  "🚩Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = "Player 2 Wins🚩";
}else if(randomNumber1 == randomNumber2){
    document.querySelector('h1').innerHTML = "Draw🚩";
}else{
    document.querySelector('h1').innerHTML = "Refresh me";
}
