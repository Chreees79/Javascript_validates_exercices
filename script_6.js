//VARIABLES'S INITIALIZATION ------------------------------------------
  let codons = []
  let result = []

  //FUNCTION TO SEPARATE STRING IN ELEMENTS OF THREE ITEMS -------------------
function separate(arn) {
  for (let i = 0; i < arn.length; i += 3) {
    codons.push(arn.slice(i, i + 3))
  };
  return codons
};

//FUNCTION TO TRANSLATE CODONS IN AMINO ACID -----------------------------------
function finalTranslate (codons) {
  codons.forEach(element => {
    if (element === "UCU" || element === "UCC" || element === "UCA" || element === "UCG" || element === "AGU" || element === "AGC") {
    result.push("Sérine")
  } else if (element === "CCU" || element === "CCC" || element === "CCA" || element === "CCG") {
    result.push("Proline")
  } else if (element === "CGU" || element === "CGC" || element === "CGA" || element === "CGG" || element === "AGA" || element === "AGG") {
    result.push("Arginine")
  } else if (element === "UUU" || element === "UUC") {
    result.push("Phenylalanine")
  } else if (element === "UAU" || element === "UAC") {
    result.push("Tyrosine")
  } else if (element === "UUA" || element === "UUG"){
    result.push("Leucine")
  } else {
    console.log("il doit y avoir une erreur dans ton ARN !, ou tu es un Martien !")
  };
  });
};

//FUNCTION TO RUN THE PROGRAM -------------------------------------------------------
function perform(arn){
  separate(arn);
  finalTranslate(codons);
  return result.join("-");
};

//FUNCTION FOR CHOICE USER BETWEEN THE DISPLAY OF TWO ARN'S TRANSCRIPTION'S -----------------------------
function display() {
  let inputUser = prompt("tapes 1 si tu veux voir la traduction de la 1ère séquence d'ARN, ou 2 si tu veux la seconde 😁")
  switch (inputUser){
    case "1":
    console.log("voici l'ARN à traduire: ");
    console.log("CCGUCGUUGCGCUACAGC");
    console.log("et voici leur traduction en acide aminés: 🧪");
    console.log(perform("CCGUCGUUGCGCUACAGC"));
    break;
    case "2":
    console.log("voici l'ARN à traduire: ");
    console.log("CCUCGCCGGUACUUCUCG");
    console.log("et voici leur traduction en acide aminés: 🧪");
    console.log(perform("CCUCGCCGGUACUUCUCG"));
    break;
    default:
      console.log("tu n'as pas rentré un nombre valide")
  };
};

display()