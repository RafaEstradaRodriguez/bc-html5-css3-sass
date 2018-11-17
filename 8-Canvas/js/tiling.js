let canvas = document.getElementById("myCanvas");
canvas.width  = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

ctx = canvas.getContext('2d');

let tile = new Image();

tile.addEventListener('load', (e) => {
    var pattern = ctx.createPattern(e.target, 'repeat');
    ctx.fillStyle = pattern;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
})

tile.src = "img/tile.png";

