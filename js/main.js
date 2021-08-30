
$('.btn_nav').click(function() {
    // animate content
    //$('.page__style').addClass('animate_fade_out');
    $('.page__description').fadeOut(100).delay(1800).fadeIn();
  
    /*setTimeout(function() {
      $('.page__style').removeClass('.animate_fade_out');
    }, 3200);*/
  
    //remove fadeIn class after 1500ms
    setTimeout(function() {
      $('.page__style').removeClass('fadeIn');
    }, 1500);
  
});

$('.page1_link').click(function() {
    setTimeout(function() {
      $('.page1').addClass('fadeIn');
    }, 1500);
});

$('.page2_link').click(function() {
    setTimeout(function() {
      $('.page2').addClass('fadeIn');
    }, 1500);
});

$('.page3_link').click(function() {
    setTimeout(function() {
      $('.page3').addClass('fadeIn');
    }, 1500);
});

$('.page4_link').click(function() {
    setTimeout(function() {
      $('.page4').addClass('fadeIn');
    }, 1500);
});

$('.page5_link').click(function() {
    setTimeout(function() {
      $('.page5').addClass('fadeIn');
    }, 1500);
});

$('.page6_link').click(function() {
    setTimeout(function() {
      $('.page6').addClass('fadeIn');
    }, 1500);
});