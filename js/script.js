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

// PORTFOLIO CAROUSEL
let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})




// Get the navbar collapse div and the navbar-toggler button
var navbarCollapse = document.querySelector('#navbarNav');
var navbarToggler = document.querySelector('.navbar-toggler');

// Set the initial state of the navbar collapse div to closed
navbarCollapse.classList.add('collapse');

// Add an event listener to the navbar-toggler button to toggle the navbar collapse div
navbarToggler.addEventListener('click', function() {
  if (navbarCollapse.classList.contains('show')) {
    // If the navbar collapse div is open, close it
    navbarCollapse.classList.remove('show');
    navbarCollapse.classList.add('collapse');
  } else {
    // If the navbar collapse div is closed, open it and position it to the right
    navbarCollapse.classList.remove('collapse');
    navbarCollapse.classList.add('show', 'position-absolute', 'top-0', 'end-0');
  }
});






