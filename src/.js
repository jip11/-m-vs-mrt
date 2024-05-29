const objectEntity = {
    position: { x: 0, y:0 },
    velocity: 1,
   draw() { }, 
}

const entity = function() {};

entity.prototype.position = { x: 0, y: 0 };
entity.prototype.velocity = 1;
entity.prototype.draw = function() { };

const kano = new entity();


class Entity {
    constructo() {
    this.position = { x: 0, y: 0 };
    this.velocity = 1;
    }

    draw() {       
    }
}

const jax = new Entity();

// 10:46 part 3