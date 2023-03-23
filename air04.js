let nodeArray = process.argv;
function RecupStr(arr) {
    let phrase = "";
    for (let i = 2; i < arr.length ; i++) {
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
function UnSeul (str){
    let newStr =''
    for (let i = 0 ;i < str.length ; i++){
        if(str[i] !== str[i+1]){
            newStr += str[i]
        }
    }
    console.log(newStr)
}

UnSeul(RecupStr(nodeArray))