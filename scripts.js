console.log('1');


// Selectors
const dropdown = document.querySelector('.menu');
const hidden = document.querySelector('.hidden');
const close = document.querySelector('.close');
const products = document.querySelector('.products')

// Event Listeners
dropdown.addEventListener('click', popUp);
close.addEventListener('click', closeFunction);
products.addEventListener('click', popUp);

//Functions
function popUp() {
    //hidden.style.display = "block";
    hidden.style.transform = "scale(1)";
};



function closeFunction() {
    hidden.style.transform = "scale(0)";
}