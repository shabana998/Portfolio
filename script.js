
// Multiple text functionality
document.addEventListener("DOMContentLoaded", function() {
    new Typed(".multiple-text", {
        strings: ["Front-end Developer", "Student", "Coding Enthusiast"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 800,
        loop: true
    });
});

// SCROLL SECTIONS ACTIVE LINK
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
            })
        }
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("show"); // Fixed class name to match CSS
        console.log("cl");
    });
});



