const loader = document.querySelector(".loader-wrapper");
const main = document.querySelector(".header-area");
const loader2 = document.querySelector('.loader-wrapper2')

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = 'none';

    main.style.display = 'block';
    setTimeout(() =>  (main.style.opacity) = 1, 100);

  }, 3500);
}
init();

/*
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow")
});
*/

$(document).ready(function() {

  let $btns = $('.project-area .button-group button');

  $btns.click(function(e) {

    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');

    $('.project-area .grid').isotope({
      filter: selector
    });

    return false;

  })

  $('.project-area .button-group #btn1').trigger('click');

  $('.project-area .test-popup-link').magnificPopup({
    type: 'image',
    gallery:{enabled:true}
  });

  // Owl-carousel

 

  // Sticky Nav
  let nav_offset_top = $('.header-area').height() + 50;

  function navbarFixed() {
    if ($('.header-area').length) {
      $(window).scroll(function(){
        let scroll = $(window).scrollTop();

        if (scroll >= nav_offset_top) {
          $('.header-area .main-menu').addClass('navbar_fixed');
        } else {
          $('.header-area .main-menu').removeClass('navbar_fixed');
        }
      })
    }
  }
  navbarFixed();
});



var typed = new Typed('.typed',{
  strings: ['^3500 Hello World ?','Have we met before?','Your Name ?'],
  typeSpeed: 100,
});

var typed1 = new Typed('.typed1',{
  strings: ['^11000 I am Tri'],
  typeSpeed: 200,
  backSpeed: 200,
});

var front = new Typed('.front',{
  strings: ['Welcome . . .'],
  typeSpeed: 100,
});

/*
var typed2 = new Typed('.typed2',{
  strings: ['^9000 Computer Science Student at Georgia Tech'],
  typeSpeed: 100,
});

*/