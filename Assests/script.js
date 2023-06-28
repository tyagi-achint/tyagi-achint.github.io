let panel = document.querySelector(".panel");
let navicon = document.querySelector(".fa-gear");
let mainContent = document.querySelector("#mainContent");
let candleDiv = document.querySelector("#candleDiv");
let leftContent = document.querySelector("#leftContent");
let profileContent = document.querySelector(".profileContent");
let cursor = document.querySelector(".cursor");
let resumeBox = document.querySelector(".resumebox");
let resumeIcon = document.querySelector(".resumeIcon");
let dayDate = document.querySelector(".dayDate");
let toTopbtn = document.querySelector("#progress-bar");

window.addEventListener("scroll", scrollFun);

resumeBox.addEventListener("mouseover", function (e) {
  resumeIcon.setAttribute("trigger", "loop");
});
resumeBox.addEventListener("mouseout", function (e) {
  resumeIcon.removeAttribute("trigger");
});
function togglePanel() {
  panel.classList.toggle("open");
  navicon.classList.toggle("fa-spin");
  profileContent.classList.toggle("profileOpacity");
  mainContent.classList.toggle("mainOpacity");
  candleDiv.classList.toggle("candleDivDisplay");
}

function scrollFun() {
  if (window.scrollY > 100) {
    mainContent.classList.add("onScrollmain");
    leftContent.classList.add("onScrollprofile");
  } else {
    mainContent.classList.remove("onScrollmain");
    leftContent.classList.remove("onScrollprofile");
  }
}

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

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
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
  const maxScrollHeight = document.documentElement.scrollHeight;
  const updatetoTopbtn = () => {
    const currentScrollPos = document.documentElement.scrollTop;
    const scrollPercent =
      ((currentScrollPos + window.innerHeight) / maxScrollHeight) * 100;

    const circlePercentage = (scrollPercent / 100) * 360;
    toTopbtn.style.backgroundImage = `conic-gradient(#ccc 0deg ${circlePercentage}deg, transparent ${circlePercentage}deg 360deg)`;
    console.log(self.innerHeight);
    console.log(window.innerHeight);
  };
  window.addEventListener("scroll", updatetoTopbtn);
});
