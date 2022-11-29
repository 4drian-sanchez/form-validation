import { patternSoloLetras,
         inputSubmit } from './variables.js'

import { mensaje,
         limpiarAlerta } from './functions.js'

const formObj = {
    name: '',
    lastName: '',
    age: ''
};

export const validation = ( e ) => {

    if(e.target.id === 'age' && e.target.value.trim() === '') {
        mensaje(` La ${e.target.name} es necesaria`, e.target.parentElement);
        formObj[e.target.id] = '';
        formValidation()
        return; 
    };

    if( Number(e.target.value.trim()) < 12 && e.target.id === 'age') {
        mensaje( 'Debes de tener almenos 12 años para enviar el formulario', e.target.parentElement )
        formObj[e.target.id] = '';
        formValidation()
        return;
    };
    
    if(e.target.value.trim() === '') {
        mensaje(` El ${e.target.name} es necesario`, e.target.parentElement);
        formObj[e.target.id] = '';
        formValidation()
        return; 
    };

    if(e.target.id === 'name' && !patternSoloLetras.test(e.target.value)) {
        mensaje( 'No puedes introducir numeros o caracteres especiales', e.target.parentElement );
        formObj[e.target.id] = '';
        formValidation()
        return;
    }

    if(e.target.id === 'lastName' && !patternSoloLetras.test(e.target.value)) {
        mensaje( 'No puedes introducir numeros o caracteres especiales', e.target.parentElement );
        formObj[e.target.id] = '';
        formValidation()
        return;
    }

    if(e.target.id === 'name' && Number(e.target.value.length) < 3 ||
        e.target.id === 'lastName' && Number(e.target.value.length) < 3) {
        mensaje('Introduzca almenos 3 letras', e.target.parentElement)
        formObj[e.target.id] = '';
        formValidation()
        return;
    }
    limpiarAlerta( e.target.parentElement );
    formObj[e.target.id] = e.target.value;
    
    formValidation() 
}

function formValidation() {
    if(Object.values( formObj ).includes('')) {
        inputSubmit.disabled = true;
        inputSubmit.classList.add('opacity', 'not-allowed');
        return;
    }

    inputSubmit.disabled = false;
    inputSubmit.classList.remove('opacity', 'not-allowed');
}