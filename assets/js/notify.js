const notifications = [
  "New patient request received",
  "Doctor appointment booked",
  "Volunteer registered",
  "AI analysis completed"
];

let index = 0;

setInterval(() => {
  if (index < notifications.length) {
    const li = document.createElement("li");
    li.innerText = notifications[index];
    document.getElementById("notifyList").appendChild(li);
    index++;
  }
}, 3000);
