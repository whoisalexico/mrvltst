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
        navLinks[i].addEventListener('click', () => {
            quitMobileMenu();

            const target = document.querySelector(navLinks[i].hash);
            const offset = target.offsetTop - 70;

            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        });
    }
} else {
    let links = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (e) => {
            e.preventDefault();

            const target = document.querySelector(links[i].hash);
            const offset = target.offsetTop - 50;

            window.scrollTo({
                top: offset,
                behavior: 'smooth',
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
    if (window.innerWidth > 768){
        nav.style.display = 'block';
    }
    else {
        nav.style.display = 'none'
    }
}

const header_hero = document.querySelector('#header-hero'),
    header_mission = document.querySelector('#header-mission'),
    header_services = document.querySelector('#header-services'),
    header_team = document.querySelector('#header-team'),
    header_news = document.querySelector('#header-news'),
    header_footer = document.querySelector('#header-footer'),
    header_links = document.querySelectorAll('nav li a');


const line_hero = document.querySelector('#first'),
    line_mission = document.querySelector('#second'),
    line_services = document.querySelector('#third'),
    line_team = document.querySelector('#fourth'),
    line_news = document.querySelector('#fifth'),
    line_footer = document.querySelector('#sixth'),
    lines = document.querySelectorAll('#navigation_lines .nav-line');

let section_mission = document.querySelector('#mission');
let section_services = document.querySelector('#services');
let section_team = document.querySelector('#team');
let section_news = document.querySelector('#news');
let section_footer = document.querySelector('#footer');

let mission_top = section_mission.offsetTop - 300;
let services_top = section_services.offsetTop - 100;
let team_top = section_team.offsetTop - 100;
let news_top = section_news.offsetTop - 100;
let footer_top = section_footer.offsetTop + 200;

document.onscroll = function () {
    let pos = window.scrollY;
    pos += 50;
    setActiveLinks(pos)
    setActiveColor(pos);
    console.log(pos)
}

function setActiveLinks(pos) {
    if (pos) {
        if (pos <= mission_top) {
            removeActive();
            header_hero.classList.add('active');
            line_hero.classList.add('active');
        } else if ((pos > mission_top) && pos <= services_top) {
            removeActive();
            header_mission.classList.add('active');
            line_mission.classList.add('active')
        } else if ((pos > services_top) && (pos <= team_top)) {
            removeActive();
            header_services.classList.add('active');
            line_services.classList.add('active');
        } else if ((pos > team_top) && (pos <= news_top)) {
            removeActive();
            header_team.classList.add('active');
            line_team.classList.add('active');
        } else if ((pos > news_top) && (pos <= footer_top)) {
            removeActive();
            header_news.classList.add('active');
            line_news.classList.add('active');
        } else if ((pos > footer_top - 600)) {
            removeActive();
            header_footer.classList.add('active');
            line_footer.classList.add('active');
        }
    }
}

function setActiveColor(pos) {
    if (pos) {
        if (pos <= mission_top - 270) {
            removeWhite();
            for (let i = 0; i < lines.length; i++) {
                lines[i].classList.add('white');
            }
        } else if ((pos > mission_top - 270) && (pos <= services_top - 270)) {
            removeWhite();
        } else if ((pos > services_top - 270) && (pos <= footer_top - 450)) {
            removeWhite();
        } else if ((pos > footer_top - 450)) {
            console.log(pos, footer_top - 50)
            removeWhite();
            for (let i = 0; i < lines.length; i++) {
                lines[i].classList.add('white')
            }
        }
    }
}

function removeActive() {
    for (let i = 0; i < header_links.length; i++) {
        header_links[i].classList.remove('active');
    }
    for (let i = 0; i < lines.length; i++) {
        lines[i].classList.remove('active');
    }
}
function removeWhite() {
    for (let i = 0; i < lines.length; i++) {
        lines[i].classList.remove('white');
    }
}

