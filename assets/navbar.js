window.onscroll = () => {
    StickyNav();
}
let header = document.querySelector(".header");
let sticky = header.offsetTop;
let burgerMenu = document.querySelector(".menu-button")
let mobileLink = document.querySelector(".mobile_nav_links")

let isMenuExpanded = false

burgerMenu.addEventListener("click", () => {
    if (isMenuExpanded) {
        isMenuExpanded = false;
        burgerMenu.classList.remove('cross');
        mobileLink.style.display = 'none';
        document.querySelector('body').style.overflow = 'unset';
        document.querySelector('header').classList.remove('burger-header');
    } else {
        isMenuExpanded = true;
        burgerMenu.classList.add('cross');
        mobileLink.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('.header').classList.add('burger-header');
    }
})

function StickyNav() {
    if (window.pageYOffset > sticky)
        header.classList.add("sticky")
    else
        header.classList.remove("sticky")
}

let logo = document.querySelector(".logo");
logo.onclick = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
}