// function Timer(){
//     console.log("Running")
// }
// // setInterval(Timer,1000)
// setTimeout(Timer,5000)
var minHead=document.getElementById("min")
var secHead=document.getElementById("sec")
var msecHead=document.getElementById("msec")
var btn=document.getElementById("disabled")

var min =00
var sec=00;
var msec=00;
// msecHead.innerHTML=msec;
// secHead.innerHTML=sec;
// minHead.innerHTML=min;

function stopWatch(){
    msec++;
    msecHead.innerHTML=msec;
    if(msec==100)
    {
        sec++;
        secHead.innerHTML=sec;
        msec=00;
      
        }if(sec==60)
        {
            min++;
            minHead.innerHTML=sec;
            sec=00;
          
            }
    }
var interval

function start()
{
    interval=setInterval(stopWatch,10)
    btn.disabled=true;
}
function pause()
{
    clearInterval(interval)
    btn.disabled=false;
}
function reset(){
    msec=00;
    sec=00;
    min=00;
    msecHead.innerHTML=msec;
    secHead.innerHTML=sec;
    minHead.innerHTML=min;
}


