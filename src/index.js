const GameViewport = {
    WIDTH: 400 ,
    HEIGHT: 254 ,
};

window.onload = function() {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height= GameViewport.HEIGHT;
    function frame(){
        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
}
