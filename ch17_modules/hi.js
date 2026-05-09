
import {  placeHolder, greeting, sayAsalamuAlaikum } from './script.js';
const text = document.getElementById('info');
text.innerHTML = greeting('name') + '<br>' + sayAsalamuAlaikum('name');