//declaramos los valores numericos para las opciones
var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto =3;
var spock = 4;
//creamos una lista para poder determinar el valor, segun el numero
var opciones = ["Piedra", "Papel", "Tijera" , "Lizard", "Spock"];

$(document).ready(function(){
	$('li').click(function(){
		var opcion = ($(this).text().trim());
		usuResultado(opcion)

		function numAleatorio(min, max){
			var numero = Math.floor( Math.random() * (max - min + 1) + min );
			return numero
		};

		function usuResultado(palabra){
			document.getElementById('usuImage').innerHTML="<img src = imagenes/"+palabra+".png />"
			document.getElementById('usuOpcion').innerHTML="<span>" + palabra + "</span>"
		}

		function pcResultado(palabra){
			document.getElementById('pcImage').innerHTML="<img src = imagenes/"+palabra+".png />"
			document.getElementById('pcOpcion').innerHTML="<span>" + palabra + "</span>"
		};

		var numCompu = opciones[numAleatorio(0,4)]
		console.log(numCompu)

		//Logica si es empate
		if(opcion === numCompu){
			pcResultado(numCompu)
			document.getElementById("resultado").innerHTML="<span> Empate </span>"
			
		}

		//Logica cuando elijamos Piedra
		if(opcion === "Piedra"){
			if (numCompu === "Tijera" || numCompu === "Lizard"){
				pcResultado(numCompu)
				document.getElementById("resultado").innerHTML="<span> Ganaste </span>"
			}else if(numCompu === "Papel" || numCompu === "Spock"){
				pcResultado(numCompu)
				document.getElementById("resultado").innerHTML="<span> Perdiste </span>"
			}
		}

		//Logica cuando elejimos Papel
		if(opcion === "Papel"){
			if (numCompu === "Piedra" || numCompu === "Spock"){
				pcResultado(numCompu)
				document.getElementById("resultado").innerHTML="<span> Ganaste </span>"
			}else if(numCompu === "Tijera" || numCompu === "Lizard"){
				pcResultado(numCompu)
				document.getElementById("resultado").innerHTML="<span> Perdiste </span>"
			}
		}

		//Logica cuando elejimos Tijera
		if(opcion === "Tijera"){
			if (numCompu === "Papel" || numCompu === "Lizard"){
				pcResultado(numCompu)
				document.getElementById("resultado").innerHTML="<span> Ganaste </span>"
			}else if(numCompu === "Piedra" || numCompu === "Spock"){
				pcResultado(numCompu)
				document.getElementById("resultado").innerHTML="<span> Perdiste </span>"
			}
		}

		//Logica cuando elejimos Lizard
		if(opcion === "Lizard"){
			if (numCompu === "Spock" || numCompu === "Papel"){
				pcResultado(numCompu)
				document.getElementById("resultado").innerHTML="<span> Ganaste </span>"
			}else if(numCompu === "Piedra" || numCompu === "Tijera"){
				pcResultado(numCompu)
				document.getElementById("resultado").innerHTML="<span> Perdiste </span>"
			}
		}

		//Logica cuando elejimos Spock
		if(opcion === "Spock"){
			if (numCompu === "Tijera" || numCompu === "Piedra"){
				pcResultado(numCompu)
				document.getElementById("resultado").innerHTML="<span> Ganaste </span>"
			}else if(numCompu === "Papel" || numCompu === "Lizard"){
				pcResultado(numCompu)
				document.getElementById("resultado").innerHTML="<span> Perdiste </span>"
			}
		}

	})

})



