import fetchCountries from '../js/fetchCountries'
import getRefs from '../js/refs'
import { debounce } from 'lodash'
import CardTmpl from '../templates/tmpl.hbs'
import CardTmpl2 from '../templates/tmpl2.hbs'

const refs = getRefs()
// console.log(refs)
refs.inputForm.addEventListener('input', _.debounce(fetchCountries, 500));


export default function renderCountryCard(countries) {

 refs.list.InnerHTML = ' ';

    if (countries.length > 10) {
        
        console.log('Sorry, its too much')
        clearInput()
    }
    else if (countries.length === 1) {
        
    // console.log(countries);
        clearInput()
        const markup = CardTmpl(countries)
        
        makeMarkup(markup);
        
    }
    else if (countries.length >= 2 && countries.length <= 10) {
       clearInput()
          const markupList = CardTmpl2(countries)
        const countriesAll = countries.map(name => CardTmpl2(name)).join(' ');
        console.log(countriesAll)
        
        makeMarkupList(markupList)
    } else {
        clearInput()
    }

}

function makeMarkup(markup) {
    refs.list.insertAdjacentHTML('beforeend', markup);
}
function makeMarkupList(markupList) {
    refs.list.insertAdjacentHTML('beforeend', markupList);
}

function clearInput() {
   refs.list.InnerHTML = ' ';
}
// function markupTwoFn(country) {
//     const markup = CardTmplTwo(country);
//     inAdHtml(markup);
//     if (country.length > 10) {
//       noticeError(country.length)
//     } 
// }

