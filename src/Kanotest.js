const Kano = document.getElementById("kano");

// kép arány: 75:138

const position = {
    x: 80,
    y: 100,
};

let velocity = 3;

export function updateKano(context){
    position.x += velocity;

    if ( position.x > context.canvas.width - Kano.width || position.x < 0) {
     velocity = - velocity;
    }
}

export function drawKano(context){
    context.drawImage(Kano, position.x, position.y);
}
