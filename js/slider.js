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
        dots:false,
        responsive:{
            400:{
                dots:true,
            },
            
        }
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
        responsive:{
            1200:{
               
                items:3,
            },
            992:{
               
                items:2,
            },
           769:{
               
                items:2,
            }, 
            576:{
               
                items:2,
                dots:false,
            },
            0:{
               
                items:1,
                dots:false,
            },
            
        }
       
       
    })
})

$(function(){

    const nexticon='<i class="fa-solid fa-arrow-right"></i>'
    const previcon='<i class="fa-solid fa-arrow-left"></i>'

    $(".gallery__slider").owlCarousel({
        items:5,
        loop:true,
        nav:true,
        navText:[previcon,nexticon],
        margin:30,
        dots:false,
        autoplay:true,
        // autoplayTimeout:2500,
        // autoplayHoverPause:true,
        video:true,
        responsive:{
            // 1200:{
            //     nav:true,
            //     items:5,
            // },
            992:{
                nav:true,
                items:5,
            },
            768:{
                nav:true,
                items:2,
                dots:true,
            },
           0:{
                nav:true,
                items:1,
                dots:true,
            },
            
        }
        
    })
})















//