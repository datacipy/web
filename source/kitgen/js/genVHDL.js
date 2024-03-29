const genPort = (port) => {
    let out = "\t\t" + port.name.toUpperCase() + " : "
    out += (port.direction == "inout" ? "INOUT" : port.direction.toUpperCase()) + " ";
    if (port.size > 1) {
        out += `std_logic_vector(${port.size+port.sizeFrom-1} DOWNTO ${port.sizeFrom})`
    } else out += "std_logic"
    if (port.value) {
        out += " := ";
        if (port.size == 1) {
            out += `'${port.value}'`
        } else {
            out += `"${port.value}"`
        }
    }
    out += ";";
    //out += "\t//" + port.pinAssign.toString()
    return out
}

const genPortGroup = (ast, group) => {
    let port = Object.keys(ast.port)
        .filter((q) => ast.port[q].portGroup == group)
        .map(q => genPort(ast.port[q]))

    return `\t\t--------- ${group.toUpperCase()} ---------\n${port.join("\n")}\n\n`
}

module.exports = (ast) => {

    let portGroups = Object.keys(ast.port)
        .map(q => ast.port[q].portGroup)
        .sort((a, b) => a == b ? 0 : a > b ? 1 : -1)
        .reduce((p, c) => {
            if (p.indexOf(c) < 0) p.push(c);
            return p
        }, [])
    //console.log(portGroups)

    let portDef = portGroups
        .map(q => genPortGroup(ast, q))
        .join("\n")
        .replace(/;(\s*?)$/, "$1") //remove last comma

    window.ss = portDef

    return `--=======================================================
--  This code is generated by https://datacipy.cz/tools/kitgen
--=======================================================

LIBRARY IEEE;
USE IEEE.STD_LOGIC_1164.ALL;
USE IEEE.NUMERIC_STD.ALL;

ENTITY ${ast.name} IS
    PORT (
${portDef}
    );
END ENTITY;

ARCHITECTURE rtl OF ${ast.name} IS
--=======================================================
--  SIGNAL declarations
--=======================================================


BEGIN

--=======================================================
--  Structural coding
--=======================================================

END ARCHITECTURE;
`
}