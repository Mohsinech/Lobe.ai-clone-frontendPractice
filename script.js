'use strict';

const overlay = document.getElementById("overlay");
const image = document.getElementById("image_overlay");
const closeBtn = document.getElementById("close");
const videoIframe = document.getElementById("videoIframe");

image.addEventListener("click", () => {
    overlay.style.visibility = "visible";
    overlay.classList.toggle('active');
    videoIframe.src = "https://www.youtube.com/embed/Mdcw3Sb98DA?si=LMFeDSyNQyC67-3S"; // Replace 'your_video_id' with the actual video ID
});

closeBtn.addEventListener("click", () => {
    overlay.style.visibility = "hidden";
    overlay.classList.remove('active');
    videoIframe.src = ""; // Stop the video by removing the src
});



// 

const toggle = document.getElementById('toggleBtn');
const first = toggle.querySelector('.toggle_nav:nth-child(1)');
const middle = toggle.querySelector('.toggle_nav:nth-child(2)');
const last = toggle.querySelector('.toggle_nav:nth-child(3)');
const mobileNavbar = document.querySelector(".mobile_navbar");

function toggleNavbar() {
    toggle.classList.toggle('toggle_open');
    mobileNavbar.classList.toggle('show');
}

toggle.addEventListener("click", toggleNavbar);


/**
 * Author rights
 */

document.addEventListener("DOMContentLoaded", authorRight);

function authorRight() {
  const user = document.querySelector(".user");
  const popupInfo = document.querySelector(".popup_info");
  const exitGreting = document.getElementById("exit");

  let Hellouser = prompt("Hello, let's meet, What's your name?");
  alert(`Nice to meet you ${Hellouser}, my name is mohsine`);
  user.textContent = Hellouser;
  popupInfo.style.opacity = "1";

  exitGreting.addEventListener("click", () => {
    popupInfo.style.display = "none";
  });
}
