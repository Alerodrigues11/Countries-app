import { theme } from './theme.js';

async function getCountries() {
  const response = await (await fetch('https://restcountries.com/v3.1/all')).json();
  console.log(response)
  response.forEach(addCountries);
}

async function addCountries(data) {

  // main section
  const content = document.querySelector('.content');

  // first div
  const firstDiv = document.createElement('div');
  firstDiv.classList.add('content__card');

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

const themeBtn = document.getElementById('themeSwitcher').addEventListener('click', theme)