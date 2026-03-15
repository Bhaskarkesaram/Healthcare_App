function askAI() {
  const input = document.getElementById("aiInput").value;
  const box = document.getElementById("aiMessages");

  let reply = "Consult a doctor for accurate advice.";

  if (input.toLowerCase().includes("fever")) reply = "You may have fever.";
  if (input.toLowerCase().includes("cough")) reply = "Cough may be due to cold.";
  if (input.toLowerCase().includes("headache")) reply = "Headache may be due to stress.";

  box.innerHTML += `<p><b>You:</b> ${input}</p>`;
  box.innerHTML += `<p><b>AI:</b> ${reply}</p>`;
}
