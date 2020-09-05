const genPin = (pin) => `set_instance_assignment -name IO_STANDARD "3.3-V LVTTL" -to ${pin.toUpperCase()}\n`
const genPinST = (pin) => `set_instance_assignment -name IO_STANDARD "3.3 V Schmitt Trigger" -to ${pin.toUpperCase()}\n`
const genPinA = (pin, phy) => `set_location_assignment PIN_${phy.replace("$","")} -to ${pin.toUpperCase()}\n`

const genType = (port) => {
    if (port.size == 1) {
        return port.pinAssign[0] !== "$" ? genPin(port.name) : genPinST(port.name)
    } else {
        let out = "";
        let j = 0;
        for (let i = port.sizeFrom; i < (port.sizeFrom + port.size - 1); i++) {
            out += port.pinAssign[j++][0] !== "$" ? genPin(port.name + "[" + i + "]") : genPinST(port.name + "[" + i + "]")
        }
        return out
    }
}

const genTypeA = (port) => {
    if (port.size == 1) {
        if (Array.isArray(port.pinAssign))
            return genPinA(port.name, port.pinAssign[0])
        else
            return genPinA(port.name, port.pinAssign)
    } else {
        let out = "";
        let j = 0;
        for (let i = port.sizeFrom; i < (port.sizeFrom + port.size - 1); i++) {
            out += genPinA(port.name + "[" + i + "]", port.pinAssign[j++])
        }
        return out
    }
}


const gia = (ast, group) => {
    let port = Object.keys(ast.port)
        .filter((q) => ast.port[q].portGroup == group)
        .map(q => genType(ast.port[q])).join("")

    let portPin = Object.keys(ast.port)
        .filter((q) => ast.port[q].portGroup == group)
        .map(q => genTypeA(ast.port[q])).join("")
    //console.log(port, portPin)
    return `#============================================================
# ${group.toUpperCase()}
#============================================================
${port}
${portPin}
`
}


module.exports = (ast) => {
    let portGroups = Object.keys(ast.port)
        .map(q => ast.port[q].portGroup)
        .sort((a, b) => a == b ? 0 : a > b ? 1 : -1)
        .reduce((p, c) => {
            if (p.indexOf(c) < 0) p.push(c);
            return p
        }, [])

    let portDef = portGroups
        .map(q => gia(ast, q))
        .join("\n")

    let globals = Object.keys(ast.globals)
        .map(q => `set_global_assignment -name ${q} ${ast.globals[q]}\n`)
        .join("")
        .replace(/\$\$\$/g, ast.name)
    return `#============================================================
# Build by datacipy.cz/gen
#============================================================

${globals}

${portDef}`
}