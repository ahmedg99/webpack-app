// src/index.js
import './styles.css';

const message = "Hello, Webpack!";
console.log(message);

// Create an image element
const imageElement = document.createElement('img');

// Set the source attribute to the path of your image file
imageElement.src = require('./image.png'); // Assuming image.png is in the same directory

// Apply the 'image' class to the image element
imageElement.classList.add('image');

// Create a container for the image
const imageContainer = document.createElement('div');
imageContainer.classList.add('image-container');

// Append the image element to the container
imageContainer.appendChild(imageElement);

// Add the image container to the document body
document.body.appendChild(imageContainer);
