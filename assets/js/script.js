const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const html = document.querySelector("html");
const body = document.querySelector("body");
const loading = document.getElementById("loading-container");
// Loading //

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  html.classList.toggle("scroll-lock");
  body.classList.toggle("scroll-lock");
  setTimeout(() => {
    loading.style.display = "none";
    html.classList.toggle("scroll-lock");
    body.classList.toggle("scroll-lock");
  }, 3000);
});
// Loading END //

// mobile menu //

//toggler
const toggleNav = () => {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-slide");
  if (overlay.classList.contains("overlay-slide")) {
    overlay.classList.add("overlay-slide-right");
    overlay.classList.remove("overlay-slide-left");
    nav1.classList.remove("slide-out-1");
    nav2.classList.remove("slide-out-2");
    nav3.classList.remove("slide-out-3");
    nav4.classList.remove("slide-out-4");
    nav5.classList.remove("slide-out-5");
    nav1.classList.add("slide-in-1");
    nav2.classList.add("slide-in-2");
    nav3.classList.add("slide-in-3");
    nav4.classList.add("slide-in-4");
    nav5.classList.add("slide-in-5");
  } else {
    overlay.classList.remove("overlay-slide-right");
    overlay.classList.add("overlay-slide-left");
    nav1.classList.remove("slide-in-1");
    nav2.classList.remove("slide-in-2");
    nav3.classList.remove("slide-in-3");
    nav4.classList.remove("slide-in-4");
    nav5.classList.remove("slide-in-5");
    nav1.classList.add("slide-out-1");
    nav2.classList.add("slide-out-2");
    nav3.classList.add("slide-out-3");
    nav4.classList.add("slide-out-4");
    nav5.classList.add("slide-out-5");
  }
};

//Event listeners
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);
// mobile nav end//

// Theme Changer
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");

const darkMode = () => {
  toggleIcon.children[0].classList.remove("fa-sun");
  toggleIcon.children[0].classList.add("fa-moon");
};

const lightMode = () => {
  toggleIcon.children[0].classList.remove("fa-moon");
  toggleIcon.children[0].classList.add("fa-sun");
};

const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
};

toggleSwitch.addEventListener("change", switchTheme);
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    darkMode();
    toggleSwitch.checked = true;
  }
}
