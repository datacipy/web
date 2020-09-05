const genpar = require("./generatorParameters.js")
const prepareKit = (kit) => {
    let pars = kit.parameters();
    let out = "";
    for (let v in pars) {
        out += genpar(pars[v], v)
    }

    $("#genParams").html(out)
    $("#kitname").html(kit.name())
    $("#kitphoto").attr("src", kit.photo())
}

module.exports = prepareKit