
    /*********** Definición de la clase cubo ************/
    class Carta {
        constructor (arg1, arg2) {
            this.valor=parseInt(arg1);
            this.url=arg2;
        }

      }
      
    //Creación de los objetos
    var carta1 = new Carta(1, "images/1Oros.png");       
    var carta2 = new Carta(2, "images/2Oros.png");       
    var carta3 = new Carta(3, "images/3Oros.png");       
    var carta4 = new Carta(3, "images/3Oros.png");      
    var carta5 = new Carta(3, "images/3Oros.png");   
    var carta6 = new Carta(3, "images/3Oros.png");     
    var carta7 = new Carta(3, "images/3Oros.png");     
    var carta8 = new Carta(3, "images/3Oros.png");     
    var carta9 = new Carta(3, "images/3Oros.png");     
    var carta10 = new Carta(3, "images/3Oros.png");     
    var carta11 = new Carta(3, "images/3Oros.png");     
    var carta12 = new Carta(3, "images/3Oros.png");     
    var carta13 = new Carta(3, "images/3Oros.png");     
    var carta14 = new Carta(3, "images/3Oros.png");     
    var carta15 = new Carta(3, "images/3Oros.png");  
    var carta16 = new Carta(3, "images/3Oros.png");     
    var carta17 = new Carta(3, "images/3Oros.png");     
    var carta18 = new Carta(3, "images/3Oros.png");     
    var carta19 = new Carta(3, "images/3Oros.png");     
    var carta20 = new Carta(3, "images/3Oros.png");     
    var carta21 = new Carta(3, "images/3Oros.png");
    var carta22 = new Carta(3, "images/3Oros.png");     
    var carta23 = new Carta(3, "images/3Oros.png");     
    var carta24 = new Carta(3, "images/3Oros.png");     
    var carta25 = new Carta(3, "images/3Oros.png");     
    var carta26 = new Carta(3, "images/3Oros.png");     
    var carta27 = new Carta(3, "images/3Oros.png");     
    var carta28 = new Carta(3, "images/3Oros.png");     
    var carta29 = new Carta(3, "images/3Oros.png");             
    var carta30 = new Carta(3, "images/3Oros.png");     
    var carta31 = new Carta(3, "images/3Oros.png");     
    var carta32 = new Carta(3, "images/3Oros.png");     
    var carta33 = new Carta(3, "images/3Oros.png");
    var carta34 = new Carta(3, "images/3Oros.png");
    var carta35 = new Carta(3, "images/3Oros.png");
    var carta36 = new Carta(3, "images/3Oros.png");
    var carta37 = new Carta(3, "images/3Oros.png");   
    var carta38 = new Carta(3, "images/3Oros.png");
    var carta39 = new Carta(3, "images/3Oros.png");  
    var carta40 = new Carta(3, "images/3Oros.png");

    var arrayCartas=[carta1,carta2,carta3];

    function SacarCarta(){
        var elegido= arrayCartas[1];
        document.getElementById("demo").src=elegido.url;  
    }
