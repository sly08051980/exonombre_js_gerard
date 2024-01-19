console.log("script chargé");
document.addEventListener("DOMContentLoaded", function () {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let number = [];
  let choice = document.querySelector(".guessField");
  let count = 0;
  let lowOrHi = document.querySelector(".lowOrHi");
  let button = document.createElement("button");
  let resultParas = document.querySelector(".resultParas");
  let para1 = document.createElement("p");
  let guesses = document.querySelector(".guesses");

  document.querySelector(".guessSubmit").addEventListener("click", function () {
    console.log("test");
    numberNotNull();
  });
  // verifier si le nombre est null lancer le jeu 
  function numberNotNull() {
    if (document.querySelector(".guessField").value == "") {
      alert("veuillez remplir le champs");
    } else {
      if (choice.value == randomNumber) {
        win();
      }
      if (count < 9) {
        game();
      } else {
        loose();
      }
    }
  }
  //function du jeu  pour inclure les valeurs dans un tableau
  function game() {
    if (number.includes(choice.value)) {
      alert("chiffre deja selectionner");
      document.querySelector(".guessField").value = "";
    } else {
      number.push(choice.value);
      guesses.innerText = number;
      difference();
      document.querySelector(".guessField").value = "";
      count++;
      lowOrHi.innerText = "Vous avez utilisez  " + count + " essaie sur 10";
    }
  }
  //function lorsque l on perd
  function loose() {
    lowOrHi.innerText = "Vous avez utilisez  " + count + " essaie sur 10";
    document.querySelector(".guessSubmit").style.display = "none";
    button.innerText = "Rejouer";
    resultParas.appendChild(button);
  }
  //fonction pour guider le joueur
  function difference() {
    if (choice.value > randomNumber) {
      para1.innerText = "plus bas";
      resultParas.appendChild(para1);
    } else {
      para1.innerText = "plus haut";
      resultParas.appendChild(para1);
    }
  }
  //function gagner
  function win() {
    let lastResult = document.querySelector(".lastResult");
    lastResult.innerText = "Bravo vous avez gagné";
    document.querySelector(".guessSubmit").style.display = "none";
    lowOrHi.style.display = "none";
    para1.style.display = "none";
    guesses.style.display = "none";
    button.innerText = "Rejouer";
    resultParas.appendChild(button);
  }

  button.addEventListener("click", function () {
    location.reload();
  });
});
