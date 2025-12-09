import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

loadHome();

const homeBtn = document.getElementById('home-tab');
const menuBtn = document.getElementById('menu-tab');
const contactBtn = document.getElementById('contact-tab');

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
contactBtn.addEventListener('click', loadContact);
