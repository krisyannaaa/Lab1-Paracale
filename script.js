const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + this.textContent);
    });
});

const welcomeHeading = document.querySelector("#home h2");

welcomeHeading.addEventListener("click", function () {
    alert("Welcome to my portfolio!");
});