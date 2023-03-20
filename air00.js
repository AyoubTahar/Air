let nodeArray = process.argv;
function ArrayToString(arr) {
  let phrase = "";
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] <= 0 || arr[i] >= 0) {
      console.log(`error`);
      process.exit();
    }
    if (phrase !== "") {
      phrase += " ";
    }
    phrase += arr[i];
  }
  return phrase;
}

function Split(str, sep) {
  let tableau = [];
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

Split(ArrayToString(nodeArray), " ");
