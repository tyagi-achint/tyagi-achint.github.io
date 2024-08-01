// Navbar 
function navFunction() {
  document.querySelector("nav").classList.toggle("responsive");
}

// TopSection Scroll Animation

let TopSection = document.querySelector("#TopSection");
let ImageContainer = document.querySelector("#ImageContainer");
window.addEventListener("scroll", scrollFun);

function scrollFun() {
  if (window.scrollY > 50) {
    TopSection.classList.add("onScrollTopSection");
    ImageContainer.classList.add('onScrollProfileImage');
  } else {
    TopSection.classList.remove("onScrollTopSection");
    ImageContainer.classList.remove('onScrollProfileImage');

  }
}


// Designation Text

const changingText = document.querySelector("#ImageContainer .designationText");
const newTexts = [
  "Front-end Engineer",
  "Flutter Developer",
  "Continuous Learner",
  "Web Developer"
];

let currentIndex = 0;

function changeText() {
  changingText.textContent = newTexts[currentIndex];
  currentIndex = (currentIndex + 1) % newTexts.length;
}

setInterval(changeText, 2000);


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

//  Back to Top
let toTopbtn = document.querySelector("#ProgressBar");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 100) {
    toTopbtn.style.display = "flex";
  } else {
    toTopbtn.style.display = "none";
  }
}

toTopbtn.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTo({ top: 0, behavior: "smooth" });
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const updatetoTopbtn = () => {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrollPercent = (winScroll / height) * 100;
    const circlePercentage = (scrollPercent / 100) * 360;
    toTopbtn.style.backgroundImage = `conic-gradient(#ccc 0deg ${circlePercentage}deg, transparent ${circlePercentage}deg 360deg)`;
  };
  window.addEventListener("scroll", updatetoTopbtn);
});

// Contact Form

let formSent = document.querySelector("#Contact .form");
let afterForm = document.querySelector("#afterForm");

function changeBorder(element) {
  const parentDiv = element.parentNode;
  parentDiv.classList.add("focus");
}

function removeBorder(element) {
  const parentDiv = element.parentNode;
  parentDiv.classList.remove("focus");
}

function sendEmail() {
  let emailFormName = document.querySelector("form .inputName input").value;
  let emailFormEmail = document.querySelector("form .inputEmail input").value;
  let emailFormMessage = document.querySelector("form textarea").value;

  emailjs
    .send("service_0lakxif", "template_ssl87lm", {
      message: emailFormMessage,
      from_name: emailFormName,
      from_email: emailFormEmail,
    })
    .then(emailSent());
}
function emailSent() {
  formSent.setAttribute("style", "display:none;");
  afterForm.setAttribute("style", "display:block;");
}

function reloadAfterForm() {
  window.location.reload();
}

// Change Colour

const colors = [
  {
    element: document.querySelector("#SwitchColor .colorPanel li:nth-child(1)"),
    name: "#5d3891",
  },
  {
    element: document.querySelector("#SwitchColor .colorPanel li:nth-child(2)"),
    name: "#55a3e6",
  },
  {
    element: document.querySelector("#SwitchColor .colorPanel li:nth-child(3)"),
    name: "#55e6a5",
  },
];
let colorMenuIcon = document.querySelector("#SwitchColor i");
let colorMenu = document.querySelector("#SwitchColor .colorPanel");

colors.forEach((color) => {
  color.element.addEventListener("click", switchColor);
});

function switchColor(event) {
  const clickedElement = event.target;

  colors.forEach((color) => {
    if (color.element === clickedElement) {
      color.element.classList.add("colorActive");
    } else {
      color.element.classList.remove("colorActive");
    }
  });

  const colorName = colors.find(
    (color) => color.element === clickedElement
  ).name;

  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
body::before,
body::after {
background-color: ${colorName};
}
.data hr.nameUnderline  {
border-top: 2px solid ${colorName};
box-shadow: -7px 0px 15px 2px ${colorName};
}
#ContactColorText{
color: ${colorName};
text-shadow: 0px 3px 10px ${colorName};
}

.cards::-webkit-scrollbar-thumb {
background: ${colorName} !important ;
}
#Certificates .card,#Projects .card{
box-shadow: 0px 0px 6px 0px ${colorName};
}
#Certificates .card:hover,#Projects .card:hover {
box-shadow: 0px 0px 10px 1px ${colorName};
}

#Skills .skill:hover {
box-shadow: 0px 0px 7px ${colorName};
}
@keyframes SquareBrackets {
0%, 20% {
  color: ${colorName};
  display: block;
}

20.1%, 40% {
  display: none;
}

40.1%, 60% {
  color: rgba(255, 255, 255, 0.6);
  display: block;
}

60.1%, 80% {
  display: none;
}

80.1%, 100% {
  color: ${colorName};
  display: block;
}
}
.socialLogo img  {
background-color: ${colorName};}



  .socialLogo img:hover {
    box-shadow: 0px 0px 10px ${colorName} !important;

  }
  #SwitchColor .colorActive {
    color: ${colorName};
    border: 5px dashed ${colorName};
  }
`;
  document.head.appendChild(styleTag);
}

colorMenuIcon.addEventListener("click", colorMenuClick);
function colorMenuClick() {
  colorMenuIcon.classList.toggle("fa-flip-vertical");
  colorMenu.classList.toggle("open");
}


// Footer Current Year

var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;


// Projects PopUp

let ProjectsPopUp = document.getElementById("ProjectsPopUp");

function openProjectsPopUp() {
  ProjectsPopUp.setAttribute("style", "display:block !important;");
};

function closeProjectsPopUp() {
  ProjectsPopUp.setAttribute("style", "display:none !important;");
};