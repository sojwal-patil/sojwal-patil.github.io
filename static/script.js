const hamburger = document.querySelector('.menu-hamburger');

const links_menu_bar = document.querySelector('.links-menu-bar');

let hamburger_active = false;

hamburger.addEventListener('click', () => {
    if (hamburger_active) {
        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        links_menu_bar.style.left = "-100%"; 
        document.body.style.overflow = "auto"
    } else {
        hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        links_menu_bar.style.left = 0; 
        document.body.style.overflow = "hidden"
    }

    hamburger_active = !hamburger_active;
});