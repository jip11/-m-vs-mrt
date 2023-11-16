const [Kano, background] = document.querySelectorAll('img[alt="kanotest]');

const position = {
    x: GameViewport.WIDTH / 2 - Kano.width / 2,
    y: 50,
};

let velocity = 1;

function update(){
    position.x += velocity;
    if ( position.x > GameViewport.WIDTH - Kano.width || position.x < 0) {
     velocity = - velocity;
    }
};

Function draw(){
    context.drawImage(Kano, position.x, position.y);
};
part 3 6:13