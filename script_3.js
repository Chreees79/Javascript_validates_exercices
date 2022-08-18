//VARIABLES'S INITIALIZATION ------------------------------

var space = " ";
var hashtag = "#";
let inputUser = "";

//FUNCTION TO PYRAMID'S DISPLAY -------------------------------
function pyramid(inputUser){
  inputUser = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? 🪜");
  if(inputUser > 0){
    for(var i=1; i<=inputUser; i++) {
      result = space.repeat(inputUser-i) + hashtag.repeat(i);
      console.log(result);
    }
  } else {
    console.log("rentre un nombre positif! c'est plus sympa de voir une pyramide !")
  };
};

pyramid(inputUser)