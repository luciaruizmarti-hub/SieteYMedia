// -------------------------------------------- FUNCIONAMIENTO DEL VIDEOJUEGO (SIETE Y MEDIA) -------------------------------------------- //

// == DEFINIMOS CUBO == //
class Carta {
constructor (arg1, arg2) {
    this.valor=parseFloat(arg1);
    this.url=arg2;
}

}

// == CREACION DE OBJETOS (CARTAS) == //

/* AS | valor carta = 1 */
var carta1 = new Carta(1, "cartas/AsCorazones.png");           
var carta2 = new Carta(1, "cartas/AsDiamantes.png");           
var carta3 = new Carta(1, "cartas/AsTrebol.png");           
var carta4 = new Carta(1, "cartas/AsPicas.png");  

/* Dos | valor carta = 2 */
var carta5 = new Carta(2, "cartas/DosCorazones.png");           
var carta6 = new Carta(2, "cartas/DosDiamantes.png");           
var carta7 = new Carta(2, "cartas/DosTrebol.png");          
var carta8 = new Carta(2, "cartas/DosPicas.png"); 

/* Tres | valor carta = 3 */
var carta9 = new Carta(3, "cartas/TresCorazones.png");   
var carta10 = new Carta(3, "cartas/TresDiamantes.png");     
var carta11 = new Carta(3, "cartas/TresTrebol.png");             
var carta12 = new Carta(3, "cartas/TresPicas.png");    

/* Cuatro | valor carta = 4 */
var carta13 = new Carta(4, "cartas/CuatroCorazones.png");            
var carta14 = new Carta(4, "cartas/CuatroDiamantes.png");            
var carta15 = new Carta(4, "cartas/CuatroTrebol.png");            
var carta16 = new Carta(4, "cartas/CuatroPicas.png"); 

/* Cinco | valor carta = 5 */
var carta17 = new Carta(5, "cartas/CincoCorazones.png");            
var carta18 = new Carta(5, "cartas/CincoDiamantes.png");       
var carta19 = new Carta(5, "cartas/CincoTrebol.png");     
var carta20 = new Carta(5, "cartas/CincoPicas.png"); 

/* Seis | valor carta = 6 */
var carta21 = new Carta(6, "cartas/SeisCorazones.png");                   
var carta22 = new Carta(6, "cartas/SeisDiamantes.png");           
var carta23 = new Carta(6, "cartas/SeisTrebol.png");             
var carta24 = new Carta(6, "cartas/SeisPicas.png");  

/* Siete | valor carta = 7*/
var carta25 = new Carta(7, "cartas/SieteCorazones.png");             
var carta26 = new Carta(7, "cartas/SieteDiamantes.png");            
var carta27 = new Carta(7, "cartas/SieteTrebol.png");            
var carta28 = new Carta(7, "cartas/SietePicas.png");  

/* J | valor cartas = 0.5 */
var carta29 = new Carta(0.5, "cartas/JCorazones.png");     
var carta30 = new Carta(0.5, "cartas/JDiamantes.png");           
var carta31 = new Carta(0.5, "cartas/JTrebol.png");           
var carta32 = new Carta(0.5, "cartas/JPicas.png");  

/* Q | valor cartas = 0.5 */
var carta33 = new Carta(0.5, "cartas/QCorazones.png");          
var carta34 = new Carta(0.5, "cartas/QDiamantes.png");           
var carta35 = new Carta(0.5, "cartas/QTrebol.png");           
var carta36 = new Carta(0.5, "cartas/QPicas.png"); 

/* K | valor carta = 0.5 */
var carta37 = new Carta(0.5, "cartas/KCorazones.png");           
var carta38 = new Carta(0.5, "cartas/KDiamantes.png");      
var carta39 = new Carta(0.5, "cartas/KTrebol.png");  
var carta40 = new Carta(0.5, "cartas/KPicas.png");  


// == CREAMOS ARRAY QUE CONTIENE TODOS LOS OBJETOS == //
var arrayCartas=[carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10,
                carta11,carta12,carta13,carta14,carta15,carta16,carta17,carta18,carta19,carta20,
                carta21,carta22,carta23,carta24,carta25,carta26,carta27,carta28,carta29,carta30,
                carta31,carta32,carta33,carta34,carta35,carta36,carta37,carta38,carta39,carta40];



// == VARIABLES == //          
var juegoTerminado = false;         /* No deja sacar cartas al usuario si pulsamos Plantarse */
var valorMax=0;                     /* Contar los puntos del jugador */
var valorMaxMaqui = 0;              /* Contar los puntos de la máquina/banca */

// == CREACIÓN DE LA FUNCIÓN QUE VA A PERMITIR SACAR CARTA AL USUARIO == //
function SacarCarta() {
    
    /* El juego termina cuando la condición sea verdadera */
    if(juegoTerminado){
        return;
    }

    /* CREAMOS una nueva etiqueta <img>  */
    var nuevaImagen = document.createElement("img");
    /* Le asignamos la ruta a la carta */
    var cartaAleatoria = Math.floor(Math.random() * arrayCartas.length);
    var elegido = arrayCartas[cartaAleatoria];
    /* Establece la imagen */
    nuevaImagen.src = elegido.url;
    /*array.splice(indice, cantidad);cantidad: Cuántos elementos quieres eliminar a partir de ahí (en nuestro caso, suele ser 1).*/
    arrayCartas.splice(cartaAleatoria, 1); 
    console.log(arrayCartas.length);
    document.getElementById("tapete").appendChild(nuevaImagen);

    valorMax+=elegido.valor;

    /* Si el jugador se pasa de los 7.5 puntos, gana automaticamente la banca */
    if(valorMax>7.5){
        document.getElementById("ganador").innerHTML="GANA LA BANCA. ¡TE PASASTE!";
        document.getElementById("ganador").className="perder";
        juegoTerminado=true;
    }
    /* Mostramos el contador que nos indica cuantos puntos tiene el usuario */
    document.getElementById("contadorJu").innerHTML=valorMax;
}


// == CREACIÓN DE LA FUNCIÓN QUE VA A PERMITIR SACAR CARTA A LA MÁQUINA == //
function Plantarse(){
    if(juegoTerminado){
        return;
    }
    /* Creamos bucle que va a automatizar los movimientos de la máquina */
    while(valorMaxMaqui<=5){
        var nuevaImagen = document.createElement("img");
        var cartaAleatoria = Math.floor(Math.random() * arrayCartas.length);
        var elegido = arrayCartas[cartaAleatoria];
        
        nuevaImagen.src = elegido.url;

        arrayCartas.splice(cartaAleatoria, 1); 
        document.getElementById("maquina").appendChild(nuevaImagen);
    
        valorMaxMaqui+=elegido.valor;
    }

    /* Condiciones que nos va a indicar quien es el ganador */
    if(valorMaxMaqui>7.5){
        document.getElementById("ganador").innerHTML="¡GANASTE!";
        document.getElementById("ganador").className="ganar";
    }
    else if(valorMax==valorMaxMaqui){
        document.getElementById("ganador").innerHTML="EMPATE. GANA LA BANCA. ¡HAS PERDIDO!";
        document.getElementById("ganador").className="perder";

    }
    else if(valorMaxMaqui> valorMax){
        document.getElementById("ganador").innerHTML="GANA LA BANCA";
        document.getElementById("ganador").className="perder";
    }
    else{
        document.getElementById("ganador").innerHTML="¡GANASTE!";
        document.getElementById("ganador").className="ganar";
    }
    juegoTerminado=true;
    document.getElementById("contadorMaqui").innerHTML=valorMaxMaqui;

}


// ------------------------------------------------- FUNCIONAMIENTO DE LA PARTE ESTÉTICA DEL VIDEOJUEGO ------------------------------------------------- //

// == FUNCIÓN PARA CAMBIAR DE LA PANTALLA DE INICIO AL JUEGO == //
function empezarJuego() {
    // 1. Ocultamos la pantalla de inicio
    document.getElementById("pantalla-inicio").style.display = "none";
    
    // 2. Mostramos la pantalla del juego
    document.getElementById("pantalla-juego").style.display = "block";
    
    /*

    // Opcional: Iniciar la música automáticamente al darle a jugar
    var musica = document.getElementById("musicaFondo");
    if(musica.paused) {
        alternarMusica();
    }
        
    */
}