const { exec } = require("child_process");
function createExo(nom, arg, resultat) {
  return { nom, arg, resultat };
}
const ex = [
  createExo("air00.js", "Bonjour les gars", "Bonjour\nles\ngars\n"),
  createExo(
    "air01.js",
    "Crevette magique dans la mer des étoiles la",
    "Crevette magique dans \nmer des étoiles\n"
  ),
  createExo("air02.js", "je test des truc x", "jextestxdesxtruc\n"),
  createExo("air03.js", "1 2 3 4 5 4 3 2 1", "5\n"),
  createExo(
    "air04.js",
    "Hello milady,   bien ou quoi",
    "Helo milady, bien ou quoi\n"
  ),
  createExo("air05.js", "1 2 3 4 5 2 +2", "[ 3, 4, 5, 6, 7, 4 ]\n"),
  createExo("air06.js", "Michel Albert Thérèse Benoit t", "[ 'Michel' ]\n"),
  createExo(
    "air07.js",
    "10 20 30 40 50 60 70 90 33",
    "10 20 30 33 40 50 60 70 90\n"
  ),
  createExo(
    "air08.js",
    "10 20 30 fusion 15 25 35",
    "[ '10', '15', '20', '25', '30', '35' ]\n"
  ),
  createExo(
    "air09.js",
    "Mich Alb Ther Ben",
    "[ 'Alb', 'Ther', 'Ben', 'Mich' ]\n"
  ),
  createExo("air10.js", "a.txt", "Je suis moi\n"),
  createExo(
    "air11.js",
    "X 10",
    "         X\n        XXX\n       XXXXX\n      XXXXXXX\n     XXXXXXXXX\n    XXXXXXXXXXX\n   XXXXXXXXXXXXX\n  XXXXXXXXXXXXXXX\n XXXXXXXXXXXXXXXXX\nXXXXXXXXXXXXXXXXXXX\n"
  ),
  createExo("air12.js", "6 5 4 3 2 1", "[ 1, 2, 3, 4, 5, 6 ]\n"),
];
async function Testexo() {
  const promises = [];
  for (let i = 0; i < 13; i++) {
    const exo = ex[i];
    const command = `node ${exo.nom} ${exo.arg}`;
    const promise = new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else if (stderr) {
          reject(stderr);
        } else if (stdout === `${exo.resultat}`) {
          resolve(`${exo.nom} (1/1) : SUCCESS`);
        } else {
          reject(`${exo.nom} (1/1) : FAILURE`);
        }
      });
    });
    promises.push(promise);
  }
  const results = await Promise.allSettled(promises);
  for (const result of results) {
    if (result.status === "fulfilled") {
      console.log("\x1b[32m%s\x1b[0m", result.value);
    } else {
      console.log("\x1b[31m%s\x1b[0m", result.reason);
    }
  }
}

Testexo();