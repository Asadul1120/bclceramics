
var sqmv = document.getElementById('sqmv')

var m1 = document.getElementById('m1')
var m2 = document.getElementById('m2')
var m3 = document.getElementById('m3')
var m4 = document.getElementById('m4')
var m5 = document.getElementById('m5')
var ms = document.getElementById('ms')
var mr = document.getElementById('mr')


var ps1 = document.getElementById('ps1');
var ps2 = document.getElementById('ps2');
var ps3 = document.getElementById('ps3');
var ps4 = document.getElementById('ps4');
var ps5 = document.getElementById('ps5');
var pss = document.getElementById('pss');
var psr = document.getElementById('psr');



var pf1 = document.getElementById('pf1');
var pf2 = document.getElementById('pf2');
var pf3 = document.getElementById('pf3');
var pf4 = document.getElementById('pf4');
var pf5 = document.getElementById('pf5');
var pfs = document.getElementById('pfs');
var pfr = document.getElementById('pfr');



var top1 = document.getElementById('top1')
var tos = document.getElementById('tos')
var tof = document.getElementById('tof')



var btn = document.getElementById('btn')

btn.addEventListener('click',function(pera){
    pera.preventDefault();
    
    
 
  var Model1 = myF(sqmv.value, m1.value);  
  function myF(a, b){
      return a * b;
  }
 
  var Model2 = mlF(sqmv.value, m2.value);  
  function mlF(a, b){
      return a * b;
  }
 
  var Model3 = pyF(sqmv.value, m3.value);  
  function pyF(a, b){
      return a * b;
  }

  var Model4 = lyF(sqmv.value, m4.value);  
  function lyF(a, b){
      return a * b;
  }

  var Model5 = mkyF(sqmv.value, m5.value);  
  function mkyF(a, b){
      return a * b;
  }

  var Sample = omyF(sqmv.value, ms.value);  
  function omyF(a, b){
      return a * b;
  }

  var Rejected = bmyF(sqmv.value, mr.value);  
  function bmyF(a, b){
      return a * b;
  }
    

ps1.innerHTML="Total = " + Model1 + " Sqm";
ps2.innerHTML="Total = " + Model2 + " Sqm";
ps3.innerHTML="Total = " + Model3 + " Sqm";
ps4.innerHTML="Total = " + Model4 + " Sqm";
ps5.innerHTML="Total = " + Model5 + " Sqm";
pss.innerHTML="Sample = " + Sample + " Sqm";
psr.innerHTML="Rejecte = " + Rejected + " Sqm";
    
    
    // fit Section
    
    var fit = 10.76 ;
         fit -= 0 ;
    
  var mf1 = mkF(Model1, fit);  
  function mkF(a, b){
      return a * b;
  }
 
 var mf2 = mkF(Model2, fit);  
  function mkF(a, b){
      return a * b;
  }
  
  var mf3 = mkF(Model3, fit);  
  function mkF(a, b){
      return a * b;
  }
  
  
  var mf4 = mkF(Model4, fit);  
  function mkF(a, b){
      return a * b;
  }
  
  var mf5 = mkF(Model5, fit);  
  function mkF(a, b){
      return a * b;
  }
    
  var mfs = mkF(Sample, fit);  
  function mkF(a, b){
      return a * b;
  }
  
 var mfr = mkF(Rejected, fit);  
  function mkF(a, b){
      return a * b;
  }
  
pf1.innerHTML="Total = " + mf1 + " Fit";
pf2.innerHTML="Total = " + mf2 + " Fit";
pf3.innerHTML="Total = " + mf3 + " Fit";
pf4.innerHTML="Total = " + mf4 + " Fit";
pf5.innerHTML="Total = " + mf5 + " Fit";
pfs.innerHTML="Total = " + mfs + " Fit";
pfr.innerHTML="Total = " + mfr + " Fit";
   
   
// Total All 

 var mo1 = m1.value ;
 var ma = mo1
     ma -= 0 ;

 var mo2 = m2.value ;
 var mb = mo2
     mb -= 0 ; 
     
 var mo3 = m3.value ;
 var mc = mo3
     mc -= 0 ; 
     
 var mo4 = m4.value ;
 var md = mo4
     md -= 0 ;  
 
 var mo5 = m5.value ;
 var me = mo5
     me -= 0 ; 
     
 var mo6 = ms.value ;
 var mf = mo6
     mf -= 0 ; 
     
 var mo7 = mr.value ;
 var mg = mo7
     mg -= 0 ;  



var totalps = ma + mb + mc + md + me + mf + mg ;
top1.innerHTML="Total All = " + totalps + " Pcs";
    



var totals = Model1 + Model2 + Model3 + Model4 + Model5 + Sample + Rejected ;

tos.innerHTML="Total All = " + totals + " Sqm";

var totalf = mf1 + mf2 + mf3 + mf4 + mf5 + mfs + mfr ;

tof.innerHTML="Total All = " + totalf + " Fit";



});

var datenow = document.getElementById("datenow")



setInterval(datedatel,0);

function datedatel() {
 
let date = new Date();
let time = date.toLocaleTimeString();
let tarik = date.toDateString();

datenow.innerHTML= tarik +"<br>"+time;


}