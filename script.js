$(document).ready(function(){

/*
For the sticky Nav
*/

  $('.js--section-features').waypoint(function(direction){
    if(direction =="down"){
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
    }, {
      offset: '25%'
  });


  /*
  For the smooth scroll
  */
    $('.js--scroll-to-plans').click(function(){
      $('html, body').animate({scrollTop:$('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function(){
      $('html, body').animate({scrollTop:$('.js--section-features').offset().top}, 1000);
    });
    $('.js--scroll-to-home').click(function(){
      $('html, body').animate({scrollTop:$('.js--section-home').offset().top-500}, 1000);
    });
/* navagation scroll*/


$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

/*animations on scroll*/
$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeInDown');

},{
  offset: '70%'
});

$('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInLeft');

},{
  offset: '70%'
});

$('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated slideInUp');

},{
  offset: '70%'
});
});
