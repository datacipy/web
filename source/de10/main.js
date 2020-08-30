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

let ast = require("./js/kit/de10nano.js")("omde10")
//console.log(ast);
//console.log(hdl.hdlGen(ast, "verilog"))
console.log(hdl.qsfGen(ast))

$(document).ready(() => {
  // on load

  //loaded
  $("#_loader").hide();
  $(".container.onload").show();
  // Router setup
  window.onhashchange = ohc;
  window.onhashchange();
});

//chrome scroll fix
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};