let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

/* DOM classslist add,remove,toggle*/ 
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// dom methods get eleement by id,by class,by tag ,query selector,query selector all//
// query selector first value pe kaam krega or query selector all sab value pe kaam krega//
let section = document.querySelectorAll('selection');
let navlinks = document.querySelectorAll('header .navbar a');

// advance versionmai arroww function use krte 

/*
1st method

let hello=function(){
  console.log("hello");
}
hello();

2nd method
let hello =() =>console.log("hello");

*/ 
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
// foreach is a loop//
    section.forEach(sec =>{

      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      if(top => offset && top < offset + height){

        navlinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');


        });
      };
    });
}




document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');

}

/*
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});
*/


var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
 
  loop:true,

  breakpoints: {
    0: {
      slidePerView: 1,
    },

    640: {
      slidePerView: 2,
    },

    768: {
      slidePerView:2,
    },

    1024: {
      slidePerView: 3,
    },
  }
});


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload=fadeOut;