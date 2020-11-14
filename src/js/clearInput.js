import getRefs from '../js/refs'
const refs = getRefs()

export default function clearInput() {
  refs.list.innerHTML = '';
}