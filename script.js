function checkRefresh() {
  if (!sessionStorage.getItem("rollDice")) {
    sessionStorage.setItem("rollDice", "extra")
 
  } else{
      

const randomNumber1 = Math.floor(Math.random() * 6)+ 1;
console.log(randomNumber1);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!"
} 

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
} 

else {
    document.querySelector("h1").innerHTML = "Player 1 wins"
}

  }
 
}

document.querySelector("body").onload = checkRefresh();  