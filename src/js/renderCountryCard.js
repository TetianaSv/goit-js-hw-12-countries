import getRefs from '../js/refs'
import clearInput from './clearInput'
import CardTmpl from '../templates/tmpl.hbs'
import CardTmpl2 from '../templates/tmpl2.hbs'
import makeMarkup from './makeMarkup'
import noticeError from './notice'

const refs = getRefs()

export default function renderCountryCard(countries) {

  refs.list.innerHTML = '';
 
     if (countries.length > 10) {
 
         noticeError()
         clearInput()
     }
 
     else if (countries.length === 1) {
 
         clearInput()
         const markup = CardTmpl(countries)
         makeMarkup(markup);
     }
         
     else if (countries.length >= 2 && countries.length <= 10) {
       clearInput()
       const markupList = CardTmpl2(countries)
       const countriesAll = countries.map(name => CardTmpl2(name)).join(' ');
       makeMarkup(markupList)
     }
     
     else if (countries.length === 0) {
         clearInput()
     };
 }