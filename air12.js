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

function QuickSort(arr) {
  if(arr.length < 2){
    return arr
  }
  let pivot = parseInt(arr[0]);
  let j = 0;
  let k = 0;
  let smallerArr = []
  let biggerArr = []
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) < pivot) {
      smallerArr[j] = parseInt(arr[i])
      j++;
    }
    if (parseInt(arr[i]) > pivot) {
      biggerArr[k] = parseInt(arr[i])
      k++;
    }
  }
  console.log(smallerArr, biggerArr)
  return [...QuickSort(smallerArr), pivot, ...QuickSort(biggerArr)]
}

console.log(QuickSort(RecupArr(nodeArray)));
