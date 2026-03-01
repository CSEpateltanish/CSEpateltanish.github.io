const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const currentFile = window.location.pathname.split("/").pop() || "index.html";

if (navToggle && mainNav) {
    navToggle.onclick = function () {
        if (mainNav.classList.contains("show-nav")) {
            mainNav.classList.remove("show-nav");
        } else {
            mainNav.classList.add("show-nav");
        }
    };
}

for (let i = 0; i < navLinks.length; i++) {
    const link = navLinks[i];

    if (link.getAttribute("href") === currentFile) {
        link.classList.add("current-link");
    }

    link.onclick = function () {
        if (mainNav && window.innerWidth <= 900) {
            mainNav.classList.remove("show-nav");
        }
    };
}
