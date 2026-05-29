/* =========================================
   ১. INITIALIZATION & SAFETY WRAPPER
========================================= */
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE MENU TOGGLE
    ========================================= */
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", () => {
            navbar.classList.toggle("active");

            // CHANGE ICON
            menuBtn.innerHTML = navbar.classList.contains("active")
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        /* =========================================
           CLOSE MENU ON NAV LINK CLICK
        ========================================= */
        document.querySelectorAll(".navbar a").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");
                menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    /* =========================================
       TYPED JS HERO ANIMATION
    ========================================= */
    if (document.querySelector(".typing")) {
        new Typed(".typing", {
            strings: [
                "Electrical Engineer",
                "Software Developer",
                "Automation Learner"
            ],
            typeSpeed: 70,
            backSpeed: 45,
            backDelay: 1500,
            loop: true
        });
    }

    /* =========================================
       AOS INITIALIZATION
    ========================================= */
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            offset: 120,
            easing: "ease",
            once: false,
            mirror: true
        });
    }

    /* =========================================
       SMOOTH SCROLLING
    ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* =========================================
       ACTIVE NAVIGATION LINK ON SCROLL
    ========================================= */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (current && link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    /* =========================================
       HEADER SHADOW ON SCROLL
    ========================================= */
    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.4)";
                header.style.background = "rgba(5,8,22,0.92)";
            } else {
                header.style.boxShadow = "none";
                header.style.background = "rgba(5,8,22,0.75)";
            }
        });
    }

    /* =========================================
       PARTICLES JS CONFIG
    ========================================= */
    if (document.getElementById("particles-js") && typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 70,
                    density: { enable: true, value_area: 800 }
                },
                color: {
                    value: ["#00f7ff", "#9d4edd"]
                },
                shape: { type: "circle" },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00f7ff",
                    opacity: 0.25,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    repulse: { distance: 120, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    /* =========================================
       OPTIONAL SCROLL TO TOP BUTTON
    ========================================= */
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    scrollBtn.classList.add("scroll-top-btn");
    document.body.appendChild(scrollBtn);

    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "25px";
    scrollBtn.style.right = "25px";
    scrollBtn.style.width = "50px";
    scrollBtn.style.height = "50px";
    scrollBtn.style.borderRadius = "50%";
    scrollBtn.style.border = "none";
    scrollBtn.style.cursor = "pointer";
    scrollBtn.style.background = "linear-gradient(45deg,#00f7ff,#9d4edd)";
    scrollBtn.style.color = "#fff";
    scrollBtn.style.fontSize = "18px";
    scrollBtn.style.display = "none";
    scrollBtn.style.zIndex = "999";
    scrollBtn.style.boxShadow = "0 0 15px rgba(0,247,255,0.5)";
    scrollBtn.style.transition = "0.4s ease";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("mouseenter", () => {
        scrollBtn.style.transform = "translateY(-5px) scale(1.05)";
    });

    scrollBtn.addEventListener("mouseleave", () => {
        scrollBtn.style.transform = "translateY(0px)";
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});

/* =========================================
   FADE-IN EFFECT ON PAGE LOAD
========================================= */
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

/* =========================================
   CONSOLE MESSAGE
========================================= */
console.log(
    "%cWelcome to Mahfuj Monir Portfolio",
    "color:#00f7ff; font-size:18px; font-weight:bold;"
);
console.log(
    "%cDesigned with creativity & modern frontend UI.",
    "color:#9d4edd; font-size:14px;"
);
