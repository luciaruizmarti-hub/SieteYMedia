
    /*********** Definición de la clase cubo ************/
    class Carta {
        constructor (arg1, arg2) {
            this.valor=parseInt(arg1);
            this.url=arg2;
        }

      }
      
    //Creación de los objetos
    var carta1 = new Carta(1, "images/1_Espadas.png");       
    var carta2 = new Carta(2, "images/2_Espadas.png");       
    var carta3 = new Carta(3, "images/3Oros.png");       
    var carta4 = new Carta(4, "images/3Oros.png");      
    var carta5 = new Carta(5, "images/3Oros.png");   
    var carta6 = new Carta(6, "images/3Oros.png");     
    var carta7 = new Carta(7, "images/3Oros.png");     
    var carta8 = new Carta(8, "images/3Oros.png");     
    var carta9 = new Carta(9, "images/3Oros.png");     
    var carta10 = new Carta(10, "images/1copas.png");     
    var carta11 = new Carta(11, "images/2copas.png");     
    var carta12 = new Carta(12, "images/3copas.png");     
    var carta13 = new Carta(13, "images/4copas.png");     
    var carta14 = new Carta(14, "images/5copas.png");     
    var carta15 = new Carta(15, "images/6copas.png");  
    var carta16 = new Carta(16, "images/7copas.png");     
    var carta17 = new Carta(17, "images/sotacopas.png");     
    var carta18 = new Carta(18, "images/caballocopas.png");     
    var carta19 = new Carta(19, "images/reycopas.png");     
    var carta20 = new Carta(20, "images/1oros.png");     
    var carta21 = new Carta(21, "images/2oros.png");
    var carta22 = new Carta(22, "images/3oros.png");     
    var carta23 = new Carta(23, "images/4oros.png");     
    var carta24 = new Carta(24, "images/5oros.png");     
    var carta25 = new Carta(25, "images/6oros.png");     
    var carta26 = new Carta(26, "images/7oros.png");     
    var carta27 = new Carta(27, "images/sotaoros.png");     
    var carta28 = new Carta(28, "images/caballooros.png");     
    var carta29 = new Carta(29, "images/reyoros.png");             
    var carta30 = new Carta(30, "images/3Oros.png");     
    var carta31 = new Carta(31, "images/3Oros.png");     
    var carta32 = new Carta(32, "images/3Oros.png");     
    var carta33 = new Carta(33, "images/3Oros.png");
    var carta34 = new Carta(34, "images/3Oros.png");
    var carta35 = new Carta(35, "images/3Oros.png");
    var carta36 = new Carta(36, "images/3Oros.png");
    var carta37 = new Carta(37, "images/3Oros.png");   
    var carta38 = new Carta(38, "images/3Oros.png");
    var carta39 = new Carta(39, "images/3Oros.png");  
    var carta40 = new Carta(40, "images/3Oros.png");

    var arrayCartas=[carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10,
        carta11,carta12,carta13,carta14,carta15,carta16,carta17,carta18,carta19,carta20,
        carta21,carta22,carta23,carta24,carta25,carta26,carta27,carta28,carta29,carta30,
        carta31,carta32,carta33,carta34,carta35,carta36,carta37,carta38,carta39,carta40];

    function SacarCarta(){
        var elegido= arrayCartas[1];
        document.getElementById("demo").src=elegido.url;  
    }
