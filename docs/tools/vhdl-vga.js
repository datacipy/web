var freqs = [
  ["640x350, 70Hz", 25.175, 640, 16, 96, 48, 350, 37, 2, 60, 1, 0],
  ["640x350, 85Hz", 31.5, 640, 32, 64, 96, 350, 32, 3, 60, 1, 0],

  ["640x400, 70Hz", 25.175, 640, 16, 96, 48, 400, 12, 2, 35, 0, 1],
  ["640x400, 85Hz", 31.5, 640, 32, 64, 96, 400, 1, 3, 41, 0, 1],

  ["640x480, 60Hz", 25.175, 640, 16, 96, 48, 480, 11, 2, 31, 0, 0],
  ["640x480, 72Hz", 31.5, 640, 24, 40, 128, 480, 9, 3, 28, 0, 0],
  ["640x480, 75Hz", 31.5, 640, 16, 96, 48, 480, 11, 2, 32, 0, 0],
  ["640x480, 85Hz", 36.0, 640, 32, 48, 112, 480, 1, 3, 25, 0, 0],
  ["640x480, 100Hz", 43.16, 640, 40, 64, 104, 480, 1, 3, 25, 0, 1],

  ["720x400, 85Hz", 35.5, 720, 36, 72, 108, 400, 1, 3, 42, 0, 1],

  ["768x576, 60Hz", 34.96, 768, 24, 80, 104, 576, 1, 3, 17, 0, 1],
  ["768x576, 72Hz", 42.93, 768, 32, 80, 112, 576, 1, 3, 21, 0, 1],
  ["768x576, 75Hz", 45.51, 768, 40, 80, 120, 576, 1, 3, 22, 0, 1],
  ["768x576, 85Hz", 51.84, 768, 40, 80, 120, 576, 1, 3, 25, 0, 1],
  ["768x576, 100Hz", 62.57, 768, 48, 80, 128, 576, 1, 3, 31, 0, 1],

  ["800x600, 56Hz", 38.1, 800, 32, 128, 128, 600, 1, 4, 14, 1, 1],
  ["800x600, 60Hz", 40.0, 800, 40, 128, 88, 600, 1, 4, 23, 1, 1],
  ["800x600, 72Hz", 50.0, 800, 56, 120, 64, 600, 37, 6, 23, 1, 1],
  ["800x600, 75Hz", 49.5, 800, 16, 80, 160, 600, 1, 2, 21, 1, 1],
  ["800x600, 85Hz", 56.25, 800, 32, 64, 152, 600, 1, 3, 27, 1, 1],
  ["800x600, 100Hz", 68.18, 800, 48, 88, 136, 600, 1, 3, 32, 0, 1],

  ["1024x768, 60Hz", 65.0, 1024, 24, 136, 160, 768, 3, 6, 29, 0, 0],
  ["1024x768, 70Hz", 75.0, 1024, 24, 136, 144, 768, 3, 6, 29, 0, 0],
  ["1024x768, 75Hz", 78.75, 1024, 16, 96, 176, 768, 1, 3, 28, 1, 1],
  ["1024x768, 85Hz", 94.5, 1024, 48, 96, 208, 768, 1, 3, 36, 1, 1],
  ["1024x768, 100Hz", 113.31, 1024, 72, 112, 184, 768, 1, 3, 42, 0, 1],

  ["1152x864, 60Hz", 81.62, 1152, 64, 120, 184, 864, 1, 3, 27, 0, 1],
  ["1152x864, 75Hz", 108, 1152, 64, 128, 256, 864, 1, 3, 32, 1, 1],
  ["1152x864, 85Hz", 119.65, 1152, 72, 128, 200, 864, 1, 3, 39, 0, 1],
  ["1152x864, 100Hz", 143.47, 1152, 80, 128, 208, 864, 1, 3, 47, 0, 1],

  ["1280x720, 60Hz", 74.25, 1280, 110, 40, 220, 720, 5, 5, 20, 1, 1],

  ["1280x800, 60Hz", 83.46, 1280, 64, 136, 200, 800, 1, 3, 24, 0, 1],

  ["1280x960, 60Hz", 108, 1280, 96, 112, 312, 960, 1, 3, 36, 1, 1],
  ["1280x960, 72Hz", 124.54, 1280, 88, 136, 224, 960, 1, 3, 37, 0, 1],
  ["1280x960, 75Hz", 129.86, 1280, 88, 136, 224, 960, 1, 3, 38, 0, 1],
  ["1280x960, 85Hz", 148.5, 1280, 64, 160, 224, 960, 1, 3, 47, 1, 1],
  ["1280x960, 100Hz", 178.99, 1280, 96, 144, 240, 960, 1, 3, 53, 0, 1],

  ["1280x1024, 60Hz", 108, 1280, 48, 112, 248, 1024, 1, 3, 38, 1, 1],
  ["1280x1024, 75Hz", 135, 1280, 16, 144, 248, 1024, 1, 3, 38, 1, 1],
  ["1280x1024, 85Hz", 157.5, 1280, 64, 160, 224, 1024, 1, 3, 44, 1, 1],
  ["1280x1024, 100Hz", 190.96, 1280, 96, 144, 240, 1024, 1, 3, 57, 0, 1],

  ["1368x768, 60Hz", 85.86, 1368, 72, 144, 216, 768, 1, 3, 23, 0, 1],

  ["1400x1050, 60Hz", 122.61, 1400, 88, 152, 240, 1050, 1, 3, 33, 0, 1],
  ["1400x1050, 72Hz", 149.34, 1400, 96, 152, 248, 1050, 1, 3, 40, 0, 1],
  ["1400x1050, 75Hz", 155.85, 1400, 96, 152, 248, 1050, 1, 3, 42, 0, 1],
  ["1400x1050, 85Hz", 179.26, 1400, 104, 152, 256, 1050, 1, 3, 49, 0, 1],
  ["1400x1050, 100Hz", 214.39, 1400, 112, 152, 264, 1050, 1, 3, 58, 0, 1],

  ["1440x900, 60Hz", 106.47, 1440, 80, 152, 232, 900, 1, 3, 28, 0, 1],

  ["1600x1200, 60Hz", 162, 1600, 64, 192, 304, 1200, 1, 3, 46, 1, 1],
  ["1600x1200, 65Hz", 175.5, 1600, 64, 192, 304, 1200, 1, 3, 46, 1, 1],
  ["1600x1200, 70Hz", 189, 1600, 64, 192, 304, 1200, 1, 3, 46, 1, 1],
  ["1600x1200, 75Hz", 202.5, 1600, 64, 192, 304, 1200, 1, 3, 46, 1, 1],
  ["1600x1200, 85Hz", 229.5, 1600, 64, 192, 304, 1200, 1, 3, 46, 1, 1],
  ["1600x1200, 100Hz", 280.64, 1600, 128, 176, 304, 1200, 1, 3, 67, 0, 1],

  ["1680x1050, 60Hz", 147.14, 1680, 104, 184, 288, 1050, 1, 3, 33, 0, 1],

  ["1792x1344, 60Hz", 204.8, 1792, 128, 200, 328, 1344, 1, 3, 46, 0, 1],
  ["1792x1344, 75Hz", 261, 1792, 96, 216, 352, 1344, 1, 3, 69, 0, 1],

  ["1856x1392, 60Hz", 218.3, 1856, 96, 224, 352, 1392, 1, 3, 43, 0, 1],
  ["1856x1392, 75Hz", 288, 1856, 128, 224, 352, 1392, 1, 3, 104, 0, 1],

  ["1920x1080, 60Hz", 148.5, 1920, 88, 44, 148, 1080, 4, 5, 36, 1, 1],
  ["1920x1080, 50Hz", 148.5, 1920, 528, 44, 148, 1080, 36, 5, 4, 1, 1],

  ["1920x1200, 60Hz", 193.16, 1920, 128, 208, 336, 1200, 1, 3, 38, 0, 1],

  ["1920x1440, 60Hz", 234, 1920, 128, 208, 344, 1440, 1, 3, 56, 0, 1],
  ["1920x1440, 75Hz", 297, 1920, 144, 224, 352, 1440, 1, 3, 56, 0, 1],
  //GTF
];
/*
var subwork = function(l) {
	var np = l.lastIndexOf("x");
	var bp = l.indexOf("\t",np);
	var pp = l.indexOf(".00 Hz");
	var m = l.substr(bp).trim().split(/[\t\s]+/);
	if (m[10][0]=='+') m[10]=1; else m[10]=0;
	if (m[9][0]=='+') m[9]=1; else m[9]=0;
	return [l.substr(0,pp).trim().replace(" @",",")+"Hz",m[0]*1,m[1]*1,m[2]-m[1],m[3]-m[2],m[4]-m[3],m[5]*1,m[6]-m[5],m[7]-m[6],m[8]-m[7], m[9],m[10]];
};


var moline = [
"1920x1080 @ 60.00 Hz (GTF)	1920x1080 	148.500	1920	2008	2052	2200	1080	1084	1089	1125	+hsync	+vsync",
"1920x1080 @ 50.00 Hz (GTF)	1920x1080 	148,500	1920	2448	2492	2640	1080	1116	1121	1125	+hsync	+vsync",
"1280x720 @ 60.00 Hz (GTF) 1280x720 	74.250	1280	1390	1430	1650	720	725	730	750	+hsync	+vsync",
"1920x1200 @ 60.00 Hz (GTF) hsync: 74.52 kHz; pclk: 193.16 MHz	1920x1200	193.16 1920 2048 2256 2592 1200 1201 1204 1242	-HSync	+Vsync"
];

//console.log(JSON.stringify(moline.map(subwork)));
*/
//
var freqp = 48;
var divq = 32;

var nsd = function (a, b) {
  if (a == b) return a;
  if (a > b) return nsd(a - b, b);
  if (a < b) return nsd(a, b - a);
};

var norm = function (f) {
  var m = nsd(f[0], f[1]);
  return [f[0] / m, f[1] / m];
};

var deals = function (f) {
  return freqs.map(function (l) {
    var pf = l[1];
    return [l, norm([Math.floor(pf * 1000), Math.floor(f * 1000)])];
  });
};

var reasonable = function (d) {
  return d.filter(function (k) {
    var dm = k[1][0];
    var dd = k[1][1];
    return dd < divq && dm < divq;
  });
};

var ratio = function (l) {
  var o = l.match(/(.*)x(.*),.*/);
  var n = norm([o[1] * 1, o[2] * 1]);
  var k = n[0] + ":" + n[1];
  if (k == "8:5") k = "16:10";
  return k;
};

var mline = function (d) {
  var r = ratio(d[0][0]);
  d[0][0] += " (" + r + ")";
  var out = d[0].map(function (v) {
    return "<td>" + v + "</td>";
  });
  var rf = (freqp * d[1][0]) / d[1][1];
  out += "<td>" + d[1][0] + "/" + d[1][1] + "</td>";
  return out;
};

var mtable = function (d) {
  return d.map(function (l) {
    return (
      "<tr data-type='" +
      JSON.stringify(l[0]) +
      "' data-pll='" +
      JSON.stringify(l[1]) +
      "'>" +
      mline(jQuery.extend(true, {}, l)) +
      "</tr>"
    );
  });
};

var dotable = function (d) {
  var lines = d.reduce(function (p, c) {
    return p + c;
  }, "");
  $("#tabout tbody").html(lines);
  $("#tabout").show();
};

var run = function () {
  $("#waves").hide();
  $("#sync").hide();
  freqp = parseInt($("#freq").val());
  if (isNaN(freqp) || freqp <= 0) {
    $("#freq").addClass("is-invalid");
    return;
  } else {
    $("#freq").removeClass("is-invalid");
  }
  divq = parseInt($("#divq").val());
  dotable(mtable(reasonable(deals(freqp))));
  $("#tabout tbody tr").click(function () {
    var f = JSON.parse($(this).attr("data-type"));
    var p = JSON.parse($(this).attr("data-pll"));
    $("#hsi").attr("src", "./tools/HS" + f[10] + ".png");
    $("#vsi").attr("src", "./tools/VS" + f[11] + ".png");
    $("#hv").html(f[2]);
    $("#hf").html(f[3]);
    $("#hs").html(f[4]);
    $("#hb").html(f[5]);
    $("#vv").html(f[6]);
    $("#vf").html(f[7]);
    $("#vs").html(f[8]);
    $("#vb").html(f[9]);
    $("#sync").html(syncgen(f, p));
    $("#waves").show();
    $("#sync").show();
  });
};

//syncgen
var syncgen = function (l, pll) {
  var out = "";
  var hx = l[2] + l[3] + l[4] + l[5];
  var vx = l[6] + l[7] + l[8] + l[9];
  var hs = l[10];
  var vs = l[11];
  var nhs = hs == 1 ? 0 : 1;
  var nvs = vs == 1 ? 0 : 1;

  out += "-- GENERATED BY http://vhdl.cz/vhdl/vga/\n";
  out += "-- &copy; 2015 Martin Maly\n\n";
  out += "-- " + l[0] + "\n";
  out += "-- Pixel clock from PLL: " + l[1] + "MHz\n\n";
  out += "-- Main frequency: " + freqp + "MHz\n";
  out += "-- PLL multiplier: " + pll[0] + ", divider: " + pll[1] + "\n";
  out += "library ieee;\n";
  out += "use ieee.std_logic_1164.all;\n";
  out += "use ieee.numeric_std.all;\n";
  out += "entity sync is\n";
  out += "port (\n";
  out += "clk: in std_logic;\n";
  out += "posx:out integer range 0 to " + (l[2] - 1) + ";\n";
  out += "posy:out integer range 0 to " + (l[6] - 1) + ";\n";
  out += "hsync,vsync: out std_logic;\n";
  out += "blank: out std_logic\n";
  out += ");\n";
  out += "end sync;\n\n";

  out += "architecture main of sync is\n";
  out += "signal hpos: integer range 0 to " + hx + ":=0;\n";
  out += "signal vpos: integer range 0 to " + vx + ":=0;\n";
  out += "signal x: integer range 0 to " + (l[2] - 1) + ":=0;\n";
  out += "signal y: integer range 0 to " + (l[6] - 1) + ":=0;\n";
  out += "begin\n";
  out += "    process(clk) is begin\n";
  out += "      if rising_edge(clk) then\n";
  out += "        if (hpos&lt;" + hx + ") then hpos&lt;=hpos+1; x&lt;=x+1;\n";
  out += "        else\n";
  out += "           hpos&lt;=0;\n";
  out += "           x&lt;=0;\n";
  out +=
    "           if (vpos&lt;" + vx + ") then vpos&lt;=vpos+1; y&lt;=y+1;\n";
  out += "           else vpos&lt;=0;y&lt;=0;\n";
  out += "           end if; --vpos\n";
  out += "        end if; --hpos\n";
  out +=
    "        if (hpos&gt;=" +
    l[3] +
    " and hpos&lt;" +
    (l[3] + l[4]) +
    ") then\n";
  out += "           hsync&lt;='" + hs + "';\n";
  out += "        else\n";
  out += "           hsync&lt;='" + nhs + "';\n";
  out += "        end if;\n";
  out +=
    "        if (vpos&gt;=" +
    l[7] +
    " and vpos&lt;" +
    (l[7] + l[8]) +
    ") then\n";
  out += "           vsync&lt;='" + vs + "';\n";
  out += "        else\n";
  out += "           vsync&lt;='" + nvs + "';\n";
  out += "        end if;\n";
  out +=
    "        if ((vpos&gt;=0 and vpos&lt;" +
    (l[7] + l[8] + l[9]) +
    ")) then y&lt;=0; end if;\n";
  out +=
    "        if ((hpos&gt;=0 and hpos&lt;" +
    (l[3] + l[4] + l[5]) +
    ") or (vpos&gt;=0 and vpos&lt;" +
    (l[7] + l[8] + l[9]) +
    ")) then\n";
  out += "           blank&lt;='1';\n";
  out += "           x&lt;=0;\n";
  out += "        else;\n";
  out += "           blank&lt;='0';\n";
  out += "        end if;\n";
  out += "	posx&lt;=x;\n";
  out += "	posy&lt;=y;\n";
  out += "	end if; --clk\n";
  out += "    end process;\n";
  out += "end main; --architecture    \n";
  return out;
};
