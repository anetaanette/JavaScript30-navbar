console.log('1');

const dropdown = document.querySelector('.menu');
const hidden = document.querySelector('.hidden');
const close = document.querySelector('.close');

dropdown.addEventListener('click', popUp);

function popUp() {
    //hidden.style.display = "block";
    hidden.style.transform = "scale(1)";
};

close.addEventListener('click', closeFunction);

function closeFunction() {
    hidden.style.transform = "scale(0)";
}