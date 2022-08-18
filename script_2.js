//VARIABLES'S INITIALIZATION   -------------------------------
let inputUser = "";
let number;
result = 1;

//FUNCTION TO CALCULATE FACTORIAL -------------------------------------
function factorial(inputUser) {
  inputUser = prompt("De quel nombre veux-tu calculer la factorielle ?");
  if(inputUser >= 0 ) {
    for (number = 1; number <= inputUser; number++) {
      result *= number
    }
  console.log(`le résultat est: ${result} 🧮`)
  } else {
    console.log("c'est mieux une factorielle avec un nombre positif ! Allez essaie de nouveau")
    factorial(inputUser)
  };
};

factorial(inputUser)
