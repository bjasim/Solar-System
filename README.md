# Solar System 3D Model README

## Project Description

In this project, we'll create a 3D model of a solar system using p5.js. The model will include a central star (the sun), planets that orbit the sun, and moons that orbit the planets. Users will have the ability to customize and add planets to the solar system using a graphical user interface (GUI).

## Application Overview

### Canvas

- The application is displayed on a 700 by 700 canvas.
- The solar system is viewed from above, with planets moving along the x/y plane and spinning and orbiting around the z-axis.

### Starfield

- The background of the application is filled with (by default) 100 randomly placed stars.
- Stars can be white or have some color.
- These stars are represented as points with a size of 3.
- The stars remain in the same position each frame, creating a fixed starfield.

### The Sun

- At the center of the solar system is the sun, represented as a yellow sphere.
- The sun has a radius of 30 units.

### The Earth

- By default, one planet (Earth) is in the solar system.
- The Earth is represented as a sphere with an Earth texture.
- The Earth rotates around its own axis.
- The Earth also orbits the sun.

### The Moon

- By default, one moon is present in the solar system.
- The moon is represented as a sphere with a moon texture.
- The moon does not spin on its own axis.
- The moon orbits the Earth.

### Additional Planets

- Users can add additional planets to the solar system using GUI elements.
- Custom planets can be configured with various parameters, including size, color, rotation speed, distance from the sun, and the option to have a moon.
- Each planet can have only one moon.

## User Interface (UI)

- GUI elements are created using DOM elements with p5.js APIs.
- UI elements are displayed to the right of the canvas where the solar system is drawn.

### UI Controls

- Text input for entering the number of stars with an associated button to regenerate star positions.
- Slider to control Earth's distance from the sun.
- Slider to control Earth's rotation speed.
- Slider to control the Moon's distance from the Earth.
- Slider to control the Moon's rotation speed.
- Additional GUI elements for creating and configuring custom planets.

### Custom Planet Configuration

- Users can create additional planets with customizable parameters:
  - Size of the planet (radius).
  - Color of the planet.
  - Speed at which the planet moves around the sun.
  - Distance of the planet from the sun.
  - Option to have a moon (Boolean value).
  - Distance of the moon from the planet.
  - Speed at which the moon orbits the planet.
  - Size of the moon (radius).

### Additional UI Controls

- Button to remove the last custom planet created (does not remove the Earth).
- Button to pause all rotation within the solar system.
- Button to reset the program back to its default state.

## Usage

1. Clone or download this repository to your local machine.
2. https://bjasim.github.io/Solar-System/
