let turno = "X";
let juegoTerminado = false
let tablero = Array(9).fill("");

let botones = document.querySelectorAll(".casilla");

botones.forEach(function(boton, indice){

    boton.onclick = function(){

    if(juegoTerminado){
        return;
    }

    if(tablero[indice] == ""){

        tablero[indice] = turno;
        boton.textContent = turno;

        comprobarGanador();

        turno = turno === "X" ? "O" : "X";
    }

};

});


function comprobarGanador(){

    let combinaciones = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];


    for(let combinacion of combinaciones){

        let a = combinacion[0];
        let b = combinacion[1];
        let c = combinacion[2];


        if(tablero[a] != "" &&
   tablero[a] == tablero[b] &&
   tablero[a] == tablero[c]){

    alert("Ganó " + tablero[a]);
    juegoTerminado = true;
    return;


        }

    }

}
document.getElementById("reiniciar").onclick = function(){

    tablero = Array(9).fill("");

    botones.forEach(function(boton){
        boton.textContent = "";
    });

    turno = "X";
    juegoTerminado = false;

};