// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashMaroonColor(function () {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash maroon color and then execute a callback function
function flashMaroonColor(callback) {
    var maroon = '#800000';
    var interval = setInterval(function () {
        document.body.style.backgroundColor = maroon;
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = maroon; // Keep the background maroon
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

// Set the initial background color to maroon
document.body.style.backgroundColor = '#800000';

displayCat();
