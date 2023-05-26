// HEADER FIXED TOP
$(document).ready(function() {
  var lastScrollPosition = 0;
  $(window).scroll(function() {
    var currentScrollPosition = $(this).scrollTop();
    if (currentScrollPosition > lastScrollPosition) {
      // Scrolling down
      $('.fixed-top').removeClass('fixed-top-transparent');
    } else {
      // Scrolling up
      $('.fixed-top').addClass('fixed-top-transparent');
    }
    lastScrollPosition = currentScrollPosition;
  });
});

// MAKING FOOTER FADEIN AND OUT ON SCROLLING UP AND DOWN

$(document).ready(function() {
  var lastScrollPosition = 0;
  $(window).scroll(function() {
    var currentScrollPosition = $(this).scrollTop();
    if (currentScrollPosition > lastScrollPosition) {
      // Scrolling down
      $('.footer').fadeOut();
    } else {
      // Scrolling up
      $('.footer').fadeIn();
    }
    lastScrollPosition = currentScrollPosition;
  });
});
/*
$(document).ready(function() {
  var footer = $('footer');
  var windowHeight = $(window).height();
  var bodyHeight = $(document).height() - windowHeight;

  $(window).scroll(function() {
    var scrollPosition = $(this).scrollTop();

    // Calculate the remaining scroll distance to the bottom of the page
    var remainingScroll = bodyHeight - scrollPosition;

    if (remainingScroll <= 0) {
      // Reached the end of scrolling down, fade in the footer
      footer.fadeIn();
    } else if (scrollPosition <= 0) {
      // Scrolling up, fade out the footer
      footer.fadeOut();
    }
  });
});
*/








// PORTFOLIO CAROUSEL
$('.multicarousel').on('slide.bs.carousel', function (event) {
  var $next = $(event.relatedTarget);
  var $target = $('.carousel-inner', event.target);
  var $width = $next.width();

  if (!$target.is(':animated')) {
    $target.animate({scrollLeft: $next.position().left}, 500);
  }
});









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






