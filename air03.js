let nodeArray = process.argv;
function RecupArr(arr) {
    let array = [];
    for (let i = 2; i < arr.length ; i++) {
      if (arr[i] === " ") {
        console.log(`error`);
        process.exit()
      }
      array[i-2] = arr[i]
    }
    return array
  }
function Intrus(arr){
    let liste =''
    for (let i = 0 ;i  < arr.length - 1; i++){
       for (let j = i+1 ; j < arr.length ; j++){
            if(arr[i]===arr[j]){
                arr[i]= true
                arr[j]= true
            }
        }
    }
    for (valeur of arr){
        if (valeur !== true){
            if (liste !== "") {
                liste += " ";
              }
            liste += valeur
        }
    }
    console.log(liste)
    
}

Intrus(RecupArr(nodeArray))

