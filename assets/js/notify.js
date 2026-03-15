function showNotification(message){

const box = document.getElementById("notifyList");

const li = document.createElement("li");

li.innerText = message;

box.appendChild(li);

/* remove after 6 seconds */

setTimeout(()=>{
li.remove();
},6000);

}

/* sample notifications */

const notifications = [
"New patient request received",
"Doctor appointment booked",
"Volunteer registered",
"AI analysis completed"
];

let index = 0;

setInterval(()=>{

if(index < notifications.length){

showNotification(notifications[index]);

index++;

}

},3000);