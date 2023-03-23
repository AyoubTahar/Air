let nodeArray = process.argv;
function RecupArr(arr) {
  let array = [];
  for (let i = 2; i < arr.length - 1; i++) {
    array[i - 2] = arr[i];
  }
  return array;
}
function SeparerArray(arr){
    
}