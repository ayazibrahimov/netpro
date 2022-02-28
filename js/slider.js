// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

// $(function(){
//     $('.ayaz').owlCarousel({
//         dots:false,
//         nav:true,
//         items:1,
//     })
// })


// $('.owl-carousel').owlCarousel({
//     items:1,
//     loop:true,
//     margin:10,
//     merge:true,
   
// });




// $(function(){
//     $(".slider__home").owlCarousel({
//         items:1,
//         loop:true,
//         nav:true,
//     })
// })

 
$(function () { 

    const nexticon='<i class="fa-solid fa-arrow-right"></i>'
    const previcon='<i class="fa-solid fa-arrow-left"></i>'

    $('.slider__home').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        navText:[previcon,nexticon],
        autoplay:true,
        autoplayTimeout:7000,
        smartSpeed:600,
    })
})
