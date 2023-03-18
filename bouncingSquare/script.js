// Get the animation container
const container = document.getElementById("animation-container");


// Set the initial position and velocity of the animation
let x = 0;
let y = 0;
let vx = 5;
let vy = 5;
let color = 0;

// set the random color 
function get_random_color() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    
    document.body.style.backgroundColor = ` #${color}`;

}


// Set the animation loop
setInterval(() => {
  // Update the position of the animation
  x += vx;
  y += vy;
  
  // Check if the animation has hit the right or left side of the screen
  if (x + container.offsetWidth > window.innerWidth || x < 0) {
    vx = -vx; // Reverse the velocity in the x direction
    get_random_color();
    
  }
  
  // Check if the animation has hit the top or bottom of the screen
  if (y + container.offsetHeight > window.innerHeight || y < 0) {
    vy = -vy; // Reverse the velocity in the y direction
    get_random_color();
  }
  
  // Update the position of the animation container
  container.style.left = x + "px";
  container.style.top = y + "px";
}, 1); // Run the animation loop every 20 milliseconds
