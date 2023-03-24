let nodeArray = process.argv;
let index = "";
function RecupArr1(arr) {
  let array1 = [];
  for (let i = 2; i < arr.length; i++) {
    if (Number(arr[i]) > arr[i + 1]) {
      console.log(`error`);
      process.exit();
    }
    if (arr[i] === "fusion") {
      index = i;
      break;
    }
    array1[i - 2] = arr[i];
  }

  return array1;
}
function RecupArr2(arr) {
  let array2 = [];
  let j = 0;
  for (let i = index + 1; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log(`error`);
      process.exit();
    }
    array2[j] = arr[i];
    j++;
  }
  return array2;
}

function ArrayFusion(arr1, arr2) {
  let newArray = [];
  let k = 0;
  for (let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
    if (arr1[i] < arr2[j]) {
      newArray[k] = arr1[i];
      newArray[k + 1] = arr2[j];
      k = k + 2;
    }
    if (arr1[i] > arr2[j]) {
      newArray[k] = arr2[i];
      newArray[k + 1] = arr1[j];
      k = k + 2;
    }
  }
  console.log(newArray);
}
ArrayFusion(RecupArr1(nodeArray), RecupArr2(nodeArray));