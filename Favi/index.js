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
		const evaluacion1 = math.parser();
		evaluacion1.eval("f(x) = "+funcion);
		var res1 = evaluacion1.eval("f("+a+")");

		console.log(res1);

		const evaluacion2 = math.parser();
		evaluacion2.eval("f(x) = "+funcion);
		var res2 = evaluacion2.eval("f("+b+")");

		console.log(res2);

		var mult = res1*res2;
		if (mult < 0) {
			var media = (parseFloat(a)+parseFloat(b))/2;
			console.log(media);
			if (media > b) {
				b = media;
			}else{
				a = media;
			}
			console.log("Valor último de a: "+a);
			console.log("Valor último de b: "+b);
		}else{
			console.log("No es viable para bisección");
			break;
		}
		cont++;
	}
}