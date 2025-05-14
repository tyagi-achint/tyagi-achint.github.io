//Navbar

function navFunction(icon) {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
  icon.classList.toggle("active");
}

// Theme Toggle

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  if (currentEffect) {
    currentEffect();
  }

  if (newTheme === "dark") {
    darkModeBgEffect();
  } else {
    lightModeBgEffect();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  // Load saved theme or default to 'light'
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Start the matching background effect on load
  if (savedTheme === "dark") {
    darkModeBgEffect();
    currentEffect = darkModeBgEffect;
  } else {
    lightModeBgEffect();
    currentEffect = lightModeBgEffect;
  }
});

var darkModeBgEffect = () => {
  removeBubbles();

  const bg = document.getElementById("Background-Effect");

  for (let i = 0; i < 20; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const x1 = Math.random().toFixed(3);
    const y1 = Math.random().toFixed(3);
    const x2 = Math.random().toFixed(3);
    const y2 = Math.random().toFixed(3);

    star.style.setProperty("--x", x1);
    star.style.setProperty("--y", y1);
    star.style.setProperty("--x2", x2);
    star.style.setProperty("--y2", y2);

    star.style.animationDelay = `${Math.random() * 2}s`;

    bg.appendChild(star);
  }

  const shootingStar = document.createElement("div");
  shootingStar.className = "shooting-star";
  bg.appendChild(shootingStar);

  currentEffect = darkModeBgEffect;
};

var lightModeBgEffect = () => {
  removeStars();
  const container = document.getElementById("Background-Effect");
  const screenWidth = window.innerWidth;
  function random(min = 0, max = 2) {
    return (Math.random() * (max - min) + min).toFixed(3);
  }
  function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = random() * 40 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    const x = random() * screenWidth;
    bubble.style.left = `${x}px`;

    bubble.style.top = `150vh`;

    const duration = random() * 10 + 10;
    const delay = random() * 10;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;

    const colors = [
      "rgba(255, 99, 132, 0.25)",
      "rgba(54, 162, 235, 0.25)",
      "rgba(255, 206, 86, 0.25)",
      "rgba(75, 192, 192, 0.25)",
      "rgba(153, 102, 255, 0.25)",
      "rgba(255, 159, 64, 0.25)",
      "rgba(200, 200, 200, 0.55)",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.background = color;

    bubble.addEventListener("animationiteration", () => {
      const newX = Math.random() * screenWidth;
      bubble.style.left = `${newX}px`;
    });

    container.appendChild(bubble);
  }

  for (let i = 0; i < 25; i++) {
    createBubble();
  }

  currentEffect = lightModeBgEffect;
};

function removeBubbles() {
  const bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach((bubble) => bubble.remove());
}

function removeStars() {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => star.remove());

  const shootingStar = document.querySelector(".shooting-star");
  if (shootingStar) {
    shootingStar.remove();
  }
}

// Cursor
let Cursor = document.querySelector("#Cursor");

document.addEventListener("mousemove", function (e) {
  Cursor.setAttribute(
    "style",
    "left:" + (e.pageX - 18) + "px; top:" + (e.pageY - 18) + "px;"
  );
});

document.addEventListener("click", function (e) {
  Cursor.classList.add("curExpand");
  setTimeout(function () {
    Cursor.classList.remove("curExpand");
  }, 500);
});

// Designation Text

const designationText = document.querySelector(".designationText");
const designations = [
  "Front-End Engineer",
  "App Developer",
  "UI Design Enthusiast",
  "Continuous Learner",
  "Web Developer",
];
let currentIndex = 0;

function updateDesignation() {
  currentIndex = (currentIndex + 1) % designations.length;
  designationText.textContent = designations[currentIndex];
}

setInterval(updateDesignation, 2000);

// Current date day
let dayDate = document.querySelector(".dayDate");
function updateTime() {
  const date = new Date();
  let currentOffset = date.getTimezoneOffset();
  let ISTOffset = 330;
  let ISTTime = new Date(date.getTime() + (ISTOffset + currentOffset) * 60000);

  const formattedDate = ISTTime.toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  dayDate.innerHTML = formattedDate;
}
updateTime();
setInterval(updateTime, 60000);

// contact form

let formSent = document.querySelector("#Contact .form");
let afterForm = document.querySelector("#Contact #afterForm");

function sendEmail(event) {
  event.preventDefault();
  let emailFormName = document.getElementById("Name").value;
  let emailFormEmail = document.getElementById("Email").value;
  let emailFormMessage = document.getElementById("formMessage").value;

  const serviceID = "service_3ygcw44";
  const templateID = "template_64s4isg";

  emailjs
    .send(serviceID, templateID, {
      from_name: emailFormName,
      from_email: emailFormEmail,
      message: emailFormMessage,
    })
    .then(() => {
      emailSent();
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      alert("Error sending message. Please try again later.");
    });
}

function emailSent() {
  formSent.setAttribute("style", "display:none;");
  afterForm.setAttribute("style", "display:block;");
}

function reloadAfterForm() {
  window.location.reload();
}

// Projects PopUp

let ProjectPopUp = document.getElementById("ProjectPopUp");

function openProjectPopUp() {
  ProjectPopUp.setAttribute("style", "display:flex !important;");
}

function closeProjectPopUp() {
  ProjectPopUp.setAttribute("style", "display:none !important;");
}

document.addEventListener("contextmenu", function (e) {
  const image = document.getElementById("protected-img");
  const imageDiv = document.getElementById("ImageContainer");
  if (e.target === image || e.target === imageDiv) {
    e.preventDefault();
  }
});
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Loading

document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(() => {
    loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 800);
  }, 500);
});
