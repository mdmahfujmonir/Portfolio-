/* =========================================
   INITIALIZATION & SAFETY WRAPPER
========================================= */
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       LOADING SCREEN HANDLER
    ========================================= */
    const loadingScreen = document.getElementById("loading-screen");
    
    window.addEventListener("load", () => {
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add("hidden");
            }, 500);
        }
    });

    /* =========================================
       THEME TOGGLE FUNCTIONALITY
    ========================================= */
    const themeToggle = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    
    // Get saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem("theme") || "dark-mode";
    document.body.classList.add(savedTheme);
    updateThemeIcon();
    
    function updateThemeIcon() {
        const isDarkMode = document.body.classList.contains("dark-mode");
        const icon = themeToggle.querySelector("i");
        if (isDarkMode) {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        } else {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            document.body.classList.toggle("light-mode");
            
            const isDarkMode = document.body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDarkMode ? "dark-mode" : "light-mode");
            updateThemeIcon();
        });
    }

    /* =========================================
       MOBILE MENU TOGGLE
    ========================================= */
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", () => {
            navbar.classList.toggle("active");
            menuBtn.setAttribute("aria-expanded", navbar.classList.contains("active"));
        });

        // Close menu on nav link click
        document.querySelectorAll(".navbar a").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", "false");
            });
        });
    }

    /* =========================================
       TYPED JS HERO ANIMATION
    ========================================= */
    if (document.querySelector(".typing") && typeof Typed !== "undefined") {
        new Typed(".typing", {
            strings: [
                "Electrical Engineer",
                "PLC Programmer",
                "Automation Specialist",
                "Web Developer",
                "Problem Solver"
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
            loopCount: Infinity
        });
    }

    /* =========================================
       AOS INITIALIZATION
    ========================================= */
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            offset: 120,
            easing: "ease-in-out-cubic",
            once: false,
            mirror: true,
            disable: window.innerWidth < 768 ? "mobile" : false
        });
    }

    /* =========================================
       SMOOTH SCROLLING & ACTIVE NAV
    ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href === "#") return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function updateActiveNav() {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (current && link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);

    /* =========================================
       HEADER SHADOW ON SCROLL
    ========================================= */
    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.4)";
                header.style.background = document.body.classList.contains("dark-mode") 
                    ? "rgba(5,8,22,0.92)" 
                    : "rgba(248,249,250,0.98)";
            } else {
                header.style.boxShadow = "none";
                header.style.background = document.body.classList.contains("dark-mode")
                    ? "rgba(5,8,22,0.75)"
                    : "rgba(248,249,250,0.95)";
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
       SCROLL TO TOP BUTTON
    ========================================= */
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    scrollBtn.classList.add("scroll-top-btn");
    scrollBtn.setAttribute("aria-label", "Scroll to top");
    document.body.appendChild(scrollBtn);

    Object.assign(scrollBtn.style, {
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        background: "linear-gradient(45deg,#00f7ff,#9d4edd)",
        color: "#fff",
        fontSize: "18px",
        display: "none",
        zIndex: "999",
        boxShadow: "0 0 15px rgba(0,247,255,0.5)",
        transition: "all 0.4s ease"
    });

    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
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

    /* =========================================
       CONTACT FORM HANDLING WITH EmailJS
    ========================================= */
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        // Initialize EmailJS
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
        
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            // Clear previous messages
            const formMessage = document.getElementById("form-message");
            formMessage.textContent = "";
            formMessage.className = "form-message";
            
            // Validate form
            if (!validateForm()) {
                return;
            }
            
            // Get form data
            const formData = {
                name: document.getElementById("name").value.trim(),
                email: document.getElementById("email").value.trim(),
                subject: document.getElementById("subject").value.trim(),
                message: document.getElementById("message").value.trim()
            };
            
            // Update button state
            const submitBtn = contactForm.querySelector("button[type='submit']");
            const btnText = submitBtn.querySelector(".btn-text");
            const btnLoader = submitBtn.querySelector(".btn-loader");
            
            submitBtn.disabled = true;
            btnText.style.display = "none";
            btnLoader.style.display = "inline-block";
            
            try {
                // Send email using EmailJS
                const response = await emailjs.send(
                    "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
                    "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
                    {
                        to_email: "mdmahfujmonir@gmail.com",
                        from_name: formData.name,
                        from_email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        reply_to: formData.email
                    }
                );
                
                // Success message
                formMessage.textContent = "✅ Message sent successfully! I'll get back to you soon.";
                formMessage.classList.add("success");
                
                // Reset form
                contactForm.reset();
                
                // Clear form groups error states
                document.querySelectorAll(".form-group").forEach(group => {
                    group.classList.remove("error");
                });
                
            } catch (error) {
                console.error("EmailJS Error:", error);
                formMessage.textContent = "❌ Failed to send message. Please try again or contact directly via email.";
                formMessage.classList.add("error");
            } finally {
                // Restore button state
                submitBtn.disabled = false;
                btnText.style.display = "inline";
                btnLoader.style.display = "none";
            }
        });
    }

    /* =========================================
       FORM VALIDATION
    ========================================= */
    function validateForm() {
        const form = document.getElementById("contact-form");
        let isValid = true;
        
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");
        
        // Clear all previous errors
        document.querySelectorAll(".form-group").forEach(group => {
            group.classList.remove("error");
            const errorMsg = group.querySelector(".error-message");
            if (errorMsg) errorMsg.textContent = "";
        });
        
        // Validate Name
        if (name.value.trim() === "") {
            showFieldError(name, "Full name is required");
            isValid = false;
        } else if (name.value.trim().length < 3) {
            showFieldError(name, "Name must be at least 3 characters");
            isValid = false;
        }
        
        // Validate Email
        if (email.value.trim() === "") {
            showFieldError(email, "Email is required");
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showFieldError(email, "Please enter a valid email");
            isValid = false;
        }
        
        // Validate Subject
        if (subject.value.trim() === "") {
            showFieldError(subject, "Subject is required");
            isValid = false;
        } else if (subject.value.trim().length < 5) {
            showFieldError(subject, "Subject must be at least 5 characters");
            isValid = false;
        }
        
        // Validate Message
        if (message.value.trim() === "") {
            showFieldError(message, "Message is required");
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showFieldError(message, "Message must be at least 10 characters");
            isValid = false;
        }
        
        return isValid;
    }

    function showFieldError(field, message) {
        const formGroup = field.closest(".form-group");
        if (formGroup) {
            formGroup.classList.add("error");
            const errorMsg = formGroup.querySelector(".error-message");
            if (errorMsg) {
                errorMsg.textContent = message;
            }
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Real-time validation on input
    const formInputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
    formInputs.forEach(input => {
        input.addEventListener("blur", () => {
            const formGroup = input.closest(".form-group");
            if (formGroup.classList.contains("error")) {
                // Re-validate single field on blur
                if (input.value.trim() !== "") {
                    formGroup.classList.remove("error");
                    const errorMsg = formGroup.querySelector(".error-message");
                    if (errorMsg) errorMsg.textContent = "";
                }
            }
        });
    });

    /* =========================================
       FOOTER YEAR UPDATE
    ========================================= */
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    /* =========================================
       CONSOLE WELCOME MESSAGE
    ========================================= */
    console.log(
        "%cWelcome to MD. Mahfuj Monir's Portfolio",
        "color:#00f7ff; font-size:18px; font-weight:bold; text-shadow: 0 0 10px #00f7ff;"
    );
    console.log(
        "%cElectrical Engineer | PLC Specialist | Web Developer",
        "color:#9d4edd; font-size:14px; font-weight:bold;"
    );
    console.log(
        "%c📧 Contact: mdmahfujmonir@gmail.com",
        "color:#00f7ff; font-size:12px;"
    );

});

/* =========================================
   PAGE VISIBILITY HANDLING
========================================= */
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        console.log("📢 See you soon!");
    } else {
        console.log("🙋 Welcome back!");
    }
});

/* =========================================
   PERFORMANCE MONITORING (Optional)
========================================= */
if (window.performance && window.performance.timing) {
    window.addEventListener("load", () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log("%c⚡ Page loaded in " + pageLoadTime + "ms", "color:#00d084; font-size:12px;");
    });
}

/* =========================================
   KEYBOARD SHORTCUTS
========================================= */
document.addEventListener("keydown", (e) => {
    // Ctrl/Cmd + K for theme toggle
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const themeToggle = document.getElementById("theme-toggle");
        if (themeToggle) themeToggle.click();
    }
    
    // Ctrl/Cmd + / for focus on email
    if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        const emailLink = document.querySelector('a[href^="mailto:"]');
        if (emailLink) emailLink.click();
    }
});

/* =========================================
   INTERSECTION OBSERVER FOR ANIMATIONS
========================================= */
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll("section").forEach(section => {
        section.style.opacity = "0";
        section.style.transition = "opacity 0.6s ease-in-out";
        observer.observe(section);
    });
}
