const JSZip = require("jszip")
const FileSaver = require('file-saver');
const hdl = require("./hdl.js")

const download = (packName, kit, feat, lang) => {

    let dateString = require("./quartusDate.js")()

    let ast = kit.genAst(packName)
    let apn = Object.keys(ast.port).filter(q => feat.indexOf(ast.port[q].portGroup) < 0)
    console.log(apn)
    for (let k of apn) {
        delete ast.port[k]
    }

    console.log(ast);
    let code = hdl.hdlGen(ast, lang)
    let qsf = hdl.qsfGen(ast)

    let qpf = `
    DATE = "${dateString}"
    QUARTUS_VERSION = "16.0.0"
    
    # Revisions
    
    PROJECT_REVISION = "${packName}"
`
    //return;
    var zip = new JSZip();
    zip.file(packName + (lang == "verilog" ? ".v" : ".vhd"), code);
    zip.file(packName + ".qsf", qsf);
    zip.file(packName + ".qpf", qpf);
    zip.file(packName + ".sdc", require("./genSdc.js")());

    /*
    var img = zip.folder("images");
    img.file("smile.gif", "AAAA", {
        base64: true
    });
    */
    zip.generateAsync({
            type: "blob"
        })
        .then(function (content) {
            // see FileSaver.js
            FileSaver.saveAs(content, packName + ".zip");
        });

}

module.exports = download