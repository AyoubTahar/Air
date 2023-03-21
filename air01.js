let nodeArray = process.argv;
function RecupStr(arr) {
  let phrase = "";
  for (let i = 2; i < arr.length -1; i++) {
    if (arr[i] <= 0 || arr[i] >= 0) {
      console.log(`error`);
      process.exit()
    }
    if (phrase !== "") {
      phrase += " ";
    }
    phrase += arr[i];
  }
  return phrase
}
function RecupSep (arr){
    let sep = "";
    let i = arr.length-1
    sep = arr[i]
    return sep
}
function StrToArr (str){
  let tableau = [];
  let tmp = "";
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      tableau[j] = tmp;
      j++;
      tmp = "";
      i++; // pour éviter l'ajout d'un espace vide
    }
    tmp += str[i];
  }
  tableau[j] = tmp;
  return tableau
}
/*
function FoundIndexSep (arr, sep){
  let index = 0
  for(let j = 0 ; j < arr.length ; j++){
      if(arr[j] === sep){
          index = j
      }
  }
  return index
}
*/
function Split(str, sep) {
  let tableau = StrToArr (str)
    let NewString = ""
    for (let k = 0 ; k < tableau.length ; k++){
      if (NewString !== "") {
        NewString += " ";
      }
      if (tableau[k] !== sep){
        NewString += tableau[k]
      }
      else {
        NewString += '\n'
      }
    }
    console.log(NewString) 
  }



Split(RecupStr(nodeArray),RecupSep(nodeArray))