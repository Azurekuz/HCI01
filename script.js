var sliderDial = document.getElementsByClassName('dial');
var initX = 0, initY = 0, curX = 0, curY = 0;
sliderDial[0].style.left = 35 + "px";
sliderDial[0].onmousedown = dragSliderDial;
sliderDial[0].onmouseover = playHoverSFX;
atBorder = true;
var sfx_hover = new Audio("sfx/Hover.mp3");
var sfx_press = new Audio("sfx/Press.mp3");
var sfx_border = new Audio("sfx/Border.mp3");

function playHoverSFX(e){
    playProperly(sfx_hover);
    console.log("Hover");
}

function dragSliderDial(e){
    playProperly(sfx_press);
    initX = e.clientX;
    initY = e.clientY;
    console.log("Click");
    sliderDial[0].onmouseup = endDrag;
    sliderDial[0].onmouseout = endDrag;
    sliderDial[0].onmousemove = executeDrag;
}

function endDrag(e){
    sliderDial[0].onmouseup = null;
    sliderDial[0].onmouseout = null;
    sliderDial[0].onmousemove = null;
}

function executeDrag(e){
    curX = initX - e.clientX;
    initX = e.clientX;
    var currentXPos = sliderDial[0].offsetLeft - curX;
    if(parseInt(sliderDial[0].style.left.substring(0, sliderDial[0].style.left.length - 2)) >= 35 && parseInt(sliderDial[0].style.left.substring(0, sliderDial[0].style.left.length - 2)) <= 265
    && currentXPos >= 35 && currentXPos <= 265){
        sliderDial[0].style.left = currentXPos + "px";
        if(parseInt(sliderDial[0].style.left.substring(0, sliderDial[0].style.left.length - 2)) > 35 && parseInt(sliderDial[0].style.left.substring(0, sliderDial[0].style.left.length - 2)) < 265){
            atBorder = false;
        }else{
            if(!atBorder){
                console.log("Hit Border");
                playProperly(sfx_border);
                atBorder = true;
            }
        }
        console.log(parseInt(sliderDial[0].style.left.substring(0, sliderDial[0].style.left.length - 2)));
    }
}

function playProperly(sfx){
    if (sfx.paused) {
        sfx.play();
    }else{
        sfx.pause();
        sfx.currentTime = 0;
    }
}
