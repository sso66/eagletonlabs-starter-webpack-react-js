// File: es6/usecases/delegation.js
// Date: 10/15/2020

class Bird {
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }

    walk() {
        console.log('walk');
    }
}

class Penguin {
    constructor(bird) {
        this.bird = bird;
    }

    walk() {
        this.bird.walk();
    }

    swim() {
        console.log('swin');
    }
}

const bird = new Bird();
// use bird delegate
const penguin = new Penguin(bird);
penguin.walk();
penguin.swim();

// eof
