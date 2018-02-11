var two;
var four;

function demoRegenTwo() {
    grainOverlay.regrain(two,255,255);
}

function demoRegenFour() {
    grainOverlay.regrain(four,1,255);
}

function init() {
    grainOverlay.init(document.getElementById("one"));
    two = grainOverlay.init(document.getElementById("two"),255,255);
    grainOverlay.init(document.getElementById("three"),100,50);
    four = grainOverlay.init(document.getElementById("four"),1,255);
    grainOverlay.init(document.getElementById("five"),200,100);

    setInterval(demoRegenTwo, 100);
    setInterval(demoRegenFour, 500);
}

window.onload = init;
