const nav_btn = document.querySelector(".nav-toggle");
const nav_box = document.querySelector(".main-nav");
const nav_links = document.querySelectorAll(".main-nav a");

let page_name = window.location.pathname.split("/").pop();
if (!page_name) {
    page_name = "index.html";
}

if (nav_btn && nav_box) {
    nav_btn.onclick = function () {
        nav_box.classList.toggle("show-nav");
    };
}

for (let i = 0; i < nav_links.length; i++) {
    const link = nav_links[i];

    if (link.getAttribute("href") === page_name) {
        link.classList.add("current-link");
    }

    link.onclick = function () {
        if (nav_box && window.innerWidth <= 900) {
            nav_box.classList.remove("show-nav");
        }
    };
}
