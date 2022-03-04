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





$(function (){
    $(".product__slider").owlCarousel({
        items:3,
        loop:true,
        margin:60,
        nav:true,
       
        // autoplay:true,
        // autoplayTimeout:1000,
        // autoplayHoverPause:true
    
    })
})





$(function (){
    $(".brend__slider").owlCarousel({
        items:3,
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
       
       
    })
})

















//