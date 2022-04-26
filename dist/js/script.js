//navbar fix
window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
    } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
    }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});
// klick diluar hamburger

window.addEventListener("click", function(e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
    }
});

// dark mode toggle

const darkToggle = document.querySelector("#dark-toggle");
const lightFoto = document.querySelector(".light-foto");
const darkFoto = document.querySelector(".dark-foto");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function() {
    if (darkToggle.checked) {
        html.classList.add("dark");
        lightFoto.classList.add("hidden");
        darkFoto.classList.remove("hidden");
        localStorage.theme = "dark";
    } else {
        html.classList.remove("dark");
        lightFoto.classList.remove("hidden");
        darkFoto.classList.add("hidden");
        localStorage.theme = "light";
    }
});

// pindahkan posisi toggle sesuai mode

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

// from

const scriptURL = "https://script.google.com/macros/s/AKfycbwZtD6ML6LrnycXkXllA7o3B1UsZUbtU7cMLQzXZdurxY24Wll7v8Ps41XH4R5WfUXs/exec";

const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
});