/*
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
}*/


window.onscroll = () => {
    stickyNav()
}
let header = document.getElementById("header")
let sticky = header.offsetTop;

function stickyNav() {
    if (window.pageYOffset > sticky)
        header.classList.add("sticky")
    else
        header.classList.remove("sticky")
}

let menu_button = document.querySelector('#menu-button');
let nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('nav a');
let isMenuExpanded = false;

menu_button.addEventListener('click', function () {
    if (isMenuExpanded) {
        isMenuExpanded = false;
        menu_button.classList.remove('cross');
        nav.style.display = 'none';
        document.querySelector('body').style.overflow = 'unset';
        document.querySelector('header').classList.remove('burger-header');
    } else {
        isMenuExpanded = true;
        menu_button.classList.add('cross');
        nav.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('.header').classList.add('burger-header');
    }
})

function quitMobileMenu() {
    menu_button.classList.remove('cross');
    nav.style.display = 'none';
    isMenuExpanded = false;
    document.querySelector('body').style.overflow = 'unset';
    document.querySelector('header').classList.remove('burger-header');
}

if (window.innerWidth <= 768) {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function () {
            quitMobileMenu();

            const target = document.querySelector(navLinks[i].hash);
            const offset = target.offsetTop - 70;

            window.scrollBy({
                top: offset,
                behavior: "smooth"
            });
        })
    }
} else {
    let links = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(links[i].hash);
            const offset = target.offsetTop - 50;

            window.scrollBy({
                top: offset,
                behavior: "smooth"
            });
        });
    }
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].removeEventListener('click', function () {
            quitMobileMenu()
        })
    }
}
window.onresize = function (){
    if (window.innerWidth >= 768)
        nav.style.display = 'block';
    else nav.style.display = 'none'
}