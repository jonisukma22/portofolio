/*==================================================
            PORTFOLIO SCRIPT
==================================================*/

/*==============================
        TYPING EFFECT
==============================*/

const words = [
    "Web Developer",
    "Laravel Developer",
    "Frontend Developer",
    "PHP Programmer",
    "IoT Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();



/*==============================
        SCROLL PROGRESS
==============================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    let scroll = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width = (scroll / height) * 100 + "%";

});



/*==============================
        BACK TO TOP
==============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};



/*==============================
        NAVBAR BLUR
==============================*/

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(7,17,31,.75)";

        navbar.style.backdropFilter = "blur(18px)";

        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        navbar.style.background = "transparent";

        navbar.style.backdropFilter = "none";

        navbar.style.boxShadow = "none";

    }

});



/*==============================
        LOADER
==============================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader").classList.add("hidden");

    }, 1000);

});



/*==============================
        SCROLL REVEAL
==============================*/

const revealElements = document.querySelectorAll(

    ".section,.project-card,.skill-card,.contact-card,.education-card,.timeline-item,.stat-box"

);

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const visible = window.innerHeight - 120;

        if (top < visible) {

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();



/*==============================
        ACTIVE MENU
==============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/*==============================
        MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuBtn.classList.toggle("open");

});



/*==============================
        CLOSE MENU
==============================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.classList.remove("open");

    });

});



/*==============================
        PARALLAX HERO IMAGE
==============================*/

window.addEventListener("mousemove", (e) => {

    const image = document.querySelector(".image-box");

    const x = (window.innerWidth / 2 - e.pageX) / 40;

    const y = (window.innerHeight / 2 - e.pageY) / 40;

    image.style.transform = `translate(${x}px,${y}px)`;

});



/*==============================
        PROJECT HOVER
==============================*/

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
        rgba(59,130,246,.18),
        #0f172a 70%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#0f172a";

    });

});