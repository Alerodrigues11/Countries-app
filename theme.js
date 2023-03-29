const main = document.querySelector('.main');
const root = document.querySelector(':root');
const icon = document.getElementById('icon');

function theme() {
  if(main.dataset.theme == 'dark') {
    root.style.setProperty('--bg-color', '#FFFFFF');
    root.style.setProperty('--bg-header-color', '#ffffffe1');
    root.style.setProperty('--input-border', '#ccc');
    root.style.setProperty('--font-title-color', '#54631D');
    root.style.setProperty('--placeholder-bg-color', '#FFFFFF');
    root.style.setProperty('--placeholder-text-color', '#8d8c8c');
    root.style.setProperty('--content-card-bg-color', '#F7F3F3');
    root.style.setProperty('--content-country-title', '#030303');
    root.style.setProperty('--content-text-color', '#181818');
    root.style.setProperty('--content-span-text-color', '#181818');
    root.style.setProperty('--content-card-box-shadow', '#181818');

    icon.classList.remove('fa-sun');
    icon.classList.remove('sun-icon');
    icon.classList.add('fa-moon');
    icon.classList.add('moon-icon');

    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#3B0530');
    root.style.setProperty('--bg-header-color', '#520844');
    root.style.setProperty('--input-border', '#ccc');
    root.style.setProperty('--font-title-color', '#F5EAEA');
    root.style.setProperty('--placeholder-bg-color', '#520844');
    root.style.setProperty('--placeholder-text-color', '#F5EAEA');
    root.style.setProperty('--content-card-bg-color', '#520844');
    root.style.setProperty('--content-country-title', '#F5EAEA');
    root.style.setProperty('--content-text-color', '#D3D0D0');
    root.style.setProperty('--content-span-text-color', '#F5EAEA');
    root.style.setProperty('--content-card-box-shadow', '#ccc');

    icon.classList.remove('fa-moon');
    icon.classList.remove('moon-icon');
    icon.classList.add('fa-sun');
    icon.classList.add('sun-icon');

    main.dataset.theme = 'dark'
  }
}

export { theme }