const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  console.log("title was clicked!");
  title.innerText = "Title was clicked!";
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
  title.style.color = "red";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
  title.style.color = "green";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOOOOOOOOOOD");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
