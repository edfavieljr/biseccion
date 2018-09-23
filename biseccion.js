const math = require('mathjs');

function biseccion (){
    var  form = document.forms["biseccion"].elements[0].value;
    var  formula =document.getElementById("formula").value;
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    
    var separar  = formula.split("+");
    if(separar.length<2){
        alert('inserte por lo menos una suma o resta');
    }
    else{
        var reemplazoA = {};
        for(i=0;i<separar.length;i++){
            reemplazoA[i] = separar[i].replace("x", a);
            
        }
        var reemplazoB = {};
        for(i=0;i<separar.length;i++){
            reemplazoB[i] = separar[i].replace("x", b);
            
        }

        
        console.log(separar);
        console.log(reemplazoA)
        console.log(reemplazoB);
        document.getElementById("mostrar").innerHTML='<textarea name="mostrar" rows="5" cols="30">Por formula: '+formula+' \
            <br>Por separar: '+separar+' \
            <br>Por a: '+a+' \
            <br>Por b: '+b ;
        
    }
    

    }
