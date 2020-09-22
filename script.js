// Input Range
let redRange = document.querySelector('#redRange');
let greenRange = document.querySelector('#greenRange');
let blueRange = document.querySelector('#blueRange');

// Input Text
let redText = document.querySelector('#redText');
let greenText = document.querySelector('#greenText');
let blueText = document.querySelector('#blueText');

// Same Value for both
redText.value = redRange.value;
greenText.value = greenRange.value;
blueText.value = blueRange.value;

// Color Value
let redValue = redText.value;
let greenValue = greenText.value;
let blueValue = blueText.value;

// change the values
redRange.addEventListener("change", changeValueRed);
function changeValueRed() {
    redText.value = this.value;
    redValue = redText.value;
    changeColor();
}
greenRange.addEventListener("change", changeValueGreen);
function changeValueGreen() {
    greenText.value = this.value;
    greenValue = greenText.value;
    changeColor();
}
blueRange.addEventListener("change", changeValueBlue);
function changeValueBlue() {
    blueText.value = this.value;
    blueValue = blueText.value;
    changeColor();
}

//Change square color
function changeColor(red, green, blue) {
    let square = document.querySelector('#square');
    let rgb = `rgb(${redValue},${greenValue},${blueValue})`
    square.style.backgroundColor = rgb;
}
changeColor();