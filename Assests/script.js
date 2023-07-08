//Scroll Effect
let leftContent = document.querySelector("#leftContent");
window.addEventListener("scroll", scrollFun);

function scrollFun() {
  if (window.scrollY > 100) {
    leftContent.classList.add("onScrollContent");
  } else {
    leftContent.classList.remove("onScrollContent");
  }
}

//Resume
let resumeBox = document.querySelector(".resumebox");
let resumeIcon = document.querySelector(".resumeIcon");
resumeBox.addEventListener("mouseover", function (e) {
  resumeIcon.setAttribute("trigger", "loop");
});
resumeBox.addEventListener("mouseout", function (e) {
  resumeIcon.removeAttribute("trigger");
});

//Navbar Toggle
let panel = document.querySelector(".panel");
let navicon = document.querySelector(".fa-gear");
let topContainer = document.querySelector("#topContainer");
let bottomContainer = document.querySelector("#bottomContainer");
let candleDiv = document.querySelector("#candleDiv");
function togglePanel() {
  panel.classList.toggle("open");
  navicon.classList.toggle("fa-spin");
  topContainer.classList.toggle("afterNavOpacity");
  bottomContainer.classList.toggle("afterNavOpacity");
  candleDiv.classList.toggle("candleDivDisplay");
}

//Cursor
let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.setAttribute(
    "style",
    "left:" + (e.pageX - 18) + "px; top:" + (e.pageY - 18) + "px;"
  );
});

document.addEventListener("click", function (e) {
  cursor.classList.add("curExpand");
  setTimeout(function () {
    cursor.classList.remove("curExpand");
  }, 500);
});

// DAY DATE

let dayDate = document.querySelector(".dayDate");

function updateTime() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let currentOffset = d.getTimezoneOffset();
  let ISTOffset = 330;
  let ISTTime = new Date(d.getTime() + (ISTOffset + currentOffset) * 60000);

  let day = days[ISTTime.getDay()];
  let month = months[ISTTime.getMonth()];

  dayDate.innerHTML = month + ", " + ISTTime.getDate() + " " + day;
  // '<span style="margin-left:20%">' +
  // ISTTime.getHours() +
  // ":" +
  // ISTTime.getMinutes() +
  // "</span>";
}
updateTime();
setInterval(updateTime, 60000);

// SCROLL BACK TO TOP
let toTopbtn = document.querySelector("#progress-bar");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 100) {
    toTopbtn.style.display = "block";
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

// FORM

let formSent = document.querySelector("#contact .form");
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

// BACKGROUND COLOR CHANGE

const colors = [
  {
    element: document.querySelector("#switchColor .colorPanel li:nth-child(1)"),
    name: "#5d3891",
  },
  {
    element: document.querySelector("#switchColor .colorPanel li:nth-child(2)"),
    name: "#55a3e6",
  },
  {
    element: document.querySelector("#switchColor .colorPanel li:nth-child(3)"),
    name: "#55e6a5",
  },
];
let colorMenuIcon = document.querySelector("#switchColor i");
let colorMenu = document.querySelector("#switchColor .colorPanel");

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
    #rightContent .nameUnderline {
      border-top: 0.5vh solid ${colorName};
  box-shadow: -7px 0px 15px 2px ${colorName};
    }
    #contactColorText{
      color: ${colorName};
  text-shadow: 0px 3px 10px ${colorName};
    }
    .cards::-webkit-scrollbar-thumb {
      background: ${colorName};
    }
    .card{
  box-shadow: 0px 0px 15px -2px ${colorName};
    }
    .card:hover {
      box-shadow: 0px 0px 15px 1px ${colorName};
    }
  `;

  document.head.appendChild(styleTag);
}

colorMenuIcon.addEventListener("click", colorMenuClick);
function colorMenuClick() {
  colorMenuIcon.classList.toggle("fa-flip-vertical");
  colorMenu.classList.toggle("open");
}

// Project Card
let projectCards = document.querySelectorAll("#projects .card");

projectCards.forEach((projectCard) => {
  let descDiv = projectCard.querySelector(".discripition");
  let cardData = projectCard.querySelector(".cardData");

  projectCard.addEventListener("mouseover", showDescription);
  function showDescription() {
    cardData.style.opacity = "0";
    descDiv.style.opacity = "1";
  }

  projectCard.addEventListener("mouseout", hideDescription);
  function hideDescription() {
    cardData.style.opacity = "1";
    descDiv.style.opacity = "0";
  }
});

// Loading Page
var loadingPage = document.querySelector("#loadingPage");
var pageContent = document.querySelector(".pageContent");

loadingPage.style.display = "flex";
pageContent.style.display = "none";

window.addEventListener("load", function () {
  setTimeout(() => {
    loadingPage.style.display = "none";
    pageContent.style.display = "block";
  }, 3000);
});
