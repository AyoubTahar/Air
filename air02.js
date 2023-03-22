let nodeArray = process.argv;
function RecupArr(arr) {
    let array = [];
    for (let i = 2; i < arr.length -1; i++) {
      if (arr[i] <= 0 || arr[i] >= 0) {
        console.log(`error`);
        process.exit()
      }
      array[i-2] = arr[i]
    }
    console.log(array)
    return array
  }
function RecupSep (arr){
    let sep = "";
    let i = arr.length-1
    sep = arr[i]
    return sep
}
function Concat (arr, sep){
        let string = "";
        for (let i = 0; i < arr.length; i++) {
          
          if (string !== "") {
            string += sep;
          }
          string += arr[i];
        }
        console.log(string)
}
Concat(RecupArr(nodeArray),RecupSep(nodeArray))