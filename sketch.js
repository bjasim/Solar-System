let stars = [];
let planets = [];
let earthTexture;
let earthRotation = 0;
let earthOrbit = 0;
let moonTexture;
let moonOrbit = 0;
let moonRotation = 0;
let earthDistanceSlider;
let earthRotationSlider;
let moonOrbitSlider;
let planetSizeSlider;
let planetSpeedSlider;
let planetDistanceSlider;
let planetColorPicker;
let removePlanetButton;
let starCountInput;
let updateStarsButton;
let moonDistanceSlider;
let moonSpeedSlider;
let moonSizeSlider;
let moonRotationSlider;
let customMoonDistanceSlider;  
let isPaused = false;



function preload() {
  earthTexture = loadImage("assets/earth_daymap.jpg");
  moonTexture = loadImage("assets/moon.jpg");
}

function setup() {
  createCanvas(700, 700, WEBGL);

  for (let i = 0; i < 100; i++) {
    stars[i] = {
      x: random(-width / 2, width / 2),
      y: random(-height / 2, height / 2),
      z: random(-width / 2, width / 2)
    };

  }

  earthRotation = 0.01;
  earthOrbit = 0.005;
  moonOrbit = 0.01;

  let uiDiv = createDiv('');
  uiDiv.id('uiDiv');
  uiDiv.style('position', 'fixed');
  uiDiv.style('right', '225px');
  uiDiv.style('top', '10px');

  // Earth related UI
  uiDiv.child(createP('<h2>Earth Controls</h2>')); // Label
  let earthControlsDiv = createDiv('');
  earthControlsDiv.style('display', 'flex');
  earthControlsDiv.style('justify-content', 'space-between');
  earthControlsDiv.style('width', '50%');
  earthControlsDiv.style('margin-top', '-30px'); // Adjust this value to change the space
  
  let earthDistanceDiv = createDiv('');
  earthDistanceDiv.child(createP('Earth Distance'));
  earthDistanceSlider = createSlider(100, 300, 200);
  earthDistanceDiv.child(earthDistanceSlider);
  earthControlsDiv.child(earthDistanceDiv);
  
  let earthRotationDiv = createDiv('');
  earthRotationDiv.child(createP('Earth Rotation'));
  earthRotationSlider = createSlider(0, 0.1, 0.01, 0.001);
  earthRotationDiv.child(earthRotationSlider);
  earthControlsDiv.child(earthRotationDiv);
  
  uiDiv.child(earthControlsDiv);
    
// Moon related UI
uiDiv.child(createP('<h2>Moon Controls</h2>')); // Label

let moonControlsDiv = createDiv('');
moonControlsDiv.style('display', 'flex');
moonControlsDiv.style('just ify-content', 'space-between');
moonControlsDiv.style('width', '50%');
moonControlsDiv.style('margin-top', '-30px'); // Adjust this value to change the space

// let moonOrbitDiv = createDiv('');
// moonOrbitDiv.child(createP('Moon Orbit'));
// moonOrbitSlider = createSlider(0, 0.1, 0.01, 0.001);
// moonOrbitDiv.child(moonOrbitSlider);
// moonControlsDiv.child(moonOrbitDiv);
let moonDistanceDiv = createDiv('');
moonDistanceDiv.child(createP('Moon Distance'));
moonDistanceSlider = createSlider(30, 70, 50);
moonDistanceDiv.child(moonDistanceSlider);
moonControlsDiv.child(moonDistanceDiv);

let moonRotationDiv = createDiv('');
moonRotationDiv.child(createP('Moon Rotation'));
moonRotationSlider = createSlider(0, 0.1, 0.01, 0.001);
moonRotationDiv.child(moonRotationSlider);
moonControlsDiv.child(moonRotationDiv);


// let moonControlsDiv = createDiv('');
// moonControlsDiv.child(createP('Moon Controls'));

// let moonRotationDiv = createDiv('');
// moonRotationDiv.child(createP('Moon Rotation'));
// moonRotationSlider = createSlider(0, 0.1, 0.01, 0.001);
// moonRotationDiv.child(moonRotationSlider);

// let moonDistanceDiv = createDiv('');
// moonDistanceDiv.child(createP('Moon Distance'));
// moonDistanceSlider = createSlider(30, 70, 50);
// moonDistanceDiv.child(moonDistanceSlider);

// moonControlsDiv.child(moonRotationDiv);
// moonControlsDiv.child(moonDistanceDiv);

uiDiv.child(moonControlsDiv);    
uiDiv.child(createP('<h2>Planet Controls</h2>')); // Label

let planetControlsDiv = createDiv('');
planetControlsDiv.style('display', 'flex');
planetControlsDiv.style('justify-content', 'space-between');
planetControlsDiv.style('width', '50%');
planetControlsDiv.style('margin-top', '-30px'); // Adjust this value to change the space

let planetSizeDiv = createDiv('');
planetSizeDiv.child(createP('Planet Size'));
planetSizeSlider = createSlider(10, 50, 20);
planetSizeDiv.child(planetSizeSlider);
planetControlsDiv.child(planetSizeDiv);

let planetSpeedDiv = createDiv('');
planetSpeedDiv.child(createP('Planet Speed'));
planetSpeedSlider = createSlider(0, 0.1, 0.01, 0.001);
planetSpeedDiv.child(planetSpeedSlider);
planetControlsDiv.child(planetSpeedDiv);

let planetDistanceDiv = createDiv('');
planetDistanceDiv.child(createP('Planet Distance'));
planetDistanceSlider = createSlider(100, 300, 200);
planetDistanceDiv.child(planetDistanceSlider);
planetControlsDiv.child(planetDistanceDiv);

uiDiv.child(planetControlsDiv);

let planetColorDiv = createDiv('');
planetColorDiv.style('display', 'flex');
planetColorDiv.style('justify-content', 'flex-start');
planetColorDiv.style('align-items', 'center');
planetColorDiv.style('width', 'auto');

let moonSpeedDiv = createDiv('');
moonSpeedDiv.child(createP('Moon Speed'));
moonSpeedSlider = createSlider(0, 0.1, 0.01, 0.001);
moonSpeedDiv.child(moonSpeedSlider);
planetColorDiv.child(moonSpeedDiv);

let moonSizeDiv = createDiv('');
moonSizeDiv.child(createP('Moon Size'));
moonSizeSlider = createSlider(10, 50, 20);
moonSizeDiv.child(moonSizeSlider);
planetColorDiv.child(moonSizeDiv);

let CustomMoonDistanceDiv = createDiv('');
CustomMoonDistanceDiv.child(createP('Moon Distance'));
// customMoonDistanceSlider = createSlider(30, 70, 50);
customMoonDistanceSlider = createSlider(60, 120, 90);
CustomMoonDistanceDiv.child(customMoonDistanceSlider);
planetColorDiv.child(CustomMoonDistanceDiv);


let planetColorLabel = createP('<h4>Planet Color</h4>');
planetColorLabel.style('margin', '0 10px 0 0'); // Add right margin to the label
planetColorDiv.child(planetColorLabel);

planetColorPicker = createColorPicker(color(255, 255, 255));
planetColorDiv.child(planetColorPicker);

uiDiv.child(planetColorDiv);
let planetMoonDiv = createDiv('');
planetMoonDiv.style('display', 'flex');
planetMoonDiv.style('justify-content', 'flex-start');
planetMoonDiv.style('align-items', 'center');
planetMoonDiv.style('width', 'auto');

let planetMoonLabel = createP('<h4>Planet Moon</h4>');
planetMoonLabel.style('margin', '0 10px 0 0'); // Add right margin to the label
planetMoonDiv.child(planetMoonLabel);

planetMoonCheckbox = createCheckbox('Planet has a moon', false);
planetMoonDiv.child(planetMoonCheckbox);

uiDiv.child(planetMoonDiv);

addPlanetButton = createButton('Add Planet');
addPlanetButton.mousePressed(addPlanet);
uiDiv.child(addPlanetButton);

removePlanetButton = createButton('Remove Planet');
removePlanetButton.mousePressed(removePlanet);
uiDiv.child(removePlanetButton);

let pauseButton = createButton('Pause/Resume Rotation');
pauseButton.mousePressed(() => {
  isPaused = !isPaused;
});
uiDiv.child(pauseButton);


  // Star related UI
  uiDiv.child(createP('Star Controls')); // Label
  starCountInput = createInput('100');
  uiDiv.child(starCountInput);
  updateStarsButton = createButton('Update Stars');
  updateStarsButton.mousePressed(updateStars);
  uiDiv.child(updateStarsButton);

  let resetButton = createButton('Reset');
  resetButton.mousePressed(() => {
  // Remove all the custom planets
  planets = [];

  // Reset the position and rotation of the Earth and the initial moon
  earthRotation = 0;
  earthOrbit = 0;
  moonOrbit = 0;
  moonRotation = 0;

  // Reset the values of all sliders to their initial values
  earthDistanceSlider.value(200);
  earthRotationSlider.value(0.01);
  moonDistanceSlider.value(50);
  moonRotationSlider.value(0.01);
  // and so on for all other sliders...
  planetSizeSlider.value(20);
  planetSpeedSlider.value(0.01);
  planetDistanceSlider.value(200);
  moonSpeedSlider.value(0.01);
  moonSizeSlider.value(20);
  customMoonDistanceSlider.value(90);
  planetColorPicker.value('#ffffff');




  // Unpause the rotation if it's paused
  isPaused = false;
});
uiDiv.child(resetButton);


}

function addPlanet() {
  console.log("addPlanet function called");
  let newPlanet = {
    size: planetSizeSlider.value(),
    color: planetColorPicker.color(),
    speed: planetSpeedSlider.value(),
    distance: planetDistanceSlider.value(),
    hasMoon: planetMoonCheckbox.checked(),
    moonDistance: customMoonDistanceSlider.value(),
    moonSpeed: moonSpeedSlider.value(),
    moonSize: moonSizeSlider.value(),
    moonRotation: 0,
    rotation: 0
  };
  console.log("New planet:", newPlanet);
  planets.push(newPlanet);
}


function updateStars() {
  // Get the number of stars from the input field
  let starCount = int(starCountInput.value());

  // Clear the stars array
  stars = [];

  // Generate new star positions
  for (let i = 0; i < starCount; i++) {
    stars[i] = {
      x: random(-width / 2, width / 2),
      y: random(-height / 2, height / 2),
      z: random(-width / 2, width / 2)
    };
  }
}


function removePlanet() {
  // Remove the last planet from the planets array
  if (planets.length > 0) {
    planets.pop();
  }
}



function draw() {
  // ambientLight(255);

  background(0); // Set the background to black
  stroke(255); // Set the stroke color to white
  strokeWeight(3); // Set the stroke weight to 3
  for (let star of stars) {
    point(star.x, star.y, star.z);
  }

  // Draw the sun
  push();
  noStroke();
  fill(255, 204, 0); // Yellow color
  sphere(30); // Sphere with radius 30
  pop();


  // for (let planet of planets) {
  //   ambientLight(255);
  //   push();
  //   noStroke();
  //   rotateZ(planet.rotation);  // Use the planet's rotation property
  //   translate(planet.distance, 0, 0);
  //   ambientMaterial(planet.color);  // Set the material of the planet
  //   sphere(planet.size);  // Draw the planet
    
  //   // If the planet has a moon, draw it
  //   if (planet.hasMoon) {
  //     push();
  //     noStroke();
  //     texture(moonTexture);  // Set the texture of the moon
  //     rotateZ(planet.moonRotation);
  //     translate(planet.moonDistance, 0, 0);  // Position the moon at a distance from the planet
  //     sphere(planet.moonSize);  // Draw the moon
  //     pop();
  //   }
  //   pop();
    
  // }
// Draw the planets
for (let planet of planets) {
  // ambientLight(255);
  push();  
  noStroke();
  ambientLight(255);
  rotateZ(planet.rotation);  // Use the planet's rotation property
  translate(planet.distance, 0, 0);
  // fill(planet.color);  // Use fill() instead of ambientMaterial()
  ambientMaterial(planet.color);
  sphere(planet.size);

  // If the planet has a moon, draw it
if (planet.hasMoon) {
  push();
  noStroke();
  tint(255);  // Apply a white tint to the texture
  texture(moonTexture);  // Set the texture of the moon
  rotateZ(planet.moonRotation);
  translate(planet.moonDistance, 0, 0);  // Position the moon at a distance from the planet
  sphere(planet.moonSize);  // Draw the moon
  noTint();  // Disable the tint
  pop();
}
 pop();
}



// if (!isPaused) {
//   earthRotation += earthRotationSlider.value();
//   earthOrbit += 0.005;
//   moonRotation += moonRotationSlider.value();
//   // and so on for all other rotation variables...
// }
//-----------------------------------------------

  // Draw the Earth
  push();
  noStroke();
  rotateZ(earthOrbit);
  translate(earthDistanceSlider.value(), 0, 0);
  rotateZ(earthRotation);
  texture(earthTexture);
  sphere(25);

  // Draw the Moon▪ A button to reset the program back to the default state.
  push();
  noStroke();
  // rotateZ(moonOrbit);
  translate(moonDistanceSlider.value(), 0, 0);  // Use the value from the slider
  // translate(customMoonDistanceSlider.value(), 0, 0);  // Use the value from the slider
  // translate(planet.moonDistance, 0, 0);  // Position the moon at a distance from the planet

  rotateZ(moonRotation);  
  texture(moonTexture);
  sphere(10);  
  
  pop();

  if (!isPaused) {
    // Update the Earth's rotation and orbit
    earthRotation += earthRotationSlider.value();
    earthOrbit += 0.005;
  
    // Update the Moon's rotation
    moonRotation += moonRotationSlider.value();
  
    // Update the rotation of the planets and their moons
    for (let planet of planets) {
      planet.rotation += planet.speed;
      if (planet.hasMoon) {
        planet.moonRotation += moonRotationSlider.value();
      }
    }
  } 
  //----------------------------------------------------------------------------------

// Update the Earth's rotation and orbit
  // earthRotation += earthRotationSlider.value();
  // earthOrbit += 0.005;

  // Update the Moon's orbit
  // moonOrbit += moonOrbitSlider.value();
  // moonRotation += moonOrbitSlider.value();
  // moonRotation += moonRotationSlider.value();
  // moonOrbit += moonOrbitSlider.value();



}





// TO DO:
// - Organize UI and seperate sections and buttons
// - Edit the default values to make it look good
//  - Fix the custom moon speed not working 
//  - Planet has a moon reset to unchecked after pressed button reset
//  - After reset, update the star number to 100
//  - If have time, fix the custom moon texture
//  - Restructure the code, and make seperate functions for each feature/button 
//  - Comment the code
//  - Add header comments, and function comments