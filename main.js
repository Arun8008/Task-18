 function time(){

 let date=new Date().toLocaleTimeString();			
 
 let span=document.getElementById("sample");
 
 span.innerHTML=date;
 
}
 let stop=setInterval(time,1000);
 
 function  alertstop(){
 clearInterval(stop);
 }
 
 function alertDelay(){
   setTimeout(alertDisplay,2000);
 }
 function  alertDisplay(){
 alert("Hi Arun");
 }
 
 
 
