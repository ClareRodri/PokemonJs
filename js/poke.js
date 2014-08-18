var pokemon=[ 	["Pikachu","Charmander","Toggepi","Meowth","Squirtle","Bulbasaur"],
				["70","65","10","60","50","45"], // Ataque
				["Todo Pokémon que le golpee con un ataque de contacto tiene un 30% de probabilidades de resultar paralizado."+
				"Hasta Quinta Generación, puede paralizar a Pokémon de tipo Tierra.",
				 "Si el Pokémon con esta habilidad tiene igual o menos del 33% de su PS máximo, el poder de sus ataques de tipo Fuego aumenta en un 50%.",
				 "Aumenta el Ataque del usuario en un 50%, pero reduce la Precisión de sus ataques físicos en un 20%. Esta habilidad no afecta a los ataques especiales ni a los movimientos de estado del Pokémon.",
				 "Tiene un 10% de probabilidades de recoger un objeto del suelo tras cada batalla. No debe llevar ningún objeto equipado para que funcione.",
				 "Si el Pokémon con esta habilidad tiene igual o menos del 33% de su PS máximo, el poder de sus ataques de tipo Agua aumenta en un 50%.",
				 "La Velocidad del Pokémon aumenta un 100% (se duplica) en Día Soleado. No se incluye el turno en el que se activa el sol."],
				["89","92","100","40","79","90"], // Vida actual
				["90","100","100","60","100","97"], // Vida
				["Electrico","Fuego","Normal","Normal","Agua","Hierba"] // Tipo
			];

function pokeDatos(e){	
	this.elige=e;
	this.nombre = pokemon[0][this.elige];
	this.ataque = pokemon[1][this.elige];
	this.poder = pokemon[2][this.elige];
	this.vidaA = pokemon[3][this.elige];
	this.vida = pokemon[4][this.elige];
	this.tipo = pokemon[5][this.elige];		
}

function inicio(){
	var elige = Math.floor((Math.random() * 6)); 
	var poke= new pokeDatos(elige);
	nombre.innerText=poke.nombre;

	document.getElementById('logo').innerHTML="<img src='img/logo_"+poke.tipo+".png' style='border-style: none;'>";
	document.getElementById('img').innerHTML="<img src='img/"+poke.nombre+".png' class='imgs'>";
	document.getElementById("card").style.background = "url('img/back-"+poke.tipo+".png')";
	document.getElementById('poder').innerHTML="<p>"+poke.poder+"</p>";
	document.getElementById('vida').innerHTML="<b> Vida: "+poke.vidaA+"/"+poke.vida+"</b>";
	document.getElementById('ataque').innerHTML="<b> Ataque: "+poke.ataque+"</b>";
}