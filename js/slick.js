
 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });



  
$('.slider-nav').slick({
    centerMode: true,
    centerMode:true,
    focusOnSelect:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    autoplay:true,
    autoplaySpeed:2500,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding:'0px',
              slidesToShow: 3
            }
          },
        {
            breakpoint: 1200,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding:'0px',
              slidesToShow: 3
            }
          },
      {
        breakpoint: 768,
        settings: {
        //   arrows: false,
          centerMode: true,
         
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
         
          slidesToShow: 1
        }
      }
    ]
  });






  // $('.brend__slider ').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   arrows:false,
  //   centerPadding:'50px',
  //   dots:true,
  // });














  