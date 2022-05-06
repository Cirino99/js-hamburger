/*
    Attivare hamburger-menu con il click usando addEventListener
*/

const mymenu = document.querySelector('.header-right>a');
const myHamburgerMenu = document.querySelector('.hamburger-menu');
const myEndHamburgerMenu = document.querySelector('.close');
mymenu.addEventListener('click',
    function(){
        myHamburgerMenu.classList.add('active');
    } 
);
myEndHamburgerMenu.addEventListener('click',
    function(){
        myHamburgerMenu.classList.remove('active');
    } 
);