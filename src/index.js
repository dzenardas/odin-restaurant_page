import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

loadHome();

const homeButton = document.getElementById('home-tab');
const menuButton = document.getElementById('menu-tab');
const contactButton = document.getElementById('contact-tab');

homeButton.addEventListener('click', loadHome);
menuButton.addEventListener('click', loadMenu);
contactButton.addEventListener('click', loadContact);
