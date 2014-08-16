var pokemon=[ 	["Pikachu","Charmander","Toggepi","Meowth"],
				["70","65","10","60"], // Ataque
				["89","92","100","40"], // Vida
				["Electrico","Fuego","Normal","Normal"] // Tipo
			];

function pokeDatos(e){	
	this.elige=e;
	this.nombre = pokemon[0][this.elige];
	this.ataque = pokemon[1][this.elige];
	this.vida = pokemon[2][this.elige];
	this.tipo = pokemon[3][this.elige];
	//document.write("<img src='img/"+this.nombre+".png' class='imgUp1' >");
	//document.write("<br>Poke = "+this.nombre+"<br>"+"Ataque = "+this.ataque+"<br>"+"Vida = "+this.vida+"<br>"+"Tipo = "+this.tipo);	
	
}

function inicio(){
	var elige = Math.floor((Math.random() * 4)); 
	var poke= new pokeDatos(elige);
	nombre.innerText=poke.nombre;
//	vidaPokemon.innerText=poke.vida;
//	ataquePokemon.innerText=poke.ataque;
//	tipoPokemon.innerText=poke.tipo;
	document.getElementById('img').innerHTML="<img src='img/"+poke.nombre+".png'>";
	document.getElementById("card").style.background = "url('img/back-"+poke.tipo+".png')";
	console.log("NAME= "+name.innerText);
}