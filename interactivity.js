// Variables

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// -- hamburger menu
// onClick of the hamburger, the menu will display.

hamburger.addEventListener("click", () => {
    console.log("It is clicked");
    menu.classList.toggle("active");
    
});