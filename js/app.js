import {d,
        inputs, 
        h1} from './variables.js';

import { animaciones } from './functions.js'

import { validation } from './validator1.js'

d.addEventListener('DOMContentLoaded', () => {

    inputs.forEach( input => {
        input.addEventListener('input', validation)
    });

    animaciones()

})
