//VARIABLES'S INITIALIZATION ----------------------------------
let breakTalk = "";

//FUNCTION TO RUN DISCUSSION'S PROGRAM -------------------------------
function respond(inputUser){
  if (inputUser[inputUser.length-1] === "?") {
    console.log("Ouais Ouais...");
  } else if (inputUser === inputUser.toUpperCase() && inputUser.length > 0) {
    console.log("Pwa, calme-toi...");
  } else if (inputUser.toLowerCase().includes("fortnite")) {
    console.log("on s'fait une partie soum-soum ?");
  } else if (inputUser === "") {
    console.log("t'es en PLS ?");
  } else {
    console.log("balek joyeusement !");
  };
};

//FUNCTION TO RENDER PROGRAM -------------------------------------------
function talking (breakTalk) {
  breakTalk = prompt("Veux-tu discuter avec moi ? tapes ok ou ciao")
  switch (breakTalk.toLowerCase()){
  case "ok":
    let inputUser = prompt("C'est parti pour la discut' !");
    respond(inputUser);
    talking(breakTalk.toLowerCase())
    break;
  case "ciao":
    console.log("bonne journée alors jeune pousse prometteuse");
    break;
  default:
    console.log("tu as essayé de taper autre chose petit malin ! 🤣")
    talking(breakTalk.toLowerCase())
    break;
  };
};


talking(breakTalk);