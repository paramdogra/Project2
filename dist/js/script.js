const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};


mobile_nav.addEventListener("click", () => toggleNavbar());



//Change bg on scroll

function changeBg(){
    let scrollValue = window.scrollY;
    let navbarColor = document.getElementById('navbar');
    if(scrollValue<100){
        navbarColor.classList.remove('navbar-color');
    }
    else{
        navbarColor.classList.add('navbar-color');
    }
}
window.addEventListener('scroll', changeBg);


//Change height on scroll

function changeHeader(){
    let navbarHeight = document.getElementById('navbar');
    if(document.documentElement.scrollTop<110){
        navbarHeight.classList.remove('shrink');
    }
    else{
        navbarHeight.classList.add('shrink');
    }
}
window.addEventListener('scroll', changeHeader);




