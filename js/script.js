// == DEFINIMOS CUBO == //
class Carta {
constructor (arg1, arg2) {
    this.valor=parseFloat(arg1);
    this.url=arg2;
}

}

// == CREACION DE OBJETOS (CARTAS) == //
var carta1 = new Carta(1, "images/1espadas.png");           // 1 de Espadas; valor carta = 1      
var carta2 = new Carta(2, "images/2espadas.png");           // 2 de Espadas; valor carta = 2
var carta3 = new Carta(3, "images/3espadas.png");           // 3 de Espadas; valor carta = 3
var carta4 = new Carta(4, "images/4espadas.png");           // 4 de Espadas; valor carta = 4
var carta5 = new Carta(5, "images/5espadas.png");           // 5 de Espadas; valor carta = 5
var carta6 = new Carta(6, "images/6espadas.png");           // 6 de Espadas; valor carta = 6
var carta7 = new Carta(7, "images/7espadas.png");           // 7 de Espadas; valor carta = 7
var carta8 = new Carta(0.5, "images/10espadas.png");        // Sota de Espadas; valor carta = 0.5
var carta9 = new Carta(0.5, "images/caballoespadas.png");   // Caballo de Espadas; valor carta = 0.5
var carta10 = new Carta(0.5, "images/reyespadas.png");      // Rey de Espadas; valor carta = 0.5
var carta11 = new Carta(1, "images/1copas.png");            // 1 de Copas; valor carta = 1     
var carta12 = new Carta(2, "images/2copas.png");            // 2 de Copas; valor carta = 2
var carta13 = new Carta(3, "images/3copas.png");            // 3 de Copas; valor carta = 3
var carta14 = new Carta(4, "images/4copas.png");            // 4 de Copas; valor carta = 4
var carta15 = new Carta(5, "images/5copas.png");            // 5 de Copas; valor carta = 5
var carta16 = new Carta(6, "images/6copas.png");            // 6 de Copas; valor carta = 6  
var carta17 = new Carta(7, "images/7copas.png");            // 7 de Copas; valor carta = 7
var carta18 = new Carta(0.5, "images/sotacopas.png");       // Sota de Copas; valor carta = 0.5
var carta19 = new Carta(0.5, "images/caballocopas.png");    // Caballo de Copas; valor carta = 0.5    
var carta20 = new Carta(0.5, "images/reycopas.png");        // Rey de Copas; valor carta = 0.5   
var carta21 = new Carta(1, "images/1oros.png");             // 1 de Oros; valor carta = 1       
var carta22 = new Carta(2, "images/2oros.png");             // 2 de Oros; valor carta = 2
var carta23 = new Carta(3, "images/3oros.png");             // 3 de Oros; valor carta = 3
var carta24 = new Carta(4, "images/4oros.png");             // 4 de Oros; valor carta = 4
var carta25 = new Carta(5, "images/5oros.png");             // 5 de Oros; valor carta = 5
var carta26 = new Carta(6, "images/6oros.png");             // 6 de Oros; valor carta = 6
var carta27 = new Carta(7, "images/7oros.png");             // 7 de Oros; valor carta =7
var carta28 = new Carta(0.5, "images/sotaoros.png");        // Sota de Oros; valor carta = 0.5
var carta29 = new Carta(0.5, "images/caballooros.png");     // Caballo de Oros; valor carta = 0.5
var carta30 = new Carta(0.5, "images/reyoros.png");         // Rey de Oros; valor carta = 0.5    
var carta31 = new Carta(1, "images/1Bastos.png");           // 1 de Bastos; valor carta = 1 
var carta32 = new Carta(2, "images/2Bastos.png");           // 2 de Bastos; valor carta = 2
var carta33 = new Carta(3, "images/3Bastos.png");           // 3 de Bastos; valor carta = 3
var carta34 = new Carta(4, "images/4Bastos.png");           // 4 de Bastos; valor carta = 4
var carta35 = new Carta(5, "images/5Bastos.png");           // 5 de Bastos; valor carta = 5
var carta36 = new Carta(6, "images/6Bastos.png");           // 6 de Bastos; valor carta = 6
var carta37 = new Carta(7, "images/7Bastos.png");           // 7 de Bastos; valor carta =7
var carta38 = new Carta(0.5, "images/SotaBastos.png");      // Sota de Bastos; valor carta = 0.5
var carta39 = new Carta(0.5, "images/CaballoBastos.png");   // Caballo de Bastos; valor carta = 0.5
var carta40 = new Carta(0.5, "images/ReyBastos.png");       // Rey de Bastos; valor carta = 0.5

// == CREAMOS ARRAY QUE CONTIENE TODOS LOS OBJETOS == //
var arrayCartas=[carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10,
                carta11,carta12,carta13,carta14,carta15,carta16,carta17,carta18,carta19,carta20,
                carta21,carta22,carta23,carta24,carta25,carta26,carta27,carta28,carta29,carta30,
                carta31,carta32,carta33,carta34,carta35,carta36,carta37,carta38,carta39,carta40];



          
var juegoTerminado = false;
var valorMax=0;

function SacarCarta() {
    // == JUGADOR ACABA == // (IA)
    /* Cuando el jugador se ha pasado de 7.5 no deja sacar más cartas */
    if(valorMax>=7.5){
        return;
    }

    // == NO DEJAR SACAR CARTA AL USUARIO == //
    if(juegoTerminado){
        return;
    }

    // == CREAMOS una nueva etiqueta <img> == //
    var nuevaImagen = document.createElement("img");

    // == LE ASIGNAMOS LA RUTA A LA CARTA == //
    var cartaAleatoria = Math.floor(Math.random() * arrayCartas.length);
    var elegido = arrayCartas[cartaAleatoria];

    nuevaImagen.src = elegido.url;

    arrayCartas.splice(cartaAleatoria, 1); //array.splice(indice, cantidad);cantidad: Cuántos elementos quieres eliminar a partir de ahí (en nuestro caso, suele ser 1).
    console.log(arrayCartas.length);
    document.getElementById("tapete").appendChild(nuevaImagen);
    
    valorMax+=elegido.valor;

    if(valorMax>7.5){
        document.getElementById("ganador").innerHTML="Gana la banca. ¡Te pasaste!"
        juegoTerminado=true;
    }
    

}

var valorMaxMaqui = 0;
function Plantarse(){
    if(valorMax>7.5){
        return;
    }
    if(juegoTerminado){
        return;
    }
    while(valorMaxMaqui<=5){
        var nuevaImagen = document.createElement("img");
        var cartaAleatoria = Math.floor(Math.random() * arrayCartas.length);
        var elegido = arrayCartas[cartaAleatoria];

        nuevaImagen.src = elegido.url;

        arrayCartas.splice(cartaAleatoria, 1); 
        document.getElementById("maquina").appendChild(nuevaImagen);
    
        valorMaxMaqui+=elegido.valor;
    }

    if(valorMaxMaqui>7.5){
        document.getElementById("ganador").innerHTML="¡Ganaste!";
    }
    else if(valorMax== valorMaxMaqui){
        document.getElementById("ganador").innerHTML="Empate. Gana la banca. ¡HAS PERDIDO!";
    }
    else if(valorMaxMaqui> valorMax){
        document.getElementById("ganador").innerHTML="Gana la banca";
    }
    else{
        document.getElementById("ganador").innerHTML="¡Ganaste!";
    }
    juegoTerminado=true;
}

