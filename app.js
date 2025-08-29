// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function limpiarTexto() {
    document.querySelector('#amigo').value = '';
}

function limpiarElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    /*Capturar el valor del campo de entrada*/
    let nombreIngresado = document.getElementById('amigo').value;

    /*Validar la entrada*/
    if (nombreIngresado.trim() === "" || !isNaN(nombreIngresado)) {
        alert("Por favor, inserte un nombre.");
    } else {
        if (amigos.includes(nombreIngresado)) {
            alert('Ya escribiste ese nombre. ¡Intenta con otro!')
        } else {
            /*Actualizar el array de amigos*/
            amigos.push(nombreIngresado);
        }
    }

    /*Limpiar el campo de entrada*/
    limpiarTexto('#amigo');

    /* Limpiar resultado*/
    limpiarElemento('#resultado', "");

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
    /*Validar que haya amigos disponibles*/
    if (amigos.length > 0) {
        /*Generar un índice aleatorio: */
        let indiceAleatorio = Math.floor(Math.random() * amigos.length) + 1;
        console.log(indiceAleatorio);

        /*Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.*/
        let amigoAleatorio = amigos[indiceAleatorio];

        /*Mostrar el resultado innerHTML para mostrar el amigo sorteado.*/
        let resultadoHTML = document.getElementById('resultado');
        resultadoHTML.innerHTML = amigoAleatorio;

        /*Limpiar listado HTML de amigos*/
        limpiarElemento('#listaAmigos', "");

        /*Limpiar array de amigos*/
        amigos = [];
    } else {
        alert("Escribe al menos 2 nombres para el sorteo.");
    }
}