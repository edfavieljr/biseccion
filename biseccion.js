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