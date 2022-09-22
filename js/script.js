$(function () {
  $(".banner-slider-wapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
  });
  $(".about-main-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
  });
  $(".counter").counterUp({
    delay: 10,
    time: 6000,
  });
  $(".main-cmnt").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: ".left",
    nextArrow: ".right",
    pauseOnHover: false,
  });

  $(window).scroll(function(){ 
    var top = $(this).scrollTop()
    if (top > 300) {
      $(".navbar").addClass("sticky-menu")
    }
    else{
      $(".navbar").removeClass("sticky-menu")
    }
    if (top > 200) {
      $(".back-to-top").fadeIn(300)
    } else {
      $(".back-to-top").fadeOut(300)
    }
  })

  $(".back-to-top").click(function(){
    $("html,body").animate({scrollTop: 0}, 1000)
  })

  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'circle'
});
new VenoBox({
  selector: '.my-video-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'circle'
});
});
