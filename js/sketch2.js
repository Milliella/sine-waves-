let x = 0;
let y = 0;
let theta = 0;
let inc = 0.01; //the amount of increment the offset each frame
let offset = 0; //the amount offset from beginning of wave
let amplitude;
let frequency;
let maxAngle;

function setup() {
    amplitude = windowHeight / 10;
    frequency = windowWidth / 10;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas(windowWidth, windowHeight);
    noStroke();
    let length = 10;

}

function draw() {
    background(0);
    noStroke();
    let length = 10;
    while (theta < maxAngle + offset) {
        amplitude = sin(theta - offset) * (windowHeight / 2);
        amplitude = ((theta - offset) / maxAngle) * (windowHeight / 2);
        for (i = length; i > 0; i--) {
            y = sin(theta - (i * 100)) * amplitude;
            fill(100 - (100 / length * i), 0, 0);
            ellipse(x, y + height / 2, 5); //shape of the little trails 
            // square(x, height/2 + y, 90);
        }
        for (i = length; i > 0; i--) {
            y = sin(theta - (i * 0.01)) * amplitude;
            fill(255 - (255 / length * i), 255,);
            ellipse(x, y + height / 2, 7);
        }





        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}

