const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Base de la tabla de multiplicación.",
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        default: false,
        describe: "Lista la tabla de multiplicación en consola.",
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        default: 10,
        describe: "Limite de la tabla de multiplicación.",
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base debe ser un número.".cError;
        }
        if (isNaN(argv.h)) {
            throw "El limite debe ser un número.".cError;
        }
        return true;
    }).argv;

module.exports = {
    argv,
};