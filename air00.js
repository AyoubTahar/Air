let string = process.argv;
let phrase = "";
let tableau = [];
function Recup(arg) {
  for (let i = 2; i < arg.length; i++) {
    if (arg[i] <= 0 || arg[i] >= 0) {
      console.log(`error`);
      process.exit();
    }
    if (phrase !== "") {
      phrase += " ";
    }
    phrase += arg[i];
  }
}

function Split(str, sep) {
  let tmp = "";
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sep) {
      tableau[j] = tmp;
      j++;
      tmp = "";
      i++; // pour éviter l'ajout d'un espace vide
    }
    tmp += str[i];
  }
  tableau[j] = tmp;
  for (mot of tableau) {
    console.log(mot);
  }
}
Recup(string);
Split(phrase);
