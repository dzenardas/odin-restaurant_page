import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const homeButton = document.getElementById('home-tab');
const menuButton = document.getElementById('menu-tab');
const contactButton = document.getElementById('contact-tab');

function setActive(button) {
  const buttons = [homeButton, menuButton, contactButton];
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

loadHome();
setActive(homeButton);

homeButton.addEventListener('click', function() {
    loadHome();
    setActive(homeButton);
});

menuButton.addEventListener('click', function() {
    loadMenu();
    setActive(menuButton);
});

contactButton.addEventListener('click', function() {
    loadContact();
    setActive(contactButton);
});