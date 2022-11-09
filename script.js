const app = () => {
    const hamburger = document.getElementById("ham-button");
    const mobileMenu = document.getElementById("menu-nav");
    // const overlay = document.getElementById("navoverlay");

    const toggle = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        // mobileMenu.classList.toggle('overlay')
    }

    hamburger.addEventListener("click", toggle)
    mobileMenu.addEventListener("click", toggle)
    // overlay.addEventListener("click", toggle)
}

document.addEventListener("DOMContentLoaded", app);
