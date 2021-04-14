( function ( ) {
  
  const onReady = function ( ) {

    // Slide Banners
    $('#slide__banners').slick({
      speed: 300,
      dots: true,
      arrows: true,
      autoplay: true,
      infinite: true,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendArrows: $('#slide__controls'),
      appendDots: $('#slide__controls')
    });

    // Instagram Slider
    $('#instagram__slider').slick({
      speed: 300,
      dots: true,
      arrows: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      appendArrows: $('#instagram__controls'),
      appendDots: $('#instagram__controls')
    });
  };

  $(document).ready(onReady);

})();