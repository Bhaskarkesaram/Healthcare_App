function animateValue(id, end) {
  let value = 0;
  let obj = document.getElementById(id);
  let interval = setInterval(() => {
    value++;
    obj.innerHTML = value;
    if (value === end) clearInterval(interval);
  }, 10);
}

animateValue("patientsCount", 320);
animateValue("appointmentsCount", 45);
animateValue("volunteersCount", 80);
animateValue("aiCount", 210);