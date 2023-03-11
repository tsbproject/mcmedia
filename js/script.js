 // DISPLAYING BOTH THE WORKING HOUR ICON AND TEXT IN THE HEADER

 // Displaying the working hour text 
let h =  "Monday - Saturday 9am - 6pm"
document.getElementById("workhour").innerHTML = h;

// Create a new <i> element with classes of "bi" and "bi-clock"
const icon = document.createElement("i");
icon.classList.add("bi", "bi-clock");

// Get the <div> element with an id of "icon"
const iconContainer = document.getElementById("clock");

// Add the icon element to the container
iconContainer.appendChild(clock);




// DROPDOWN MENU ANMATION

// Get all the dropdown menus on the page
const dropdowns = document.querySelectorAll(".dropdown");

// Loop through each dropdown menu
dropdowns.forEach((dropdown) => {
  // Get the dropdown menu and the dropdown toggle button
  const menu = dropdown.querySelector(".dropdown-menu");
  const toggle = dropdown.querySelector(".dropdown-toggle");

  // Add an event listener to the toggle button to trigger the animation
  toggle.addEventListener("click", () => {
    menu.classList.add("show", "animated");
  });

  // Add an event listener to the dropdown menu to remove the animation classes when it is hidden
  menu.addEventListener("animationend", () => {
    menu.classList.remove("show", "animated");
  });
});








const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', function() {
  navbarToggler.classList.toggle('active');
});