const right = document.querySelector('[data-slider="right"]');
const left = document.querySelector('[data-slider="left"]');
const bgImg = document.querySelector('.header');
const img = [];
img[0] = 'images/mobile-image-hero-3.jpg';
img[1] = 'images/mobile-image-hero-1.jpg';
img[2] = 'images/mobile-image-hero-2.jpg';
img[3] = 'images/mobile-image-hero-3.jpg';
img[4] = 'images/mobile-image-hero-1.jpg';
let counter = 1;

right.addEventListener('click', ()=>{
    counter++;
    bgImg.style.cssText = `background-image: url('${img[counter]}');`;
    if (counter == 4) counter = 1;
})

left.addEventListener('click', ()=>{
    counter--;
    bgImg.style.cssText = `background-image: url('${img[counter]}');`;
    if (counter == 0) counter = 3;
})

function nav(){
    const hamburger = document.querySelector('.header__hamburger');
    const nav = document.querySelector('.nav-links');
    const close = document.querySelector('.close')
    hamburger.addEventListener('click', ()=>{
        nav.classList.add('nav-links-active');
    })

    close.addEventListener('click', ()=>{
        nav.classList.remove('nav-links-active');
    })
}

nav();