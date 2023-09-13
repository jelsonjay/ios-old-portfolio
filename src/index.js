import "./styles.scss";
import profile from "./data/profile";
//import projects from "./data/project";

// ===============SLIDER==============
var slides = document.querySelector(".slider-items").children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {
  next("next");
};
prevSlide.onclick = function () {
  next("prev");
};

function next(direction) {
  if (direction === "next") {
    index++;
    if (index === totalSlides) {
      index = 0;
    }
  } else {
    if (index === 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

//============================MODAL==========================
const addImag = [...document.querySelectorAll(".small-img")];
const btnClose = document.querySelector("#btn-close");
const modal = document.querySelector("#modal");

addImag.map((item) => {
  return item.addEventListener("click", screenModal);

  function screenModal(img) {
    const modal = document.querySelector("#modal");
    const imgModal = document.querySelector("#imgModal");

    modal.classList.remove("hide-modal");
    modal.classList.add("show-modal");

    imgModal.src = img.src;
    imgModal.alt = img.alt;

    console.log("clilicou");
  }
});

btnClose.addEventListener("click", () => {
  modal.classList.add("hide-modal");
  modal.classList.remove("show-modal");
});

// ==============GET DATA==============
window.addEventListener("DOMContentLoaded", () => {
  // renderPortfolio();

  renderProfile();
});
const profileUser = document.querySelector("#home");

//const allProjects = document.querySelector("#portfolio");

// -------Render Profile--------------
function renderProfile() {
  profile.forEach((items) => {
    const { projectName, userImg, projectDesc, jobTitle, paragraph } = items;
    profileUser.innerHTML += `
  
    <div class="wrapper">
    <img src="${userImg}" alt="Avatar" class="avatar-img" />
    <h1 class="home-title">
      ${projectName}
    </h1>
    <h2>
    ${jobTitle}
    </h2>
    <p>
    ${projectDesc}
    </p>
  
    <p>${paragraph}</p>
    <a href="#projects"><div class="scroll-down"></div></a>
    </div>
  `;
  });
}

// -------Render Profile--------------

window.onload = renderProfile();
//renderPortfolio();

// ==============SCROLL UP==============
const scrollUp = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
});

//=================DARK MODE================
// dark toggle
const darkToggle = document.querySelector("#dark-mode-toggle");
// dark mode changes
function changeTheme() {
  document.body.classList.toggle("dark");
}
// dark mode & light mode
function loadMode() {
  const darkMode = localStorage.getItem("dark");
  if (darkMode) {
    changeTheme();
  }
}

loadMode();

darkToggle.addEventListener("change", function () {
  changeTheme();
  // save on localstorage
  localStorage.removeItem("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
