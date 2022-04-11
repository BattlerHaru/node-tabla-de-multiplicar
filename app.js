const { crearArchivoSync } = require("./helpers/multiplicar");
const { argv } = require("./config/yargs");
const colors = require("./config/colors");

// console.clear();
process.stdout.write("\033c");

crearArchivoSync(argv.b, argv.h, argv.l)
    .then((nombreArchivo) => {
        console.log(`\n${nombreArchivo.cFileName} - Creado con éxito.`.cFileTile);
    })
    .catch((err) => {
        console.log(err.cError);
    });