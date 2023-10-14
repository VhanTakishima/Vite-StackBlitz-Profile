import { cardContainer } from "./cardButtonFlip";

// Function to show the color picker form
function showColorPicker() {
  const colorPickerForm = document.getElementById("colorpicker");
  colorPickerForm.style.opacity = "1";
}

// Function to hide the color picker form
function hideColorPicker() {
  const colorPickerForm = document.getElementById("colorpicker");
  colorPickerForm.style.opacity = "0";
}

// Event listener for the "Themes" link to show the color picker form
const themesLink = document.getElementById("themesLink");
themesLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  showColorPicker(); // Show the color picker form
});

// Timer to hide the color picker form after 10 seconds of inactivity
let timer; // Declare a timer variable

// Function to start the timer
function startTimer() {
  timer = setTimeout(() => {
    hideColorPicker(); // Hide the color picker form
  }, 1000); // 1 seconds (1000 milliseconds)
}

// Event listeners to reset the timer on user interaction
const colorPickerForm = document.getElementById("colorpicker");
colorPickerForm.addEventListener("mouseover", () => {
  clearTimeout(timer); // Clear the timer
});

colorPickerForm.addEventListener("mouseout", () => {
  startTimer(); // Restart the timer on mouseout
});

// Initially start the timer
startTimer();
hideColorPicker();


// Get all radio buttons
const themeRadios = document.querySelectorAll('input[type="radio"][name="theme"]');

// Get the image element
const myPhoto = document.querySelector('.myphoto');

// Add change event listeners to radio buttons
themeRadios.forEach((radio) => {
    radio.addEventListener('change', function() {
        if (this.id === 'default') {
            myPhoto.src = 'public/BGRHS.png';
        } else if (this.id === 'blue') {
            myPhoto.src = 'public/BGRHSBlue.png';
        }
        else if (this.id === 'green') {
          myPhoto.src = 'public/BGRHSGreen.png';
        }
        else if (this.id === 'light') {
          myPhoto.src = 'public/BGRHSLight.png';
        }
        else if (this.id === 'orange') {
          myPhoto.src = 'public/BGRHSOrange.png';
        }
        // Add conditions for other themes here
    });
});cardContainer.addEventListener("click", (clickToFlip) => {

    if (clickToFlip.target.classList.contains(".cardFlipper")) {
        const cardInner = clickToFlip.target.closest(".card").querySelector(".card-inner");
        cardInner.style.transform = "rotateY(180deg)";
    }
});

