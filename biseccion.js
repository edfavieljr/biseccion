function biseccion(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var funcion = document.getElementById("formula").value;
	var i = document.getElementById("iteraccion").value
    var cont = 0;
    
	while(cont!=i){
        var xr = ((parseFloat(a)+parseFloat(b))/2);
		var xr2;
		const evaluacion1 = math.parser();
		evaluacion1.eval("f(x) = "+funcion);
		var xi = evaluacion1.eval("f("+a+")");

		xr2 = xr;
		const evaluacion2 = math.parser();
		evaluacion2.eval("f(x) = "+funcion);
		var xu = evaluacion2.eval("f("+xr+")");

        var mult = xi*xu;
		var xranterior;
		
		if (mult < 0) {
			
			b= xr;
			console.log("resultado B: " + b);
			if(cont > 1){
				// console.log("XR b: " + xr2);
				// console.log("XANTERIOR b : "+ xranterior);
				//var error = ((xr2 - xranterior)/xr)*100; 
				// console.log("error B: " + error);
			}

		}else{
			a = xr;
			console.log("resultado A: " + a);
			if(cont > 1){
				// console.log("XR a: " + xr2);
				// console.log("XANTERIOR a : "+ xranterior);
				//var error = ((xr2 - xranterior)/xr)*100; 
				// console.log("error A: " + error);

			}
		}
		xranterior = xr;
		cont++;
    }
    
    document.getElementById("mostrar").innerHTML='<textarea name="mostrar" rows="5"  style="text-align: center; padding-top: 30px;" cols="30"> Resultado: ' + xr ;
            
}