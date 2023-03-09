$(window).resize(function () {
  var width = $(window).width();
  if (width < 568) {
    $(".client-list").slick({
      slidesToShow: 3,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

$(document).ready(function () {
  $(".testimonial-list").slick({
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".insta-list").slick({
    slidesToShow: 5,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 567,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        },
      },
    ],
  });
});
