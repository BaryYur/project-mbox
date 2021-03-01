$(document).ready(function(){
    $('.search').click(function(event){
     $('.input__search').toggleClass('activate');
   });
 });


$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        infinite: false,
        slidesToShow:6,
        easing:'_ease_',
        slidesToScroll:1,
        waitForAnimate: true
    })
});    


$(document).ready(function(){
    $('.second__slider').slick({
        arrows:true,
        infinite: false,
        slidesToShow:6,
        easing:'_ease_',
        slidesToScroll:1,
        waitForAnimate: true
    })
}) 
