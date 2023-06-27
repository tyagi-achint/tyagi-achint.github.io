let panel = document.querySelector(".panel");
let navicon = document.querySelector(".fa-gear");
let mainContent = document.querySelector("#mainContent");
let candleDiv = document.querySelector("#candleDiv");
let leftContent = document.querySelector("#leftContent");
let profileContent = document.querySelector(".profileContent");
let cursor = document.querySelector(".cursor");

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
window.addEventListener("scroll", scrollFun);

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
