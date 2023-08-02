var width, height;
var cx = 0;
var cy = 0;
var zoom = 0;

function initshit(wubbalubbadubdub) {

    var img = new Image();

    img.onload = function () {
        width = img.width; //starting value for textureX
        height = img.height; //starting textureY
        cx = width / 2, cy = height/2;
    }

    img.src = blobUrl;

    window.movealittlebitsomewhere = function (x, y) {
        var scaleX = (width / 5000) * -1;
        var scaleY = (width / 5000) * -1;
        cx += Number(x)*scaleX, cy += Number(y)*scaleY;

        if(cy >= height)cy = height;
        if(cy < 0)cy = 0;

        viewer.rotate({
            textureX: cx,
            textureY: cy,
        });

        /*

        let evlol = new MouseEvent("mousemove", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: cx,
            clientY: cy
        });

        document.querySelector("canvas").dispatchEvent(evlol);*/
    }

    window.LEMMESCROLLLLLLL = function (dy) {
        zoom += dy * 2;
        zoom = zoom > 100 ? 100 : zoom < 0? 0 : zoom;
        viewer.zoom(zoom);
    }
}




/*

bytes = [255 ,02302, 0520, ...
let blob = new Blob([new Uint8Array(bytes)], {type:"image/jpg"})
URL.createObjectURL(blob);





*/