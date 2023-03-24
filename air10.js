const fs = require('fs');

// Vérifier que le nom de fichier est fourni en argument
if (process.argv.length !== 3) {
  console.error('fichier non indiqué');
  process.exit(1);
}

const filename = process.argv[2];

// Lire le contenu du fichier
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`fichier introuvable`);
    process.exit(1);
  }
  console.log(data);
});
