const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const bars = document.getElementById('bars');
const x = document.getElementById('x');

menuToggle.addEventListener('click', () => {
  // Toggle the menu visibility
  menu.classList.toggle('active');

  // Toggle between hamburger and X icon
  if (bars.style.display === "none") {
    bars.style.display = "block";  // Show hamburger
    x.style.display = "none";      // Hide X
  } else {
    bars.style.display = "none";   // Hide hamburger
    x.style.display = "block";     // Show X
  }
});
