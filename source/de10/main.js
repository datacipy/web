// npx @adent/parcel-boiler-es6
window.$ = window.jQuery = require("jquery"); //("./node_modules/jquery/dist/jquery.min.js");
//require("./node_modules/bootstrap/dist/js/bootstrap.min");
require("popper.js");
require("bootstrap/js/src");
require("jquery-ui-dist/jquery-ui.js");

//HERE

// --- HASH ROUTER BEGIN ---

const nihil = (f) => {
  console.log(f);
};

const paths = [
  ["/:section/:tip", nihil, {
    showSection: "newtip"
  }],
  ["/:section", nihil, {
    showSection: "newtip"
  }],
  ["*", nihil, {
    showSection: "index"
  }],
];

const ohc = require("@adent/router")(paths);

// router middleware
ohc((params, path) => {
  console.log(params, path);
});

// --- HASH ROUTER register global ---
ohc("global")
// --- HASH ROUTER END ---

const hdl = require("./js/hdl.js")


let kits = {
  de10lite: require("./js/kit/de10lite.js")
}

//let ast = (packName)
//console.log(ast);
//console.log(hdl.hdlGen(ast, "verilog"))
//console.log(hdl.qsfGen(ast))

const dl = require("./js/genSet.js");
const prepareKit = require("./js/prepareKit.js");
//dl(packName, kits.de10nano, "vhdl")

$(document).ready(() => {
  // on load

  //loaded
  $("#_loader").hide();
  $(".container.onload").show();
  // Router setup
  window.onhashchange = ohc;
  window.onhashchange();
  prepareKit(kits.de10lite)

  $("#de10lite button.btn-generate").click(() => {
    let packName = $("#projectName").val().trim();
    console.log(packName)
    if (!packName) {
      $("#projectName").addClass("is-invalid")
      return;
    }
    let lang = $("input[name=language]:checked").val()
    let feat = $(".features .form-check-input:checked")
    let featureList = []
    for (let i = 0; i < feat.length; i++) {
      featureList.push($(feat[i]).val())
    }
    featureList.push($(".features option:checked").val())
    console.log(featureList)
    dl(packName, kits.de10lite, featureList, lang)
  })

});

//chrome scroll fix
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};