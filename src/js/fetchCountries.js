import renderCountryCard from '../js/renderCountryCard'


export default function fetchCountries(searchQuery) {

  console.log(searchQuery.target.value);
  let nameCountry = searchQuery.target.value;


  return fetch(
    `https://restcountries.eu/rest/v2/name/${nameCountry}`)
    .then(response => response.json())
    .then(renderCountryCard)
    .catch(error => console.log(error))
}
