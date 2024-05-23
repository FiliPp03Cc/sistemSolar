let angle = 0;
let planetSize = [50, 30, 20, 10, 15];
let distance = [100, 150, 200, 250, 300];
let speed = [0.02, 0.03, 0.04, 0.05, 0.01];

function setup() {
    createCanvas(700, 700);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);

    // Soarele
    fill(255, 204, 0);
    ellipse(0, 0, 80, 80);

    // Planetele
    for (let i = 0; i < 5; i++) {
        push();
        rotate(angle * speed[i]);
        translate(distance[i], 0);
        fill(255);
        ellipse(0, 0, planetSize[i], planetSize[i]);
        pop();
    }

    // Axele orbitei
    stroke(255);
    noFill();
    for (let i = 0; i < 5; i++) {
        ellipse(0, 0, distance[i] * 2, distance[i] * 2);
    }

    angle += 1;
}