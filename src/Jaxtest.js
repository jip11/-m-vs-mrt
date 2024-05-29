const Jax = document.getElementById("jax");

// kép arány: 75:138

const position = {
    x: 80,
    y: 100,
};

let velocity = 3;

export function updateJax(context){
    position.x += velocity;

    if ( position.x > context.canvas.width - Jax.width || position.x < 0) {
     velocity = - velocity;
    }
}

export function drawJax(context){
    context.drawImage(Jax, position.x, position.y);
}
