var two;
var three;

function demoRegenTwo() {
    grainOverlay.init(two,null,255,255);
}

function demoRegenThree() {
    grainOverlay.init(three,null,100,50);
}

function init() {
    grainOverlay.init(null, document.getElementById("one"));
    two = grainOverlay.init(null, document.getElementById("two"),255,255);
    three = grainOverlay.init(null, document.getElementById("three"),100,50);
    grainOverlay.init(null, document.getElementById("four"),1,255);
    grainOverlay.init(null, document.getElementById("five"),200,100);

    setInterval(demoRegenTwo, 100);
    setInterval(demoRegenThree, 500);
}

window.onload = init;
