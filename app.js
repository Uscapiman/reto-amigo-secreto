//Nombre : Cristofer Uscapi Baez
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigo = [];

function agregarAmigo() {
    let textAmigo = document.getElementById('amigo');

    if (textAmigo.value.trim() == "") {
        alert("vacío. Por favor, ingrese un nombre valido.");
    } else {
        arrayAmigo.push(textAmigo.value);
        textAmigo.value = "";
        listarAmigos();
    }
}

function listarAmigos() {
    let listaAmigos = document.getElementById('listAmigos');
    listaAmigos.innerHTML = "";
    arrayAmigo.forEach((amigo) => {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    let indiceamigo = Math.floor(Math.random() * arrayAmigo.length);
    let amigosecreto = document.getElementById('resultado');
    amigosecreto.innerHTML = `El amigo secreto es: ${arrayAmigo[indiceamigo]}`;
}

