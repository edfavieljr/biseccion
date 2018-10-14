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
	document.getElementById("mostrar").innerHTML='<textarea name="mostrar" rows="2"  style="text-align: center; padding-top: 30px;" cols="30"> Resultado: ' + nr+
	' en la iteraccion: ' + i ;
}



