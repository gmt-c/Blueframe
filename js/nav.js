const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

const hamburgerIcon = "../assets/images/hamburger.png";
const closeIcon = "../assets/images/cross burger.png";


// OPEN / CLOSE MOBILE MENU
navToggle.addEventListener("click", () => {

    const isOpen = mobileMenu.classList.contains("active");

    if (isOpen) {

        // CLOSE MENU
        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

        // Change X back to hamburger
        menuIcon.src = hamburgerIcon;
        menuIcon.alt = "Open menu";

        navToggle.setAttribute("aria-expanded", "false");

    } else {

        // OPEN MENU
        mobileMenu.classList.add("active");
        document.body.classList.add("menu-open");

        // Change hamburger to X
        menuIcon.src = closeIcon;
        menuIcon.alt = "Close menu";

        navToggle.setAttribute("aria-expanded", "true");

    }

});


// CLOSE MENU WHEN A LINK IS CLICKED
const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

        menuIcon.src = hamburgerIcon;
        menuIcon.alt = "Open menu";

        navToggle.setAttribute("aria-expanded", "false");

    });

});


// CLOSE MENU WHEN RESIZING TO DESKTOP
window.addEventListener("resize", () => {

    if (window.innerWidth > 1020) {

        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

        menuIcon.src = hamburgerIcon;
        menuIcon.alt = "Open menu";

        navToggle.setAttribute("aria-expanded", "false");

    }

});