//07_jeu_des_allumettes

alert("Welcome to the match game!");

let UsernameIsDefined = false;

while (!UsernameIsDefined) {
  let userName = prompt("What is your name ?");                  
  if (userName.trim() !== "" && isNaN(parseInt(userName))) {
    alert("Hello, " + userName + " let's play");               
    UsernameIsDefined = true;
  } else {
    alert("Enter a valid name!");
  }
}

let RemoveMatchIsDefined = false;

while (!RemoveMatchIsDefined) {
  let removeMatch = prompt("Choose a number between 0 to 7 !");
  if (removeMatch >= 1 && removeMatch <= 6 && removeMatch.trim() !== "")
    RemoveMatchIsDefined = true;
  else {
    alert("Enter a number between 0 to 7 !");
  }
}




