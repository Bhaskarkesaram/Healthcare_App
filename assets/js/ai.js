function askAI(){

const input=document.getElementById("aiInput");
const box=document.getElementById("aiMessages");

if(!input.value) return;

let text=input.value.toLowerCase();
let reply="Consult a doctor for proper diagnosis.";

if(text.includes("fever"))
reply="Possible fever. Drink fluids and monitor temperature.";

else if(text.includes("cough"))
reply="Cough may indicate cold or throat infection.";

else if(text.includes("headache"))
reply="Headache may be due to stress or dehydration.";

box.innerHTML+=`<div class="chat user">You: ${input.value}</div>`;
box.innerHTML+=`<div class="chat ai">AI: ${reply}</div>`;

input.value="";
}