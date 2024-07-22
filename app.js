let nRandom = 0;
let intentos = 0;
let listaNúmerosSorteados  = [];
let numeroMáximo = 10;

function asignarTextoElemento(elemento, texto ) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarInvento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(`numero secreto: ${nRandom}`);
    console.log(`Intentos: ${intentos}`);

    if (numeroDeUsuario === nRandom){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else{
        if (numeroDeUsuario > nRandom) {
            asignarTextoElemento('P','el numero secreto es menor');
        } else {
            asignarTextoElemento("P", "el numero secreto es mayor");
        }
        intentos++;
        limpiar_caja();
    }
    return;
}

function limpiar_caja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMáximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNúmerosSorteados);
    //si ya sorteamos todos los números
    if (listaNúmerosSorteados.length == numeroMáximo){
        asignarTextoElemento('p','ya se sortearon todos los números  posibles')
    } else{
        // si el numero generado esta incluido en la lista
        if (listaNúmerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNúmerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMáximo}`);
    nRandom = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiar_caja();
    //indicar mensaje de intervalo de números
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();