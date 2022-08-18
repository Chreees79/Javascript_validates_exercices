
  var codons = []
  var result = []

function separate(arn) {
for (let i = 0; i < arn.length; i += 3) {
codons.push(arn.slice(i, i + 3))
};
return codons
};

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

function perform (arn){
separate(arn);
finalTranslate(codons);
console.log(result.join("-"));
};

console.log("voici l'ARN à traduire: ");
console.log("CCGUCGUUGCGCUACAGC");
console.log("et voici leur traduction en acide aminés: ");
console.log(perform("CCGUCGUUGCGCUACAGC"));
console.log("voici l'ARN à traduire: ");
console.log("CCUCGCCGGUACUUCUCG");
console.log("et voici leur traduction en acide aminés: ");
console.log(perform("CCUCGCCGGUACUUCUCG"));
