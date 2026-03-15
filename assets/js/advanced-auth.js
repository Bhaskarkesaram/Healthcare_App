// Role switch
document.querySelectorAll(".role").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".role").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Toggle password
function togglePassword() {
  const pass = document.getElementById("loginPassword");
  pass.type = pass.type === "password" ? "text" : "password";
}

// Login animation
function login() {

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const loader = document.getElementById("loader");

  if (!email || !password) {
    alert("Please enter email and password!");
    return;
  }

  loader.style.display = "block";

  setTimeout(() => {

    loader.style.display = "none";

    /* SAVE LOGIN STATE */
    localStorage.setItem("loggedIn","true");

    alert("Login successful!");

    window.location.href = "index.html";

  },1500);

}

/* PARTICLE ANIMATION (REAL APP STYLE) */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 3 + 1;
    this.dx = Math.random() * 1 - 0.5;
    this.dy = Math.random() * 1 - 0.5;
    this.color = ["#0a7cff", "#43a047", "#fb8c00", "#e91e63"][Math.floor(Math.random() * 4)];
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

    this.draw();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => p.update());
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});
