let breakTalk = "";
function respond(inputUser){
  if (inputUser[inputUser.length-1] === "?") {
    console.log("Ouais Ouais...");
  } else if (inputUser === inputUser.toUpperCase() && inputUser.length > 0) {
    console.log("Pwa, calme-toi...");
  } else if (inputUser.includes("fortnite")) {
    console.log("on s'fait une partie soum-soum ?");
  } else if (inputUser === "") {
    console.log("t'es en PLS ?");
  } else {
    console.log("balek");
  };
};
function talking (breakTalk) {
  while (breakTalk.toLowerCase() !== "ciao") {
    let inputUser = prompt("Discutes avec moi !");
    respond(inputUser);
    breakTalk = prompt("Tu veux encore discuter ? tape ok sinon tape ciao !");
  };
};

talking(breakTalk);