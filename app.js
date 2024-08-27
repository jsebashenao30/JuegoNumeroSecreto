
let numeroSecreto = 0;
let intentos = 0;
listaNumerosSorteados = [];
numeroMaximo = 10;

// la funcion recibe unos parametros los cuales son textos para asignar a la interfaz ve a condicionesIniciales();
function asignarTextoElemento( elemento, texto ) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento("p",`Acertaste el numero secreto en ${intentos} ${(intentos == 1) ? "vez" : " veces" }`);//template strings //para el cambio de palabra
        document.getElementById("reiniciar").removeAttribute("disabled"); // activar el boton de Nuevo juego
    }else{
        //El usuario acerto
        if (numeroSecreto > numeroDeUsuario){
            asignarTextoElemento("p","El numero secreto es Mayor");
        }else {
            asignarTextoElemento("p","El numero secreto es Menor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = ""; //limpia la caja de los numeros
}

function numeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; // genera el numero aleatorio y lo asigna a la variable numeroGenerado
    console.log(listaNumerosSorteados);


    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles.");
    }else{
        // if si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado) ){
            return numeroAleatorio(); //recursividad: se llama a la funcion asi misma 
        }else{
            listaNumerosSorteados.push(numeroGenerado); //push: metodo para agregar en la lista 
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = numeroAleatorio();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar el mensaje de intervalos de numeros
    //Generar el numero aleatorio
    //Deshabilitar el boton Nuevo juego
    condicionesIniciales();
    //Inicializar el numero de intentos
    document.querySelector("#reiniciar").setAttribute("disabled" , "true"); // funcion para colocar atributo disabled y apagar el boton Nuevo juego
}

/*se llama la funcion y se le asignan los parametros o valores*/
condicionesIniciales();



