function newtonraphson(){
	var i = 0;
	var nr = 0;
	var x0 = document.getElementById("x0").value;
	var funcion = document.getElementById("funcion").value;
	var funcionDerivada = math.derivative(funcion, 'x').toString()

	
	const parser1 = math.parser();
	parser1.eval("f(x) = "+funcion);
	var res1 = parser1.eval("f("+x0+")");

	const parser2 = math.parser();
	parser2.eval("f(x) = "+funcionDerivada);
	var res2 = parser2.eval("f("+x0+")");

	nr = x0 - (res1/res2);
	console.log("El resultado es: "+nr);
}

function puntofijo(){
	var i = 0;
	var nr = 0;
	var x0 = document.getElementById("x0").value;
	var funcion = document.getElementById("funcion").value;
	var funcionDerivada = math.derivative(funcion, 'x').toString()

	const parser2 = math.parser();
	parser2.eval("f(x) = "+funcionDerivada);
	var res2 = parser2.eval("f("+x0+")");

	if(res2 < x0){
		if(res2 == x0){
			alert("Se ha elegido como valor inicial la raíz.");	
		}else{
			while(true){
				var aux = x0;
				x0 = res2;

				const parser2 = math.parser();
				parser2.eval("f(x) = "+funcionDerivada);
				res2 = parser2.eval("f("+x0+")");
				if (x0==aux) {
					console.log("El resultado es: "+res2);
					break;
				}
			}
			
		}
	}else{
		alert("No es viable para punto fijo.");
	}
}

function biseccion(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var funcion = document.getElementById("funcionBiseccion").value;
	var i = document.getElementById("numeroIteracion").value
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
				console.log("XR b: " + xr2);
				console.log("XANTERIOR b : "+ xranterior);
				//var error = ((xr2 - xranterior)/xr)*100; 
				// console.log("error B: " + error);
			}

		}else{
			a = xr;
			console.log("resultado A: " + a);
			if(cont > 1){
				console.log("XR a: " + xr2);
				console.log("XANTERIOR a : "+ xranterior);
				//var error = ((xr2 - xranterior)/xr)*100; 
				// console.log("error A: " + error);

			}
		}
		xranterior = xr;
		cont++;
	}
}