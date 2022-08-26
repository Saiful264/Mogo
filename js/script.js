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
});
