var pokemon=[ 	["Pikachu","Charmander","Toggepi"],
				["70","65","10"], // Ataque
				["89","92","100"], // Vida
				["Electrico","Fuego","--"] // Resistencia
			];

function pokeDatos(e){	
	this.elige=e;
	this.nombre = pokemon[0][this.elige];
	this.ataque = pokemon[1][this.elige];
	this.vida = pokemon[2][this.elige];
	this.tipo = pokemon[3][this.elige];
	document.write("<img src='img/"+this.nombre+".png' >");
	console.log("Poke = "+this.nombre+"\n"+"Ataque = "+this.ataque+"\n"+"Vida = "+this.vida+"\n"+"Tipo = "+this.tipo);	
	
}

function inicio(){
	var elige = Math.floor((Math.random() * 3)); 
	pokeDatos(elige);

}