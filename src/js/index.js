import '../css/styles.css';
import '../css/scheme.css';
import '../css/desktop.css';
import {Slider} from './Slider';

// Menu Logic
const menuBtnMobile = document.querySelector('#menu-btn');
const menuLinks = document.querySelector('.links');

const moreBtn = document.querySelector('.more');
const moreMiniMenu = document.querySelector('.more .menu');

menuBtnMobile.onclick = () => menuLinks.classList.toggle('active');
moreBtn.onclick = () => moreMiniMenu.classList.toggle('active');


// Videos Logic
const videos = [
  {
    id: "PyMlV5_HRWk",
  },
  {
    id: "XCbMVbeKlCg",
  },
  {
    id: "Fmdb-KmlzD8",
  },
  {
    id: "lOthvD1rMbQ",
  },
  {
    id: "nXDk86lQhto",
  },
];

const slider = new Slider(videos);
slider.init();

