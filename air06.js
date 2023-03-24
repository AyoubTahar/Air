let nodeArray = process.argv;
function RecupArr(arr) {
  let array = [];
  for (let i = 2; i < arr.length - 1; i++) {
    array[i - 2] = arr[i];
  }
  return array;
}
function RecupSep(arr) {
  let sep = "";
  let i = arr.length - 1;

  sep = arr[i];
  return sep;
}
function ControlePass(arr, sep) {
  let newArr = [];
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === sep || arr[i][j] === sep.toUpperCase()) {
        arr[i] = false;
      }
    }
  }
  for (mot of arr) {
    if (mot !== false) {
      newArr[k] = mot
      k++;
    }
  }
  console.log(newArr)
}
ControlePass(RecupArr(nodeArray), RecupSep(nodeArray));
