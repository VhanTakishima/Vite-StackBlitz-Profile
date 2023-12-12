

// Function to show the color picker form
function showColorPicker() {
  const colorPicker = document.querySelector('.colorpicker');
  colorPicker.style.display = "flex";
  colorPicker.style.transform = 'translateY(5%)';
  colorPicker.classList.remove('hidden');
  colorPicker.classList.add('visible');
}

// Function to hide the color picker form
function hideColorPicker() {
  const colorPicker = document.querySelector('.colorpicker');
  colorPicker.style.transform = 'translateY(-100%)';
  colorPicker.classList.remove('visible');
  colorPicker.classList.add('hidden');
}

// Event listener for the "Themes" link to show the color picker form
const themesLink = document.getElementById("themesLink");
themesLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  showColorPicker(); // Show the color picker form
  clearTimeout(timer); // Clear the timer
  startTimer(); // Restart the timer on mouseout
});

// Timer to hide the color picker form after 10 seconds of inactivity
let timer; // Declare a timer variable

// Function to start the timer
function startTimer() {
  timer = setTimeout(() => {
    hideColorPicker(); // Hide the color picker form
  }, 3000); // 1 seconds (1000 milliseconds)
}

// Event listeners to reset the timer on user interaction
const colorPicker = document.querySelector('.colorpicker');
colorPicker.addEventListener("mouseover", () => {
  clearTimeout(timer); // Clear the timer
});

colorPicker.addEventListener("mouseout", () => {
  startTimer(); // Restart the timer on mouseout
});

// Initially start the timer
startTimer();
hideColorPicker();

// Get all radio buttons
const themeRadios = document.querySelectorAll('input[type="radio"][name="theme"]');

// Get the image element
const myPhoto = document.querySelector('.myphoto');

const colorThemes  = document.querySelectorAll('[name="theme"]')
//writing in localStorage
const writeTheme =function(theme){
 localStorage.setItem("activatedTheme",theme)};
//getting theme from localStorage when page reloads
 const getTheme = function(){
  const lastSavedTheme = localStorage.getItem("activatedTheme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === lastSavedTheme){
      themeOption.checked = true;
    }
  });
  };
//eventlistener
colorThemes.forEach(themeOption => {
themeOption.addEventListener("click",() =>
{writeTheme(themeOption.id)})
});

document.onload = getTheme();
