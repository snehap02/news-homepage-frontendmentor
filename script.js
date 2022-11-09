const app = () => {
    const hamburger = document.getElementById("ham-button");
    const mobileMenu = document.getElementById("menu-nav");

    const toggle = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    hamburger.addEventListener("click", toggle)
    mobileMenu.addEventListener("click", toggle)
}

document.addEventListener("DOMContentLoaded", app);