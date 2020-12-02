(function () {
    /*fixed header*/ 
    const header = document.querySelector('.header'),
         intro =document.querySelector('.intro'),
         introHeight = intro.clientHeight;
         let  windowScroll = window.pageYOffset;
      checkScroll(windowScroll)

          window.onscroll = () => { 
          let windowScroll = pageYOffset;
             checkScroll(windowScroll)
          };
        function checkScroll(windowScroll) {
             if (windowScroll >= introHeight )   {
            header.classList.add('fixed');
            
        } else {
            header.classList.remove('fixed')
        };
    };
    /*smooth scroll*/ 

    const links = document.querySelectorAll('[data-scroll]')

    links.forEach((item) => {
     item.onclick = function(event){
         event.preventDefault()
         links.forEach((item) => {
             item.classList.remove('active')
         })
         item.classList.add('active')

         let idItem = item.dataset.scroll
         necesseryBlock = document.querySelector(idItem)
         necesseryBlock.scrollIntoView({
             behavior: 'smooth'
            
         })
     }
    })
/* nav toggle*/ 
const navTogle = document.querySelector('.nav-toggle')
nav = document.querySelector('.nav')
navTogle.onclick = function (){
    nav.classList.toggle('active')
    navTogle.classList.toggle('active')
    header.classList.toggle('active')
}
/*collapse*/ 
const accordeonItems = document.querySelectorAll("[data-collapse]")
accordeonItems.forEach((item) => {
item.onclick = function(event) {
    event.preventDefault()
 item.classList.toggle('active')
}
})



}());

/*slider*/ 
let slideIndex = 1 
showSlides(slideIndex);

function minusSlide () {
    showSlides(slideIndex -= 1)
}
function plusSlide () {
    showSlides(slideIndex += 1)
}  
 function showSlides (n) {
   const slides = document.querySelectorAll ('.reviews__slider_1 .reviews__item')
    let  i;

    if (n < 1 ) {
        slideIndex = slides.length
    }
    if (n > slides.length) {
        slideIndex = 1
    }
    for( elements of slides) {
        elements.style.display ='none'
    }
    slides[slideIndex - 1].style.display = 'block'
}  
/*slider_2*/ 
let slideInd = 1 
showSlide(slideInd);

function minusSlid () {
    showSlide(slideInd -= 1)
}
function plusSlid () {
    showSlide(slideInd += 1)
}  
 function showSlide (n) {
   const slides = document.querySelectorAll ('.reviews__slider_2 .reviews__item')
    let  i;

    if (n < 1 ) {
        slideInd = slides.length
    }
    if (n > slides.length) {
        slideInd = 1
    }
    for( elements of slides) {
        elements.style.display ='none'
    }
    slides[slideInd - 1].style.display = 'block'
}  


