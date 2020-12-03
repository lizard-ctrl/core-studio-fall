// clmtrackr + p5 smile detection example. Face Tracking example created by Kyle McDonald revised by Xin Xin, 2020
// https://kylemcdonald.github.io/cv-examples/

let mirror;
let tracker
let positions;
let slider;
let v1, v2;

var img; // image we will eventually display on our canvas


function setup() {

  // load p5 functions:
  createCanvas(700, 500);

  cg = createGraphics(100, 100);
  slider = createSlider(0, 255, 100);
  slider.position(20, 20);

  // specify multiple formats for different browsers
  mirror = createCapture(VIDEO); // our video object that will just see what the camera sees
  // mirror.size(320,240);
  //fingers.hide();
  img = createImage(width, height); // create our image to be the same size as our canvas
  img.loadPixels(); // load our pixels into our first set of pixels into the image

  mirror.size(width, height);
  mirror.hide();

  // load clmtrackr functions:
  tracker = new clm.tracker(); // create a new clmtrackr object
  tracker.init(); // initialize the object
  tracker.start(mirror.elt); // start tracking the video element capture.elt

 
}
function draw(){
  everything();
}

function everything() {
  background(255);

  positions = tracker.getCurrentPosition(); // updates the tracker with current positions

  mirror.loadPixels(); // load pixel information into our mirror array

  if (positions.length > 0) {

    v1 = createVector(positions[1][0], positions[1][1]);
    v2 = createVector(positions[13][0], positions[13][1]);


    for (var i = 0; i < 4 * (mirror.width * mirror.height); i += 4) { //multiply and step by 4 since each pixel has 4 color variables associated with it (r,g,b,a)

      let r = mirror.pixels[i]; // R
      let g = mirror.pixels[i + 1]; // G
      let b = mirror.pixels[i + 2]; // B
      let a = mirror.pixels[i + 3]; // A
      const op = slider.value();
     
      
      img.pixels[i] = r + 10;
      img.pixels[i + 1] = g + 10;
      img.pixels[i + 2] = b;
      img.pixels[i + 3] = a;
        
      
    }
  }
  
  img.updatePixels(); // update all the pixels for the image after you've looped through all the pixels

  stroke(255);

  image(img, 0, 0); // finally write new processed image to the canvas

  // /draw face outline
  // fill(200,200,200);
  // stroke(255);

  //   beginShape();
  //   for (let i = 0; i < positions.length; i++) {
  //     vertex(positions[i][0], positions[i][1]);
  //   }
  //   endShape();

  // draw dots + numbers
  noStroke();
  for (let i = 0; i < positions.length; i++) {
    const op = slider.value();
    fill(255, 255, 255, op);
    rect(positions[i][0], positions[i][1] - 40, 140, 290);
    // text(i, positions[i][0], positions[i][1]);
    // fill(200,200,200,30);
    
    
    
  }

}
 function myInputEvent() {
  console.log('you are typing: ', this.value());
}