const GameViewport = {
    WIDTH: 400 ,
    HEIGHT: 254 ,
};

window.onload = function() {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height= GameViewport.HEIGHT;

    const [Kano, background] = document.querySelectorAll('img');

    const position = {
        x: GameViewport.WIDTH / 2 - Kano.width / 2,
        y: 50,
    };

    let velocity = 3;

    function frame() {
        position.x += velocity;

        if ( position.x > GameViewport.WIDTH - Kano.width || position.x < 0) {
            velocity = - velocity;
        }

        // context.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);
        context.drawImage(background, 0, 0)
        
       // context.strokeStyle = "yellow";
       // context.moveTo(0, 0);
       // context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
       // context.moveTo(GameViewport.WIDTH, 0);
       // context.lineTo(0, GameViewport.HEIGHT);
        //context.stroke();
    
        context.drawImage(Kano, position.x, position.y);
        
        window.requestAnimationFrame(frame);
    }

    window.requestAnimationFrame(frame);
    // console.log(context);
}
