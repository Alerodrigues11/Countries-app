async function getDetailsByCountryName(countryName) {
  const contentCountry = document.getElementById('content__country');
  const mainContent = document.getElementById('content');
  const navbar = document.getElementById('navbar')
  const previousPage = document.getElementById('btn')

  let languages = '';

  // Para extrair as informações do objeto "currencies", utiliza-se Object.key para transformar em array

  const countryCurrencies = Object.keys(countryName.currencies);

  // Formatando as línguas

  const countryLanguages = Object.keys(countryName.languages);
  if(countryLanguages.length > 1) {
    countryLanguages.forEach(lang => {
      languages = countryLanguages.map(lang => countryName.languages[lang]).join(', ');
    })
  } else {
    languages = countryName.languages[countryLanguages[0]]
  }
  
  console.log(languages)
  const countryNativeNames = Object.keys(countryName.name.nativeName)

  if(countryName != '') {
    const template = `
    <div class="content__country__section">
      <img class="content__country__flag" src="${countryName.flags.png}" alt="">
      <div class="content__country__main">
        <h2>${countryName.name.common}</h2>
        <div class="content__country__details">
          <p><span>Native Name: </span>${countryName.name.nativeName[countryNativeNames[0]].official}</p>
          <p><span>Population: </span>${countryName.population}</p>
          <p><span>Region: </span>${countryName.region}</p>
          <p><span>Sub Region: </span>${countryName.subregion}</p>
          <p><span>Capital: </span>${countryName.capital}</p>
        </div>
        <div class="content__country__details">
          <p><span>Top Level Domain: </span>${countryName.tld}</p>
          <p><span>Currencies: </span>${countryName.currencies[countryCurrencies[0]].name}</p>
          <p><span>Languages: </span>${languages}</p>
        </div>
      </div>
    </div>`

    contentCountry.innerHTML = template;
    contentCountry.style.display = 'flex';
    previousPage.style.display = 'block'
    mainContent.style.display = 'none';
    navbar.style.display = 'none'
  }
}

const previousPage = document.getElementById('back__btn');

function getBackToTheMainPage() {
  const contentCountry = document.getElementById('content__country');
  const mainContent = document.getElementById('content');
  const navbar = document.getElementById('navbar')
  const backBtn = document.getElementById('btn')

  
  contentCountry.innerHTML = '';
  contentCountry.style.display = 'none';
  backBtn.style.display = 'none'
  mainContent.style.display = 'flex';
  navbar.style.display = 'flex'
}

previousPage.addEventListener('click', getBackToTheMainPage)


export { getDetailsByCountryName }