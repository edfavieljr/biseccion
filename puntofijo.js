function puntoFijo(){
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