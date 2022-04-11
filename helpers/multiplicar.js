const fs = require("fs");
const colors = require("../config/colors");

const crearArchivoSync = async(base = 5, hasta = 10, listar = false) => {
    try {
        let salida = "";
        let consola = "";

        for (let i = 1; i <= hasta; i++) {
            consola += `          ${base} ${"x".cSymbol} ${i} ${
        "=".cSymbol
      } ${colors.cResp(base * i)}${i != hasta ? "\n" : ""}`.cNumber;

            salida += `${base} x ${i} = ${base * i}${i != hasta ? "\n" : ""}`;
        }

        if (listar) {
            console.log("================================".cTile);
            console.log("         Tabla del:".cTitle, `${base}`.cNumber);
            console.log("================================".cTile);

            if (listar && hasta != 0) {
                console.log(consola);
                console.log("================================".cTile);
            }
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivoSync,
};