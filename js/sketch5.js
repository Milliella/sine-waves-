let y = 0;
let x  = 0;
let theta = 0;
let inc = 0.06; //the amount of increment the offset each frame- speed
let offset =1; //the amount offset from beginning of wave

function setup(){
    amplitude = windowWidth;
    frequency = windowHeight;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas( windowWidth, windowHeight);
}

function draw(){
    background (7, 30, 34);
    let length = 5; //amount of squares in trail, one single line, 3 differente lines ect.. wavelength amount
    while (theta < maxAngle + offset) {
        amplitude = sin(theta - offset) * (windowHeight /3); //condenses the shapes individually 
        for (i = length; i > 1; i--) { //takes away strands
            x = sin(theta - (i * 0.1)) * amplitude; //space between the seperate strands / wave pattern
            
            fill(140, 28, 19);
            square(y, x + height / 2, 20);

            fill(191, 67, 66);
            square(y, x + height / 40, 20);

            fill(248, 192, 200);
            square(y, x + height / 1, 20);
        }
        theta += 0.1;
        y = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
} 