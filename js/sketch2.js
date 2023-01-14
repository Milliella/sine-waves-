// let x = 0;
// let y = 0;
// let theta = 0;
// let inc = 0.01; //the amount of increment the offset each frame
// let offset = 0; //the amount offset from beginning of wave
// let amplitude;
// let frequency;
// let maxAngle;

// function setup() {
//     amplitude = windowHeight / 10;
//     frequency = windowWidth / 10;
//     maxAngle = (windowWidth / frequency) * TWO_PI;
//     createCanvas(windowWidth, windowHeight);
//     noStroke();
//     let length = 10;

// }

// function draw() {
//     background(0);
//     noStroke();
//     let length = 10;
//     while (theta < maxAngle + offset) {
//         amplitude = sin(theta - offset) * (windowHeight / 2);
//         amplitude = ((theta - offset) / maxAngle) * (windowHeight / 2);
//         for (i = length; i > 0; i--) {
//             y = sin(theta - (i * 100)) * amplitude;
//             fill(100 - (100 / length * i), 0, 0);
//             ellipse(x, y + height / 2, 5); //shape of the little trails 
//             // square(x, height/2 + y, 90);
//         }
//         for (i = length; i > 0; i--) {
//             y = sin(theta - (i * 0.01)) * amplitude;
//             fill(255 - (255 / length * i), 255,);
//             ellipse(x, y + height / 2, 7);
//         }





//         theta += 0.2;
//         x = ((theta - offset) / maxAngle) * windowWidth;
//     }
//     offset += inc;
//     theta = offset;
// }

let amplitude;

let frequency;

let input;



let mod1;

let mod2;

let mod3;

let mod4;

let mod5;



function setup() {



createCanvas(500,500);



amplitude = 100;

frequency = 1;

input = 0;



mod1 = 0;

mod2 = 0;

mod3 = 0;

mod4 = 0;

mod5 = 0;

}



function draw() {



background(0);

fill(255);



translate(0, height / 2);

stroke(2210, 0, 0);

line(width / 2, height / 2, width / 2, 500);



let strokeMod = 0;



push();



frequency = 5;



// Modulation sources.

mod1 = map(sin(mod2), -1, 1, 0, 30);

mod3 = map(sin(mod4), -1, 1, -10, 190);

mod4 += 0.01;

mod2 += 0.009;



amplitude = 20;



noFill();



for (var i = 0; i < 500; i++) {



// flooring the modulation that's happening on the phase gives a jittery effect to the animation.

var phase = i * floor(mod1);



// slight modulation to the other ring color.

stroke(mod5, 0, 200);



mod5 = sin(input * frequency + phase) * amplitude;



push();

translate(width / 2 + mod5, mod5);

rotate(i / 20);



// stroke weight eventually gets so big that it consumes the entire screen giving a bit of a rest.

strokeMod = i;

strokeWeight((mod2) / mod1 + sin(i));



// Blue rectangles.

rect(0, 190, 5, 5);



translate(mod2 /5, 0);

rotate(mod2);



stroke(190, 20, 90);

strokeWeight(mod3 * 0.02);



// Red rectangles.

rect(mod1 * 5, 10, 2, 2);



// stroke(70, 240, 210);

point(mod3 + mod1, mod1);

pop();

}

input += 0.01;

}