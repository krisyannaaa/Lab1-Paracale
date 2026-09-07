document.addEventListener("DOMContentLoaded", () => {

    // Keep the footer year current
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Highlight the nav link for the section currently in view
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const setActiveLink = (id) => {
        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
    };

    if ("IntersectionObserver" in window && sections.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
    }

    // Copy email to clipboard, with simple inline feedback
    const copyBtn = document.getElementById("copyEmailBtn");
    const copyFeedback = document.getElementById("copyFeedback");
    const email = "kristy@email.com";

    if (copyBtn && copyFeedback) {
        copyBtn.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(email);
                copyFeedback.textContent = "Copied! " + email;
            } catch (err) {
                copyFeedback.textContent = email + " — copy it manually";
            }

            clearTimeout(copyBtn._feedbackTimer);
            copyBtn._feedbackTimer = setTimeout(() => {
                copyFeedback.textContent = "";
            }, 3000);
        });
    }
});