// flag
$("#tulon").click(function(){
    $(".flag").animate({
        top:"0",
        left:"29",
    },2000);
});

// animate
$("#btn6").click(function(){
    $("#run").animate({
        top:"0",
        left:"820",
    },1300)
    $("#run").animate({
        top:"420",
        left:"820",
    },700)
    $("#run").animate({
        top:"420",
        left:"0",
    },900)
    $("#run").animate({
        top:"0",
        left:"0",
    },1200)
});

$("#btn6").click(function(){
    $("#run1").animate({
        top:"0",
        left:"820",
    },1000)
    $("#run1").animate({
        top:"420",
        left:"820",
    },600)
    $("#run1").animate({
        top:"420",
        left:"0",
    },800)
    $("#run1").animate({
        top:"0",
        left:"0",
    },1000)
});




// fade in ---------------fade out
$("#btn").click(function(){
    $(".box").fadeOut();
});
$("#btn1").click(function(){
    $(".box").fadeIn();
});
$("#btn2").click(function(){
    $(".box").fadeToggle();
});

// ends

// add class--------------remove class

$("#btn3").click(function(){
    $(".box1").addClass("box2");
});
$("#btn4").click(function(){
    $(".box1").removeClass("box2");
});
$("#btn5").click(function(){
    $(".box1").toggleClass("box2");
});

// ends