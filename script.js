window.onload = function() {

        // Initialize Sticky Reveal Navbar Menu
        const burgerMenu = document.getElementById("burger");
        const navbarMenu = document.getElementById("menu");

        burgerMenu.addEventListener("click", () => {
            burgerMenu.classList.toggle("active");
            navbarMenu.classList.toggle("active");

            if (navbarMenu.classList.contains("active")) {
                navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
            } else {
                navbarMenu.removeAttribute("style");
            }

        });

        // Initialize Sticky Reveal Nav bar Menu
        let latestScroll = 0;
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                document.body.classList.remove("scroll-up");
                return;
            }

            // Set the currentScroll Condition
            if (
                currentScroll > latestScroll &&
                !document.body.classList.contains("scroll-down")
            ) {
                document.body.classList.remove("scroll-up");
                document.body.classList.add("scroll-down");
            } else if (
                currentScroll < latestScroll &&
                document.body.classList.contains("scroll-down")
            ) {
                document.body.classList.remove("scroll-down");
                document.body.classList.add("scroll-up");
            }

            latestScroll = currentScroll;
        });

    }
    // Initialize Responsive Navbar Menu
const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navbarMenu.classList.toggle("active");

    if (navbarMenu.classList.contains("active")) {
        navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
    } else {
        navbarMenu.removeAttribute("style");
    }

});

//event

//event