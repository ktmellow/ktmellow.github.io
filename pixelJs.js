// Chosen grid presets
var rows = 20;
var pixelsPerRow = 20;
var color = "#000000";

// Make container div. 
var containerDiv = document.createElement('div');
containerDiv.classList.add('container');
  
// Add h1 and br to div. 
var h1 = document.createElement('h1');
h1.innerText = "Pixel Art!";
h1.classList.add('center');
var br = document.createElement('br');
document.body.appendChild(h1);
document.body.appendChild(br);

// Create and append row divs. Then create and append pixels to rows. Then append row to container.
for (var r=0; r < rows; r++) {
  var rowDiv = document.createElement('div');
  rowDiv.classList.add('row');
  for (var p=0; p < pixelsPerRow; p++) {
    var pixelDiv = document.createElement('div');
    pixelDiv.classList.add('pixel');
    rowDiv.appendChild(pixelDiv);
  }
  containerDiv.appendChild(rowDiv);
}

// Add container to document
document.body.appendChild(containerDiv);

// Create and add color picker to document.
var br3 = document.createElement('br');
document.body.appendChild(br3);
var colorInput = document.createElement('input');
colorInput.setAttribute('type', 'color');
colorInput.classList.add('center');
colorInput.classList.add('colorInput');
document.body.appendChild(colorInput);

// Create and add reset button to document
var button = document.createElement('button');
button.classList.add('reset');
button.classList.add('center');
button.innerText = "reset";
var br2 = document.createElement('br');
document.body.appendChild(br2);
document.body.appendChild(button);

// Add event listener to color input
// Loop and add click event listeners to pixels
var pixels = document.querySelectorAll('.pixel');
for (var i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener('click', colorPick);
}

// Change pixel color
function colorPick(e) {
  color = document.querySelector(".colorInput").value;
  e.target.style.backgroundColor = color;
}


// Reset all listeners. Set colorPicked to black?