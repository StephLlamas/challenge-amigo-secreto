// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function limpiarTexto() {
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    /*Capturar el valor del campo de entrada*/
    let nombreIngresado = document.getElementById('amigo').value;

    /*Validar la entrada*/
    if (nombreIngresado.trim() === "" || !isNaN(nombreIngresado)) {
        alert("Por favor, inserte un nombre.");
    } else {
        /*Actualizar el array de amigos*/
        amigos.push(nombreIngresado);
    }
    
    /* Limpiar el campo de entrada*/
    limpiarTexto();

    mostrarAmigos();
}

function mostrarAmigos() {
    /*Obtener el elemento de la lista*/
    let listaAmigos = document.getElementById('listaAmigos');

    /*Limpiar la lista existente*/
    listaAmigos.innerHTML = '';

    /*Iterar sobre el arreglo*/
    for (let i = 0; i < amigos.length; i++) {
        const amigo = document.createElement('li');

        /*Agregar elementos a la lista*/
        amigo.textContent = amigos[i];
        listaAmigos.appendChild(amigo);
    }
}

function sortearAmigo() {
    
}