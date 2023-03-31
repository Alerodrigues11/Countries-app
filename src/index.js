import { theme } from './theme.js';
import { getDetailsByCountryName } from './post.js';

const content = document.querySelector('.content');

async function getCountries() {
  const response = await (await fetch('https://restcountries.com/v3.1/all')).json();
  console.log(response)
  response.forEach(addCountries);
}

async function addCountries(data) {

  // first div
  const firstDiv = document.createElement('a');
  firstDiv.classList.add('content__card');
  firstDiv.dataset.region = data.region;

  firstDiv.addEventListener('click', function(event) {
    getDetailsByCountryName(data)
  });

  const img = document.createElement('img');
  img.classList.add('img');
  img.src = data.flags.png

  // second div
  const secondDiv = document.createElement('div');
  secondDiv.classList.add('content__details');

  const h3 = document.createElement('h3');
  h3.classList.add('country__title');
  h3.textContent = data.name.common;

  const firstTagSpan = document.createElement('span');
  const secondTagSpan = document.createElement('span');
  const thirdTagSpan = document.createElement('span');
  const fourthTagSpan = document.createElement('span');

  const firstParagraph = document.createElement('p');
  firstParagraph.classList.add('population__title');
  
  const firstParagraphText = document.createTextNode(`População: `);
  firstParagraph.appendChild(firstParagraphText);
  firstTagSpan.textContent = data.population;
  firstParagraph.appendChild(firstTagSpan);
    
  const secondParagraph = document.createElement('p');
  secondParagraph.classList.add('region__title');
  
  const secondParagraphText = document.createTextNode(`Região: `);
  secondParagraph.appendChild(secondParagraphText);
  secondTagSpan.textContent = data.region;
  secondParagraph.appendChild(secondTagSpan);
  
  const thirdParagraph = document.createElement('p');
  thirdParagraph.classList.add('capital__title');
  
  const thirdParagraphText = document.createTextNode(`Capital: `);
  thirdParagraph.appendChild(thirdParagraphText);
  thirdTagSpan.textContent = data.capital;
  thirdParagraph.appendChild(thirdTagSpan);
  
  secondDiv.append(h3, firstParagraph, secondParagraph, thirdParagraph)
  
  firstDiv.append(img, secondDiv);  

  content.appendChild(firstDiv)

}

getCountries();

// THEME

const themeBtn = document.getElementById('themeSwitcher').addEventListener('click', theme)

// FILTER

async function getCountriesByContinent(continent) {
  const response = await (await fetch('https://restcountries.com/v3.1/all')).json();

  if(continent.value != '') {
    if(filterSearch.value != '') {
      const filteredResponse = response.filter(country => country.region === continent.value && country.name.common === filterSearch.value);
      filteredResponse.forEach(addCountries);
    } else {
      const filteredResponse = response.filter(country => country.region === continent.value);
      filteredResponse.forEach(addCountries);
    }
  } else {
    response.forEach(addCountries)
  }

}

const filterBtn = document.getElementById('filter');

filterBtn.addEventListener('change', () => {
  content.innerHTML = '';
  getCountriesByContinent(filterBtn)
})

// SEARCH

async function getCountriesByName(name) {
  const response = await (await fetch('https://restcountries.com/v3.1/all')).json();

  if(name.value != '') {
    if(filterBtn.value != '') {
      const filteredResponse = response.filter(country => country.name.common === name.value && country.region === filterBtn.value);
      filteredResponse.forEach(addCountries);
    } else {
      const filteredResponse = response.filter(country => country.name.common === name.value);
      filteredResponse.forEach(addCountries);
    }
  } else {
    response.forEach(addCountries)
  }

}

const filterSearch = document.getElementById('search');

filterSearch.addEventListener('input', () => {
  getCountriesByName(filterSearch)
  content.innerHTML = '';
})