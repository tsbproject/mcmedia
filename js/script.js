let h =  "Monday - Satuday 9am - 6pm"
   
    
    document.getElementById("workhour").innerHTML = h;


// Create a new <i> element with classes of "bi" and "bi-clock"
const icon = document.createElement("i");
icon.classList.add("bi", "bi-clock");

// Get the <div> element with an id of "icon"
const iconContainer = document.getElementById("clock");

// Add the icon element to the container
iconContainer.appendChild(clock);


