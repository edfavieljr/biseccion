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
        var reemplazoX = {};
        for(i=0;i<separar.length;i++){
            reemplazoX[i] = separar.replace('x', a)
        

        }
        
        document.getElementById("mostrar").innerHTML='<textarea name="mostrar" rows="5" cols="30">Por formula: '+formula+' \
            <br>Por separar: '+separar+' \
            <br>Por a: '+a+' \
            <br>Por b: '+b ;
        
    }
    

    }
