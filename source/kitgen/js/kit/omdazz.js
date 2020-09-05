const kitname = "OMDAZZ Cyclone IV kit"
const kitphoto = "omdazz.png"

const hdl = require("../hdl.js")
let dateString = require("../quartusDate.js")()

const globals = {
    FAMILY: '"Cyclone IV E"',
    DEVICE: "EP4CE6E22C8",
    TOP_LEVEL_ENTITY: '"$$$"',
    ORIGINAL_QUARTUS_VERSION: '"13.0.0"',
    LAST_QUARTUS_VERSION: '"16.0.0"',
    PROJECT_CREATION_TIME_DATE: `"${dateString}"`,
    NOMINAL_CORE_SUPPLY_VOLTAGE: "1.2V",
    SDC_FILE: "$$$.SDC",
    CYCLONEII_RESERVE_NCEO_AFTER_CONFIGURATION: '"USE AS REGULAR IO"'

}

genAst = (name) => {

    let ast = hdl.init(name)

    ast.kit = kitname
    ast.globals = globals

    ast.addPort("clk_50", "in", 1, null, "23", 0, "CLOCK")

    ast.addPort("key", "in", 4, null, ["88", "89", "90", "91"], 0, "KEY")

    ast.addPort("digit", "out", 4, "1111", ["133", "135", "136", "137"], 0, "SEG7")
    ast.addPort("segment", "out", 8, "11111111", ["128", "121", "125", "129", "132", "126", "124", "127"], 0, "SEG7")

    ast.addPort("vga_r", "out", 1, "1", ["106"], 0, "VGA")
    ast.addPort("vga_g", "out", 1, "1", ["105"], 0, "VGA")
    ast.addPort("vga_b", "out", 1, "1", ["104"], 0, "VGA")
    ast.addPort("vga_hs", "out", 1, "1", "101", 0, "VGA")
    ast.addPort("vga_vs", "out", 1, "1", "103", 0, "VGA")

    ast.addPort("beep", "out", 1, null, "110", 0, "BEEP")
    ast.addPort("irda", "in", 1, null, "100", 0, "IR")

    ast.addPort("i2c_scl", "out", 1, null, "^99", 0, "I2C")
    ast.addPort("i2c_sda", "inout", 1, null, "^98", 0, "I2C")

    ast.addPort("lm75_i2c_scl", "out", 1, null, "^112", 0, "LM75")
    ast.addPort("lm75_i2c_sda", "inout", 1, null, "^113", 0, "LM75")

    ast.addPort("lcd_d", "out", 8, "11111111", ["142", "1", "144", "3", "2", "10", "7", "11"], 0, "LCD")
    ast.addPort("lcd_e", "out", 1, "1", ["143"], 0, "LCD")
    ast.addPort("lcd_rs", "out", 1, "1", ["141"], 0, "LCD")
    ast.addPort("lcd_rw", "out", 1, "1", ["138"], 0, "LCD")

    ast.addPort("ps2_clock", "inout", 1, null, "^119", 0, "PS2")
    ast.addPort("ps2_data", "inout", 1, null, "^120", 0, "PS2")


    ast.addPort("sdram_addr", "out", 12, null, ["76", "77", "80", "83", "68", "67", "66", "65", "64", "60", "75", "59"], 0, "SDRAM")
    ast.addPort("sdram_dq", "inout", 16, null, ["28", "30", "31", "32", "33", "34", "38", "39", "54", "53", "52", "51", "50", "49", "46", "44"], 0, "SDRAM")
    ast.addPort("sdram_bs", "out", 2, null, ["73", "74"], 0, "SDRAM")
    ast.addPort("sdram_cas_n", "out", 1, null, "70", 0, "SDRAM")
    ast.addPort("sdram_ras_n", "out", 1, null, "71", 0, "SDRAM")
    ast.addPort("sdram_we_n", "out", 1, null, "69", 0, "SDRAM")
    ast.addPort("sdram_cs_n", "out", 1, null, "72", 0, "SDRAM")
    ast.addPort("sdram_cke", "out", 1, null, "58", 0, "SDRAM")
    ast.addPort("sdram_clk", "out", 1, null, "43", 0, "SDRAM")
    ast.addPort("sdram_ldqm", "out", 1, null, "42", 0, "SDRAM")
    ast.addPort("sdram_udqm", "out", 1, null, "55", 0, "SDRAM")

    ast.addPort("uart_rxd", "in", 1, null, ["115"], 0, "UART")
    ast.addPort("uart_txd", "out", 1, null, ["114"], 0, "UART")




    ast.addPort("led", "out", 4, "1111", ["87", "86", "85", "84"], 0, "LED")
    return ast
}

const parameters = () => {
    return {
        CLOCK: "Clock",
        LED: "LED x4",
        KEY: "Buttons x4",
        VGA: "VGA",
        SEG7: "7-segment display x4, muxed",
        PS2: "PS/2",
        LCD: "LCD 1602 / 2004",
        I2C: "I2C memory",
        LM75: "I2C / LM75 thermometer",

        BEEP: "Beeper",
        IR: "Infrared receiver",
        UART: "RS-232 UART",
        SDRAM: "SDRAM 32 MB",


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