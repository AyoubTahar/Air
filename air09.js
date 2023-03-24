let nodeArray = process.argv;
function RecupArr(arr) {
  let array = [];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === " ") {
      console.log(`error`);
      process.exit();
    }
    array[i - 2] = arr[i];
  }
  return array;
}
function Rotation(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      newArray[i] = arr[0];
      break;
    }
    newArray[i] = arr[i + 1];
  }
  console.log(newArray);
}

Rotation(RecupArr(nodeArray));
