$(document).ready(function(){
    $('.slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed:2500,
      easing:'linear',
      infinite: true,
      initialSlide: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      draggable: true,
      swipe: true, //for mobile
      touchThreshold: 10,
      touchMove: true,
      waitForAnimate: true,
      centerMode: false,
      variableWidth: false,
      //кол-во рядов в слайде.
      rows: 1,
      //кол-во объектов в слайде.
      slidesPerRow: 1,
      vertical: false,
      verticalSwiping: false,
      fade: false,
      //asNavFor: ".sliderbig",
      //адаптив. кол-во слайдов при определенной ширине, и не только.
  //     responsive: [
  //       {
  //           breakpoint: 800,
  //           settings: {
  //             slidesToShow: 2,
  //           }
  //     },       {
  //       breakpoint: 590,
  //       settings: {
  //         slidesToShow: 1,
  //       }
  // }
    // ],
    mobileFirst: false,
    //appendArrows: $(".content"),
    //appendDots: $(".content"),
    });
    $('.slidertwo').slick({
      speed: 1500,
      arrows: true,
      dots: true,
      infinite: false,
      fade: false,
      initialSlide: 4,
      autoplay: false,
      autoplaySpeed: 2000,
      easing: 'linear',
      infinite: true,
      slidesToShow: 1,
      centerMode: false,
      //asNavFor: ".slider",
    })

    // $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //   console.log(currentSlide);
    // })
    // $('.slider').on('AfterChange', function(event, slick, currentSlide, nextSlide){
    //   console.log(currentSlide);
    // })
    // $('.slider').slick('setPosition');
    // $('.slider').slick('goTo');
    // $('link').click(function(event) {
    //   $('.slider').slick('goTo');
    // });
    // $('.slider').slick('slickPrev');
    // $('.slider').slick('slickNext');

    // $('.link_l').click(function(event) {
    //   $('.slider').slick('slickPrev');
    // })
    // $('.link_r').click(function(event) {
    //   $('.slider').slick('slickNext');
    // })

    // $('.link_play').click(function(event) {
    //   $('.slider').slick('slickPlay');
    // })
    // $('.link_pause').click(function(event) {
    //   $('.slider').slick('slickPause');
    // })


    // $('.link_add').click(function(event) {
    //   $('.slider').slick('slickAdd','<div class="newslide">123</div>');
    //   return false;
    // })
    // $('.link_remove').click(function(event) {
    //   $('.slider').slick('slickRemove', 5);
    //   return true;
    // })
    $("#headerlink").on("click","a", function (event) {
 //отменяем стандартную обработку нажатия по ссылке
event.preventDefault();
 //забираем идентификатор бока с атрибута href
var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
$('body,html').animate({scrollTop: top}, 1500);
});
//плавный скрол по странице
$(function(){

  $('#headerlink').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#footer').offset().top }, 2000);
    e.preventDefault();
  });
  
  });

});

$(".search__btn").click(function(){
  $(".fa-search, .search__box, .search__txt").toggleClass("active");
  $("input[type='text']").focus();
});

$(document).ready(function(){
  $('.pricing__items').click(function(event){
    $('.pricing__more-btn').removeClass('active');
    $('.pricing__more-btn', this).toggleClass('active');
  });
});

$(document).ready(function(){
  $('.pricing__items').click(function(){
    $('.pricing__text', this).toggleClass('active');
  });
});

$(document).ready(function(){
  $('.pricing__text').click(function(){
    $('.pricing__more-btn').removeClass('active');
  });
});


$(document).mouseup(function (e){  
  var div = $(".pricing__text");  //класс элемента вне которого клик
  if (!div.is(e.target) && div.has(e.target).length === 0) {  
          div.removeClass('active');  
  }
});

$(document).mouseup(function (e){  
  var div = $(".pricing__more-btn");  //класс элемента вне которого клик
  if (!div.is(e.target) && div.has(e.target).length === 0) {  
          div.removeClass('active');  
  }
});



// $(".mr-btn1").click(function(){
//   $(".mr-txt1").toggleClass('active');
//   $(".mr-txt4, .mr-txt2, .mr-txt3").removeClass('active');
// });
// $(".mr-btn2").click(function(){
//   $(".mr-txt2").toggleClass('active');
//   $(".mr-txt1, .mr-txt4, .mr-txt3").removeClass('active');
// });
// $(".mr-btn3").click(function(){
//   $(".mr-txt3").toggleClass('active');
//   $(".mr-txt1, .mr-txt2, .mr-txt4").removeClass('active')
// });
// $(".mr-btn4").click(function(){
//   $(".mr-txt4").toggleClass('active');
//   $(".mr-txt1, .mr-txt2, .mr-txt3").removeClass('active');
// });
// $(".pricing__more-btn").click(function(){
//   $(".pricing__more-btn").removeClass('active');
//   $(this).toggleClass('active');
//   // $(this).removeClass('active');
//   // $(this).toggleClass('active');
//   // $(this).toggleClass('active');
// });


$(document).ready(function() {
  $(".header__burger").click(function(event) {
    $(".header__burger, .header__nav, .header").toggleClass('active');
    $('body').toggleClass("lock");
    // $(".search__form, .mobile__search").toggleClass('active');
    // $(".mobile__search").();
  });
  $(".mobile__search").click(function(event) {
    $(".search__form, .mobile__search").toggleClass('active');
  });
  $(".search-reset").click(function(event){
    $(".search__form, .mobile__search").removeClass('active');
  });
});


$(document).ready(function(){
  $('.meet-our-team__items', this).click(function(event){
    $('.meet-our-team__overlay', this).toggleClass('active');
  });
});

$(document).mouseup(function (e){  
  var div = $(".meet-our-team__overlay");  //класс элемента вне которого клик
  if (!div.is(e.target) && div.has(e.target).length === 0) {  
          div.removeClass('active');  
  }
});


$(document).ready(function(){
  var header = $('.header'),
  scrollPrev = 0;

$(window).scroll(function() {
var scrolled = $(window).scrollTop();

if ( scrolled > 100 && scrolled > scrollPrev ) {
  header.addClass('out');
} else {
  header.removeClass('out');
}

scrollPrev = scrolled;
});
});
$(document).ready(function(){
  var header = $('.search__form'),
  scrollPrev = 0;

$(window).scroll(function() {
var scrolled = $(window).scrollTop();

if ( scrolled > 100 && scrolled > scrollPrev ) {
  header.addClass('out');
} else {
  header.removeClass('out');
}

scrollPrev = scrolled;
});
});




