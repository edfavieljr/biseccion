function newtonraphson(){
	var i = 0;
	var nr = 0;
	var x0 = document.getElementById("x0").value;
	var funcion = document.getElementById("funcion").value;
	var funcionDerivada = math.derivative(funcion, 'x').toString();
	var xanterior;

	do{

		const parser1 = math.parser();
		parser1.eval("f(x) = "+funcion);
		var res1 = parser1.eval("f("+x0+")");

		const parser2 = math.parser();
		parser2.eval("f(x) = "+funcionDerivada);
		var res2 = parser2.eval("f("+x0+")");

		nr = x0 - ((res1)/(res2));
		xanterior= x0;
		x0 =nr;
		i++;
	}while(x0 != xanterior)
	console.log("El resultado es: "+nr+"\nEn la iterraccion: " + i);
}

function puntofijo(){
	var i = 0;
	var xAnterior = 0;
	var x0 = document.getElementById("x0").value;
	var funcion = document.getElementById("funcion").value;
	var funcionDerivada = math.derivative(funcion, 'x').toString()

	const parser2 = math.parser();
	parser2.eval("f(x) = "+funcionDerivada);
	var res2 = parser2.eval("f("+x0+")");

	if(res2<1){

<<<<<<< HEAD
				const parser2 = math.parser();
				parser2.eval("f(x) = "+funcionDerivada);
				res2 = parser2.eval("f("+x0+")");
				console.log("El resultado es: "+res2);
				if (x0==aux) {
					console.log("El resultado es: "+res2);
					break;
				}
			}
			
		}
=======
		do{
			const parser1 = math.parser();
			parser1.eval("f(x) = "+funcion);
			var res1 = parser1.eval("f("+x0+")");

			xAnterior= x0;
			x0 =res1;
			i++;
		}while(x0 != xAnterior)

		console.log("El resultado es: "+res2+"\nEn la iterraccion: " + i);
		
>>>>>>> dbb0b420fa84cdcc284b1b36a45d16085687e5de
	}else{
		alert("No es viable para punto fijo.");
	}
}

function biseccion(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var funcion = document.getElementById("funcionBiseccion").value;
	var i = document.getElementById("numeroIteracion").valuex
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

        var mult = (xi)*(xu);
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
}