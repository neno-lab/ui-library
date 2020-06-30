import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';
import Tabs from './ui/tabs';
import Snackbar from './ui/snackbar';

//pozivanje tooltipa
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.tooltip();

//pozivanje dropdowna
//kod dropdownova sve što je dalje zakomentirano znaci da radi al ne bas najbolje jer crashaje
//const dropdown = new Dropdown(document.querySelectorAll('.trigger'));
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.dropdown();
});

//pozivanje tabsa
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.tabs();

//pozivanje snackbara
const snackbar = new Snackbar();
snackbar.init();

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  snackbar.show('you clicked me :D');
});
