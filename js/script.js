




        //shrinking navbar. logo and Navlinks while scrolling up
$(document).ready(function () {
  var previousScroll = 0;
  var $headerNav = $('#header-nav');
  var $logoImg = $('#logo-img');
  var $navList = $('#nav-list');
  var $workHour = $('#workhour');
  var $clockNew = $('#clocknew')

  $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();

      if (currentScroll > previousScroll) {
          // Scrolling down
          $headerNav.css('height', '70px');
          $headerNav.css('padding', '10px 0');
          $logoImg.css('max-height', '40px');
          $workHour.addClass('shrink');
          $clockNew.addClass('shrink');

          $navList.addClass('shrink');
      } else {
          // Scrolling up
          $headerNav.css('height', '150px');
          $headerNav.css('padding', '20px 0');
          $logoImg.css('max-height', '100px');
          $navList.removeClass('shrink');
          $workHour.removeClass('shrink');
          $clockNew.removeClass('shrink');
      }

      previousScroll = currentScroll;
  });
});










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


// MAKING FOOTER FADEIN AND OUT ON SCROLLING UP AND DOWN

// Get the footer and body content elements
const footer = document.querySelector('footer');
const bodyContent = document.querySelector('.body-content');

let lastScrollPosition = window.pageYOffset;
const footerHeight = footer.offsetHeight;

// Function to handle the scroll event
const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    bodyContent.style.transform = 'translateY(100%)';
  } else {
    // Scrolling up
    bodyContent.style.transform = `translateY(${footerHeight}px)`;
  }

  lastScrollPosition = currentScrollPosition;

  // Check if reached the end of the body content
  const bodyContentBottom = bodyContent.offsetTop + bodyContent.offsetHeight;
  const windowBottom = currentScrollPosition + window.innerHeight;

  if (bodyContentBottom < windowBottom) {
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
};

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);


    








