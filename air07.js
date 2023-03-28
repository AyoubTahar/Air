let nodeArray = process.argv;
function RecupArr(arr) {
  let array = [];
  for (let i = 2; i < arr.length - 1; i++) {
    if (isNaN(arr[i])) {
      console.log(`error`);
      process.exit()
    }
    array[i - 2] = arr[i];
  }
  return array;
}
function RecupSep(arr) {
  if (isNaN(arr[i])) {
    console.log(`error`);
    process.exit()
  }
    let sep = "";
    let i = arr.length - 1;
  
    sep = arr[i];
    return sep;
  }
function sorted_insert (arr, newElement){
    let sortedList =""
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i] < newElement && arr[i+1] >  newElement){
            if (sortedList !== "") {
                sortedList += " ";
              }
            sortedList += arr[i] +' '+ newElement
        }
        if (arr[i] < newElement && arr[i+1] === undefined) {
            if (sortedList !== "") {
                sortedList += " ";
              }
            sortedList += arr[i] +' '+ newElement
        }
        else {
            if (sortedList !== "") {
                sortedList += " ";
              }
            sortedList += arr[i]
        }
    }
    console.log(sortedList)
}

sorted_insert(RecupArr(nodeArray),RecupSep(nodeArray))
