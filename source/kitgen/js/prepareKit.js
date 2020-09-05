const genpar = require("./generatorParameters.js")
const gensel = require("./generatorSelectors.js")
const prepareKit = (kit) => {
    let pars = kit.parameters();
    let out = "";
    for (let v in pars) {
        out += genpar(pars[v], v)
    }

    $("#genParams").html(out)

    let selectors = kit.selectors();
    out = selectors.map(q => gensel(q[0], q[1])).join("");

    $("#genSelectors").html(out)

    $("#kitname").html(kit.name())
    $("#kitphoto").attr("src", kit.photo())
}

module.exports = prepareKit