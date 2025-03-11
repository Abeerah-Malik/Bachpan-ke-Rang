var shadowgif, gulakgif, ludogif, batgif, ballgif, icecreamgif, mangif;
var gfxs = [];
var showGif = false;
var currentGif = null;
const W = 240;
let t = 0;

function preload() {
  shadowgif = loadImage("0shadow.gif");  
  gulakgif = loadImage("1gulak.gif");    
  ludogif = loadImage("2ludo.gif");
  batgif = loadImage("4bat.gif");
  ballgif = loadImage("5ball.gif");
  icecreamgif = loadImage("6icecream.gif");
  mangif = loadImage("8man.gif");
}

function setup() {
  // Create an ARGraphics instance for each marker 
  for (let i = 0; i < 8; i++) {
    const gfx = createARGraphics(W, W, P2D, { scale: 5, markerId: i });
    gfx.noStroke();
    gfxs.push(gfx);  // Push each graphics instance into the array
  }
}

function draw() {
  gfxs.forEach((gfx, index) => {
    gfx.clear();  // Clear the canvas 

    // Display the GIF when the marker is found
    if (showGif && currentGif) {
      gfx.image(currentGif, W / 4, W / 4, W / 2, W / 2);  // Draw the GIF at the center
    }
  });

  t += 0.04;  // Update time for animation (if any)
}

// Show the appropriate GIF when a marker is found
function p5SimpleARMarkerFound(markerId) {
  console.log('Marker Found:', markerId);  

  // Check markerId and set the corresponding GIF
  if (markerId === 1) {
    currentGif = shadowgif;  
    showGif = true;  
  } else if (markerId === 2) {
    currentGif = gulakgif;  
    showGif = true;  
  } else if (markerId === 3) {
    currentGif = ludogif;  
    showGif = true;  
  } else if (markerId === 4) {
    currentGif = batgif;  
    showGif = true;  
  } else if (markerId === 5) {
    currentGif = ballgif;  
    showGif = true;  
  } else if (markerId === 6) {
    currentGif = icecreamgif;  
    showGif = true;  
  } else if (markerId === 7) {
    currentGif = mangif;  
    showGif = true;  
  }
}

// Hide the GIF when the marker is lost
function p5SimpleARMarkerLost(markerId) {
  console.log('Marker Lost:', markerId);  // Debugging log to check marker loss

  showGif = false;  // Hide the GIF
  currentGif = null;  // Reset the current GIF
}
