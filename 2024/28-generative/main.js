let colors = []; // 2D array for storing colors
let gridSize = 10; // Size of each square (10x10 pixels)
let cols, rows;
const gray = 'rgb(210, 210, 210)'

function setup() {
    createCanvas(500, 500);
    cols = width / gridSize; // Number of columns
    rows = height / gridSize; // Number of rows
    frameRate(4);

    // Initialize colors
    for (let x = 0; x < cols / 2; x++) {
        colors[x] = [];
        for (let y = 0; y < rows; y++) {
            colors[x][y] = random([gray, 'orangered',]);
        }
    }
}

function draw() {
    // Gradually transition colors
    for (let x = 0; x < cols / 2; x++) {
        for (let y = 0; y < rows; y++) {
            let currentColor = colors[x][y];
            if (currentColor === gray) {
                continue;
            }
            let targetR = red(currentColor) + random(-50, 50);
            let targetG = green(currentColor);
            let targetB = blue(currentColor);

            // Ensure RGB values stay within bounds
            targetR = constrain(targetR, 10, 255);
            targetG = constrain(targetG, 10, 255);
            targetB = constrain(targetB, 10, 255);

            colors[x][y] = color(random(['orangered', gray]));
        }
    }

    // Draw the grid with symmetry
    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            let symX = x < cols / 2 ? x : cols - x - 1; // Reflect horizontally
            fill(colors[symX][y]);
            noStroke();
            rect(x * gridSize, y * gridSize, gridSize, gridSize);
        }
    }
}