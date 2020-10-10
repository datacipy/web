const kitname = "EP2C5 kit"
const kitphoto = "ep2c5.jpg"

const hdl = require("../hdl.js")
let dateString = require("../quartusDate.js")()

const globals = {
    FAMILY: '"Cyclone II"',
    DEVICE: "EP2C5T144C8",
    TOP_LEVEL_ENTITY: '"$$$"',
    ORIGINAL_QUARTUS_VERSION: '"13.0 SP1"',
    LAST_QUARTUS_VERSION: '"13.0 SP1"',
    PROJECT_CREATION_TIME_DATE: `"${dateString}"`,
    NOMINAL_CORE_SUPPLY_VOLTAGE: "1.2V",
    SDC_FILE: "$$$.SDC",
    CYCLONEII_RESERVE_NCEO_AFTER_CONFIGURATION: '"USE AS REGULAR IO"',
    VHDL_INPUT_VERSION: "VHDL_2008"


}

genAst = (name) => {

    let ast = hdl.init(name)

    ast.kit = kitname
    ast.globals = globals

    ast.addPort("clk_50", "in", 1, null, "17", 0, "CLOCK")


    ast.addPort("led_d2", "out", 1, "1", ["3"], 0, "LED")
    ast.addPort("led_d4", "out", 1, "1", ["7"], 0, "LED")
    ast.addPort("led_d5", "out", 1, "1", ["9"], 0, "LED")
    return ast
}

const parameters = () => {
    return {
        CLOCK: "Clock",
        LED: "LED x3",

    }

}

module.exports = {
    name: () => {
        return kitname
    },
    photo: () => kitphoto,
    genAst,
    parameters,
    selectors: () => []
}