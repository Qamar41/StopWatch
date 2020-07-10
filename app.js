var mnt=0;
var sec=0;
var msec=0;
var interval;
var timer;
var msecdata=document.getElementById('msec');
var secdata=document.getElementById('sec')
var mntdata=document.getElementById('mnt')
function msece(){

msec++
msecdata.innerHTML =msec
if (msec >= 100){
    
   
    sec++
    secdata.innerHTML=sec
    msec=0
 }else if (sec>=60){
     mnt++
     
     mntdata.innerHTML = mnt
     sec=0     

     
     
 }
}

function disableBtnstart() {
    document.getElementById("start").disabled = true;
  }


function enableBtnstart() {
    document.getElementById("start").disabled = false;
  }

  function disableBtnstop() {
    document.getElementById("stop").disabled = true;
  }


function enableBtnstop() {
    document.getElementById("stop").disabled = false;
  }

function start(){
interval = setInterval(msece,10)
disableBtnstart()
enableBtnstop()
}


function stop(){
    clearInterval(interval)
    disableBtnstop()
    enableBtnstart()
}








function reset(){
    msec=0;
    sec=0;
    mnt=0;
    msecdata.innerHTML=msec
    secdata.innerHTML=sec
    mntdata.innerHTML=mnt
    stop()
    enableBtnstart()
    enableBtnstop()


}
