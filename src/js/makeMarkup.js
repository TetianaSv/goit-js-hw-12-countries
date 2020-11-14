import getRefs from '../js/refs'
const refs = getRefs()

export default function makeMarkup(html) {
  refs.list.insertAdjacentHTML('beforeend', html);
}