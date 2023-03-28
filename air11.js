if (process.argv.length !== 4) {
  console.error("pb argument");
  process.exit(1);
}
let caractere = process.argv[2];
let nombre = process.argv[3];

function check(arg1, arg2) {
  if (arg1 !== " " && Number(arg2)) {
    return true;
  }
}
function Pyramide(arg, num) {
  if (check) {
    for (let i = 1; i <= num; i++) {
      let espace = "";
      for (let j = 1; j <= num - i; j++) {
        espace += " ";
      }
      let pyramide = "";
      for (let k = 1; k < 2 * i; k++) {
        pyramide += arg;
      }
      console.log(espace + pyramide);
    }
  } else {
    {
      console.error("pb argument");
      process.exit(1);
    }
  }
}

Pyramide(caractere, nombre);
