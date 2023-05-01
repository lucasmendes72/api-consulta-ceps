import { consultaCep } from './main.js';

const inputCep = document.getElementById('ep-autocomplete');

inputCep.addEventListener('focusout', () => {
    console.log('funciona');
})

