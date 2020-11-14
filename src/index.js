import fetchCountries from '../src/js/fetchCountries'
import getRefs from '../src/js/refs'
import '../src/style.css'
import {debounce} from 'lodash'

const refs = getRefs()

refs.inputForm.addEventListener('input', debounce(fetchCountries, 500));





