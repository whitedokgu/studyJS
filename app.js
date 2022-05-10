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

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
