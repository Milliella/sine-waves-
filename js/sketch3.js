let y = 0;
let x  = 0;
let theta = 0;
let inc = 0.1; //the amount of increment the offset each frame- speed
let offset =100; //the amount offset from beginning of wave

function setup(){
    amplitude = windowWidth;
    frequency = windowHeight;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas( windowWidth, windowHeight);
    noStroke();
    let length = 10;
    background (229, 211, 82);
}

function draw(){
   //background(255,255,255);
    noStroke();
    let length = 3; //amount of squares in trail, one single line, 3 differente lines ect...
    while (theta < maxAngle + offset) {
        amplitude = sin(theta - offset) * (windowHeight / 3); //condenses the shapes individually 
        for (i = length; i > 2; i--) { //takes away strands
            x = sin(theta - (i * 10)) * amplitude; //space between the seperate strands / wave pattern
            
            // fill(255,- (150 / height * i), 200);
            // ellipse(y, x + width / 2, 10);

            //fill(229, 211, 82);
            //square(y, x + height / 5, 10);

            fill(0, 168, 150);
            square(y, x + height / 2, 20);

            fill(2, 128, 144);
            square(y, x + height / 40, 20);

            fill(2, 195, 154);
            square(y, x + height / 1, 20);
        }
        theta += 0.08;
        y = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}






