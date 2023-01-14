let y = 0;
let x  = 0;
let theta = 0;
let inc = 0.005; //the amount of increment the offset each frame- speed
let offset =100; //the amount offset from beginning of wave

function setup(){
    amplitude = windowWidth;
    frequency = windowHeight;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas( windowWidth, windowHeight);
    noStroke();
    let length = 10;
    //background (60, 179, 113);
}

function draw(){
   background(255,255,255);
    noStroke();
    let length = 3; //amount of squares in trail, one single line, 3 differente lines ect...
    while (theta < maxAngle + offset) {
        amplitude = sin(theta - offset) * (windowHeight / 2); //condenses the shapes individually 
        for (i = length; i > 1; i--) { //takes away strands
            x = sin(theta - (i * 1)) * amplitude; //space between the seperate strands / wave pattern
            // fill(255,- (150 / height * i), 200);
            // ellipse(y, x + width / 2, 10);

            //fill(0,- (123 / height * i), 0);
            colorMode(RGB, 255, 255, 255, 100);
            square(y, x + height / 2, 10);

            fill(128,- (128 / height * i), 128);
            ellipse(y, x + width / 40, 10);
        }
        theta += 0.2;
        y = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}






