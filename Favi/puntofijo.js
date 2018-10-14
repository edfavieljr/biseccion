function puntofijo(){
	var i = 0;
	var xAnterior = 0;
	var x0 = document.getElementById("x0").value;
	var funcion = document.getElementById("funcion").value;
	var funcionDerivada = math.derivative(funcion, 'x').toString()

	const parser2 = math.parser();
	parser2.eval("f(x) = "+funcionDerivada);
	var res2 = parser2.eval("f("+x0+")");
    console.log(res2)
	if(res2<1){

		do{
			const parser1 = math.parser();
			parser1.eval("f(x) = "+funcion);
			var res1 = parser1.eval("f("+x0+")");

			xAnterior= x0;
			x0 =res1;
			i++;
		}while(x0 != xAnterior)

		document.getElementById("mostrar").innerHTML='<textarea name="mostrar" rows="2"  style="text-align: center; padding-top: 30px;" cols="30"> Resultado: ' + x0+
	' en la iteraccion: ' + i ;
		
	}else{
		alert("No es viable para punto fijo.");
    }
    
}