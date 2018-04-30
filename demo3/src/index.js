import './style.css'
import { cube } from './math.js';

function component() {
    var element = document.createElement('div');

    // element.innerHTML = "Hello webpack";
    element.innerHTML = [
             'Hello webpack!',
             '5 cubed is equal to ' + cube(5)
           ].join('\n\n');


    element.classList.add('hello');
    return element;
}

  document.body.appendChild(component());
