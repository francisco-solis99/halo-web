import '../css/styles.css';
import '../css/desktop.css';

const menuBtnMobile = document.querySelector('#menu-btn');
const menuLinks = document.querySelector('.links');

const moreBtn = document.querySelector('.more');
const moreMiniMenu = document.querySelector('.more .menu');

menuBtnMobile.onclick = () => menuLinks.classList.toggle('active');


moreBtn.onclick = () => moreMiniMenu.classList.toggle('active');
