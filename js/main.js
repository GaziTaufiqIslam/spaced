$(document).ready(function(){
    
$(window).on("load", function(){
    $(".loader").fadeOut();
});

    $('.sidenav').sidenav();


    window.sr = ScrollReveal({ reset: true });
    sr.reveal("h1");
    sr.reveal("h2");
    sr.reveal("p");
    sr.reveal("img");
    sr.reveal("#home a");


    $(window).scroll(function(){
        var wScroll=$(window).scrollTop();
        if (wScroll>0) {
            $("nav").addClass("bg-black");
        }
        else{
            $("nav").removeClass("bg-black");
        }
    });

var mouse={
        oldX: 400,
        oldY: 300,
        newX: undefined,
        newY: undefined
    }


var img ={
    x: 0,
    y: 0
}


window.addEventListener("mousemove", function(event){
    mouse.newX = event.x;
    mouse.newY = event.y;
    
   
         img.x += ((mouse.oldX - mouse.newX)*0.005);
         img.y += ((mouse.newY - mouse.oldY) * 0.005);
         mouse.oldY = mouse.newY;
         mouse.oldX = mouse.newX;
        
    
    $("#home img").css({ "right" : img.x + "%", "top" : img.y + "%" });
    $(".carousel1 img").css({ "right" : img.x + "%", "top" : img.y + "%" });
    //console.log(mouse.newX +" "+ mouse.newY);
})

$('.carousel1').carousel({
    fullWidth: true
});
$('.carousel2').carousel({
    opacity: true,
    fullWidth: true
});
$('.carousel3').carousel({
    fullWidth: true
});

$('.nextImg').on("click", function(){
    $('.carousel1').carousel('next');
    $('.carousel2').carousel('next');
    $('.carousel3').carousel('next');
});
$('.prevImg').on("click", function(){
    $('.carousel1').carousel('prev');
    $('.carousel2').carousel('prev');
    $('.carousel3').carousel('prev');
  
});



});