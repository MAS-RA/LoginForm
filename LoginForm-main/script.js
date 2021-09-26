$(document).ready(function () {
    var handLeft = $(".hand-left");
    var handRight = $(".hand-right");
    var isHide = false;
    $("#pwd").focusin(hideDog)
    $("#pwd").focusout(showDog)
    
    function hideDog(){
        if (!isHide){
            handLeft.animate({
                left: "75px",
                top: "64px"
            })
            handLeft.css({
                transform: 'rotate(-150deg)'
            })
            
            handRight.animate({
                left: "206px",
                top: "69px"
            })
            handRight.css({
                transform : 'rotate(150deg)'
            })
            isHide = true;
        };
    };
    
    function showDog(){
            handLeft.animate({
                left: "50px",
                top: "270px"
            })
            handLeft.css({
                transform: 'rotate(-5deg)'
            })
            
            handRight.animate({
                left: "235px",
                top: "270px"
            })
            handRight.css({
                transform : 'rotate(5deg)'
            })
            isHide = false;
    };
});

