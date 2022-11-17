let dropdowns = document.querySelectorAll('.nav-item .dropdown');
let toggle = document.querySelector('header nav .toggle-icon');
let fullScreen = document.querySelector('.wrapper-drawer');
let drawer = document.querySelector('.drawer');
let colseDrawer = document.querySelector('.icon-close-menu');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click',function () {
        this.childNodes[3].classList.toggle('active');
        if(this.childNodes[1].alt === 'icon-arrow-down'){
            this.childNodes[1].src = './images/icon-arrow-up.svg';
            this.childNodes[1].alt = 'icon-arrow-up';
        }
        else{
            this.childNodes[1].src = './images/icon-arrow-down.svg';
            this.childNodes[1].alt = 'icon-arrow-down';
        }
    });
});

toggle.addEventListener('click', function(){
    fullScreen.style.visibility='visible';
    fullScreen.style.opacity='1';
    drawer.style.transform = 'translateX(0)';
});

colseDrawer.addEventListener('click',function(){
    fullScreen.style.visibility='hidden';
    fullScreen.style.opacity='0';
    drawer.style.transform = 'translateX(500px)';
});