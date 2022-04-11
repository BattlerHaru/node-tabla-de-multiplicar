const colors = require("colors");

colors.setTheme({
    cTile: ["bgBrightMagenta", "black", "bold"],
    cTitle: ["brightMagenta", "white", "bold"],

    cFileName: ["bgBrightGreen", "black", "underline"],
    cFileTile: ["bgBrightGreen", "black"],

    cNumber: ["brightWhite"],
    cResp: ["brightWhite", "underline", "bold"],
    cSymbol: ["magenta"],

    cError: ["bgBrightRed", "underline"],
    cNumberTile: ["brightMagenta", "underline"],
});

module.exports = colors;