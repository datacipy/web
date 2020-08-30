const genVerilog = require("./genVerilog")
const genVHDL = require("./genVHDL")

const hdlGen = (ast, lang) => {

    return lang == "verilog" ? genVerilog(ast) : genVHDL(ast)
}

const qsfGen = require("./genQsf.js")

const addPort = function (name, direction, size, value, pinAssign, sizeFrom = 0, portGroup = null) {
    //console.log(this)
    this.port[name] = {
        name,
        direction,
        size,
        value,
        pinAssign,
        sizeFrom,
        portGroup
    }
}

const init = (name) => {
    return {
        name,
        port: {},
        addPort,
    }
}

module.exports = {
    init,
    hdlGen,
    qsfGen
}