function animateValue(id,end){

let value=0;
let obj=document.getElementById(id);

let interval=setInterval(()=>{
value++;
obj.innerText=value;

if(value===end)
clearInterval(interval);

},10);

}

function updateDashboard(){

let appointments=JSON.parse(localStorage.getItem("appointments")||"[]");

document.getElementById("appointmentsCount").innerText=appointments.length;

}

animateValue("patientsCount",320);
animateValue("appointmentsCount", 45);
animateValue("volunteersCount", 80);
animateValue("aiCount",210);

updateDashboard();