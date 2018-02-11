(function(){
    var gCanv;

    var getRandomInt = function(min,max) {return Math.floor(Math.random() * (max - min + 1)) + min;}

    var init = function(p,c,o,z) {
        if (!z) z = 1000;
        if (!p) p = document.body;

        gCanv = document.createElement("canvas");

        gCanv.setAttribute("style","position: absolute;" +
                                   "left: 0;" +
                                   "top:  0;" +
                                   "width:   100%;" +
                                   "height:  100%;" +
                                   "z-index: " + z + ";" +
                                   "pointer-events: none;" +
                                   "opacity: 1;" +
                                   "transition: opacity 0.3s;");
        p.appendChild(gCanv);
        if (!c) c = 200;
        if (!o) o = 25;
        c = Math.max(0,Math.min(c,255));
        o = Math.max(0,Math.min(o,255));
        var gCtx = gCanv.getContext("2d");
        gCanv.width  = window.innerWidth  * 2;
        gCanv.height = window.innerHeight * 2;
        gCtx.clearRect(0,0,gCanv.width,gCanv.width);
        var imgData = gCtx.createImageData(gCanv.width,gCanv.height);
        for (var i = 0; i < imgData.data.length; i+=4) {
            imgData.data[i]   = getRandomInt(0,c);
            imgData.data[i+1] = getRandomInt(0,c);
            imgData.data[i+2] = getRandomInt(0,c);
            imgData.data[i+3] = getRandomInt(0,o);
        }
        gCtx.putImageData(imgData, 0, 0);
        return gCanv;
    }

    var regrain = function(e,c,o,z) {
        if (!e) {
            console.error("grainOverlay Error: no grain element specified.");
            return;
        }
        if (!z) z = 1000;

        gCanv = e;

        gCanv.setAttribute("style","position: absolute;" +
                                   "left: 0;" +
                                   "top:  0;" +
                                   "width:   100%;" +
                                   "height:  100%;" +
                                   "z-index: " + z + ";" +
                                   "pointer-events: none;" +
                                   "opacity: 1;" +
                                   "transition: opacity 0.3s;");

        if (!c) c = 200;
        if (!o) o = 25;
        var gCtx = gCanv.getContext("2d");
        gCanv.width  = window.innerWidth  * 2;
        gCanv.height = window.innerHeight * 2;
        gCtx.clearRect(0,0,gCanv.width,gCanv.width);
        var imgData = gCtx.createImageData(gCanv.width,gCanv.height);
        for (var i = 0; i < imgData.data.length; i+=4) {
            imgData.data[i]   = getRandomInt(0,c);
            imgData.data[i+1] = getRandomInt(0,c);
            imgData.data[i+2] = getRandomInt(0,c);
            imgData.data[i+3] = getRandomInt(0,o);
        }
        gCtx.putImageData(imgData, 0, 0);
        return gCanv;
    }

    window.grainOverlay = {
        init: init,
        regrain: regrain
    };
})()
