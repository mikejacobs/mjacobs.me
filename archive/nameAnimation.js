var nameAnimation = function(text, parent, width, height){

	var cw = width
	var ch = height
    var inc = 50;
    var elementHeight = 50
    var num = 150
    // console.log(height, height / (num * elementHeight * 2.5))
    var yspacing = 20
    var max = 300
    var rate = 1
    var run;

    var canvas = createCanvas(cw, ch);
    parent.appendChild(canvas)
    var ctx = canvas.getContext('2d');

    ctx.font = "100 44px sweden_sansregular";
    ctx.textBaseline="top"; 
    

    function animate() {
        ctx.clearRect(0,0,cw,ch);
        var count = num

        var ease = EasingFunctions.easeInOutQuart((inc / max))
        while(count--){
	        ctx.save();

	        ctx.beginPath();
	        ctx.rect(
	        	0, // x
	        	(yspacing * count) * ease, // y
	        	500, // w
	        	ease * elementHeight/1.5 // h
	        );
	        // ctx.stroke() //debug mask
	        ctx.clip();

	        ctx.fillText(text, 0, ease * (yspacing * count) * Math.abs(Math.cos(count / num)));

	        ctx.restore();
	        ctx.beginPath();
	        ctx.restore();
    	}
        inc+= rate;

        if (inc <= max) window.requestAnimationFrame(animate, 0);
    }

        // shim layer with setTimeout fallback
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
    animate()

    // var run = setInterval(function() { animate(); },5);
};


var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
              ctx.mozBackingStorePixelRatio ||
              ctx.msBackingStorePixelRatio ||
              ctx.oBackingStorePixelRatio ||
              ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();


createCanvas = function(w, h, ratio) {
    if (!ratio) { ratio = PIXEL_RATIO; }
    var can = document.createElement("canvas");
    can.width = w * ratio;
    can.height = h * ratio;
    can.style.width = w + "px";
    can.style.height = h + "px";
    can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
}

EasingFunctions = {
    linear: function (t) {
        return t
    },
    easeInQuad: function (t) {
        return t * t
    },
    easeOutQuad: function (t) {
        return t * (2 - t)
    },
    easeInOutQuad: function (t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    easeInCubic: function (t) {
        return t * t * t
    },
    easeOutCubic: function (t) {
        return (--t) * t * t + 1
    },
    easeInOutCubic: function (t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    easeInQuart: function (t) {
        return t * t * t * t
    },
    easeOutQuart: function (t) {
        return 1 - (--t) * t * t * t
    },
    easeInOutQuart: function (t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
    },
    easeInQuint: function (t) {
        return t * t * t * t * t
    },
    easeOutQuint: function (t) {
        return 1 + (--t) * t * t * t * t
    },
    easeInOutQuint: function (t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
    }
}