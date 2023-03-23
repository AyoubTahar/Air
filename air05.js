let nodeArray = process.argv;
function RecupArr(arr) {
    let array = [];
    for (let i = 2; i < arr.length -1; i++) {
      if (isNaN(arr[i])) {
        console.log(`error`);
        process.exit()
      }
      array[i-2] = arr[i]
    }
    return array
  }
function RecupSep (arr){
    let sep = "";
    let i = arr.length-1
    if (isNaN(arr[i])) {
        console.log(`error`);
        process.exit()
      }
    sep = arr[i]
    return sep
}
function SumOrSub (arr, sep){
    let newArr = []
    for (let i = 0 ; i<arr.length ; i++){
        newArr[i] = Number(arr[i]) + Number(sep)
    }
    console.log(newArr)
}

SumOrSub(RecupArr(nodeArray),RecupSep(nodeArray))