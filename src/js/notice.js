import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core'; 

export default function noticeError () {   
const myError = error({
  text: "Too many matches found. Please enter a more specific query!"
});
}