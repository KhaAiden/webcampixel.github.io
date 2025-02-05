
// webcam variable
let capture;

function setup() {
  createCanvas(600, 600);
  
  capture = createCapture({ 

    // no audio
    audio: false,

    // webcam dimensions
    video: { width: 600, height: 600 }

  }, function() { console.log('capture successful.');
  });
  
  noStroke();
  fill(156, 0, 0); //sets fill to black
  rectMode(CENTER);
}

function draw() {
  background(255,215,0);
  capture.loadPixels(); //load in all pixel data 
  
  for (let y = 0; y < height; y += 7) { //controls vert
    for (let x = 0; x < width; x += 7) { //controls horiz
      const i = y * width + x; //create i var
      const darkness = (255 - capture.pixels[i * 4]) / 255; // determine dark pixels
      const radius = 10 * darkness; // determines how big our circle is going to be; the darker the pixel, the bigger the circle
      
    if(mouseX>250){
      ellipse(x, y, radius, radius);
    }else{
      rect(x, y, radius, radius); //drawing the rect using the radius variable
    }
    }
  }
}