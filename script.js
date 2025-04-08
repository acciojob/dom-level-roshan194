//your JS code here. If required.
const targetElement = document.getElementById("level");

// Initialize level counter
let level = 0;
let currentElement = targetElement;

// Traverse up the DOM tree until reaching the <html> element (or null)
while (currentElement) {
  level++;
  currentElement = currentElement.parentElement;
}

// Show the result using alert
alert(`The level of the element is: ${level}`);
