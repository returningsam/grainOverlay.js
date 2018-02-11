var two;
var three;

function demoRegenTwo() {
    grainOverlay.regrain(two,255,255);
}

function demoRegenThree() {
    grainOverlay.regrain(three,1,255);
}

function init() {
    grainOverlay.init(document.getElementById("one"));
    two = grainOverlay.init(document.getElementById("two"),255,255);
    grainOverlay.init(document.getElementById("three"),100,50);
    three = grainOverlay.init(document.getElementById("four"),1,255);
    grainOverlay.init(document.getElementById("five"),200,100);

    setInterval(demoRegenTwo, 100);
    setInterval(demoRegenThree, 500);
}

window.onload = init;
