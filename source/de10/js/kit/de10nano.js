const hdl = require("../hdl.js")

const globals = {
    FAMILY: '"MAX 10 FPGA"',
    DEVICE: "10M50DAF484C7G",
    TOP_LEVEL_ENTITY: '"$$$"',
    ORIGINAL_QUARTUS_VERSION: '"16.0.0"',
    LAST_QUARTUS_VERSION: '"16.0.0"',
    PROJECT_CREATION_TIME_DATE: '"15:03:50 AUGUST 30,2020"',
    DEVICE_FILTER_PACKAGE: "FBGA",
    DEVICE_FILTER_PIN_COUNT: 484,
    DEVICE_FILTER_SPEED_GRADE: 7,
    SDC_FILE: "$$$.SDC"
}

module.exports = (name) => {

    let ast = hdl.init(name)

    ast.kit = "Terasic DE10-Nano"
    ast.globals = globals

    ast.addPort("adc_clk_10", "in", 1, null, "N5", 0, "CLOCK")
    ast.addPort("max10_clk1_50", "in", 1, null, "P11", 0, "CLOCK")
    ast.addPort("max10_clk2_50", "in", 1, null, "N14", 0, "CLOCK")

    ast.addPort("key", "in", 2, null, ["B8", "A7"], 0, "KEY")
    ast.addPort("sw", "in", 10, null, ["C10", "C11", "D12", "C12", "A12", "B12", "A13", "A14", "B14", "F15"], 0, "SW")

    ast.addPort("hex0", "out", 8, "11111111", ["C14", "E15", "C15", "C16", "E16", "D17", "C17", "D15"], 0, "SEG7")
    ast.addPort("hex1", "out", 8, "11111111", ["C18", "D18", "E18", "B16", "A17", "A18", "B17", "A16"], 0, "SEG7")
    ast.addPort("hex2", "out", 8, "11111111", ["B20", "A20", "B19", "A21", "B21", "C22", "B22", "A19"], 0, "SEG7")
    ast.addPort("hex3", "out", 8, "11111111", ["F21", "E22", "E21", "C19", "C20", "D19", "E17", "D22"], 0, "SEG7")
    ast.addPort("hex4", "out", 8, "11111111", ["F18", "E20", "E19", "J18", "H19", "F19", "F20", "F17"], 0, "SEG7")
    ast.addPort("hex5", "out", 8, "11111111", ["J20", "K20", "L18", "N18", "M20", "N19", "N20", "L19"], 0, "SEG7")

    ast.addPort("vga_r", "out", 4, "1111", ["AA1", "V1", "Y2", "Y1"], 0, "VGA")
    ast.addPort("vga_g", "out", 4, "1111", ["W1", "T2", "R2", "R1"], 0, "VGA")
    ast.addPort("vga_b", "out", 4, "1111", ["P1", "T1", "P4", "N2"], 0, "VGA")
    ast.addPort("vga_hs", "out", 1, "1", "N3", 0, "VGA")
    ast.addPort("vga_vs", "out", 1, "1", "N1", 0, "VGA")

    ast.addPort("arduino_io", "inout", 16, null, ["AB5", "AB6", "AB7", "AB8", "AB9", "Y10", "AA11", "AA12", "AB17", "AA17", "AB19", "AA19", "Y19", "AB20", "AB21", "AA20"], 0, "Arduino")
    ast.addPort("arduino_reset_n", "inout", 1, null, "$F16", 0, "Arduino")

    ast.addPort("sdram_addr", "out", 13, null, ["U17", "W19", "V18", "U18", "U19", "T18", "T19", "R18", "P18", "P19", "T20", "P20", "R20"], 0, "SDRAM")
    ast.addPort("sdram_dq", "inout", 16, null, ["Y21", "Y20", "AA22", "AA21", "Y22", "W22", "W20", "V21", "P21", "J22", "H21", "H22", "G22", "G20", "G19", "F22"], 0, "SDRAM")
    ast.addPort("sdram_ba", "out", 2, null, ["T21", "T22"], 0, "SDRAM")
    ast.addPort("sdram_cas_n", "out", 1, null, "U21", 0, "SDRAM")
    ast.addPort("sdram_ras_n", "out", 1, null, "U22", 0, "SDRAM")
    ast.addPort("sdram_we_n", "out", 1, null, "V20", 0, "SDRAM")
    ast.addPort("sdram_cs_n", "out", 1, null, "U20", 0, "SDRAM")
    ast.addPort("sdram_cke", "out", 1, null, "N22", 0, "SDRAM")
    ast.addPort("sdram_clk", "out", 1, null, "L14", 0, "SDRAM")
    ast.addPort("sdram_ldqm", "out", 1, null, "V22", 0, "SDRAM")
    ast.addPort("sdram_udqm", "out", 1, null, "J21", 0, "SDRAM")

    ast.addPort("gsensor_cs_n", "out", 1, null, "AB16", 0, "Accelerometer")
    ast.addPort("gsensor_sclk", "out", 1, null, "AB15", 0, "Accelerometer")
    ast.addPort("gsensor_sdi", "inout", 1, null, "V11", 0, "Accelerometer")
    ast.addPort("gsensor_sdo", "inout", 1, null, "V12", 0, "Accelerometer")
    ast.addPort("gsensor_int", "in", 2, null, ["Y14", "Y13"], 1, "Accelerometer")

    ast.addPort("gpio", "inout", 36, null, ["V10", "W10", "V9", "W9", "V8", "W8", "V7", "W7", "W6", "V5", "W5", "AA15", "AA14", "W13", "W12", "AB13", "AB12", "Y11", "AB11", "W11", "AB10", "AA10", "AA9", "Y8", "AA8", "Y7", "AA7", "Y6", "AA6", "Y5", "AA5", "Y4", "AB3", "Y3", "AB2", "AA2"], 0, "GPIO")

    ast.addPort("ledr", "out", 10, "1111111111", ["A8", "A9", "A10", "B10", "D13", "C13", "E14", "D14", "A11", "B11"], 0, "LED")
    return ast
}