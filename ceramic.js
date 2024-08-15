var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var R = document.getElementById("R");
var btn = document.getElementById("btn");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");

var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");
var p8 = document.getElementById("p8");

var pcs = document.getElementById("pcs");
var sqm = document.getElementById("sqm");

var sqmm = document.getElementById("sqmm");
var pers = document.getElementById("pers");
var alltotal = document.getElementById("alltotal");
var allsqm = document.getElementById("allsqm");
var prs = document.getElementById("prs");

var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");

btn.addEventListener("click", function (pera) {
  pera.preventDefault();

  var Agrade = myF(pcs.value, A.value);
  function myF(a, b) {
    return a * b;
  }

  var Bgrade = oyF(pcs.value, B.value);
  function oyF(a, b) {
    return a * b;
  }

  var Cgrade = qyF(pcs.value, C.value);
  function qyF(a, b) {
    return a * b;
  }

  var Rejected = R.value;
  var Hd = Rejected;
  Hd -= 0;

  p1.innerHTML = "A : " + Agrade + " pcs";
  p2.innerHTML = "B : " + Bgrade + " pcs";
  p3.innerHTML = "C : " + Cgrade + " pcs";
  p4.innerHTML = "R : " + Hd + " pcs";

  var total = Agrade + Bgrade + Cgrade + Hd;
  var y = "ALL Total : ";

  alltotal.innerHTML = y + total + " pcs";

  // sqm section .....................

  sqmm.innerHTML = " # Total part of Sqm.";

  var Asqm = hjkF(sqm.value, Agrade);
  function hjkF(a, b) {
    return a * b;
  }
  var Bsqm = opk(sqm.value, Bgrade);
  function opk(a, b) {
    return a * b;
  }
  var Csqm = bnm(sqm.value, Cgrade);
  function bnm(a, b) {
    return a * b;
  }
  var Rsqm = hjkF(sqm.value, Hd);
  function hjkF(a, b) {
    return a * b;
  }

  p5.innerHTML = "Alet  : " + Asqm + " sqm";
  p6.innerHTML = "B : " + Bsqm + " sqm";
  p7.innerHTML = "C : " + Csqm + " sqm";
  p8.innerHTML = "R : " + Rsqm + " sqm";

  var totalsqm = Asqm + Bsqm + Csqm + Rsqm;

  allsqm.innerHTML = "Total : " + totalsqm + " sqm";

  // per sentence

  pers.innerHTML = "# Part of Persentes";

  var ph = 100;
  ph -= 0;

  var Ah1 = prF(Agrade, total, ph);
  function prF(a, b, c) {
    return (a / b) * c;
    // return Agrade / total * ph;
  }

  var Bh2 = jrF(Bgrade, total, ph);
  function jrF(a, b, c) {
    return (a / b) * c;
    //  return Bgrade / total * ph;
  }

  var Ch3 = krF(Cgrade, total, ph);
  function krF(a, b, c) {
    return (a / b) * c;
    // return Cgrade / total * ph;
  }

  var Rh4 = vrF(Hd, total, ph);
  function vrF(a, b, c) {
    return (a / b) * c;
    //return Hd / total * ph;
  }

  h1.innerHTML = "A = " + Ah1 + " %";
  h2.innerHTML = "B = " + Bh2 + " %";
  h3.innerHTML = "C = " + Ch3 + " %";
  h4.innerHTML = "R = " + Rh4 + " %";

  var totalp = Ah1 + Bh2 + Ch3 + Rh4;

  prs.innerHTML = "Total = " + totalp + " %";
});

var datenow = document.getElementById("datenow");

setInterval(datedatel, 0);

function datedatel() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  let tarik = date.toDateString();

  datenow.innerHTML = tarik + "<br>" + time;
}
