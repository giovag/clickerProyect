var pepsi = 0;

var inventario = [0,0,0];
var pepsiProduce = [0.5,1,8];
var precioProducto = [15,100,1100];

function clic(){
	pepsi++;
}

function comprar(objeto){

	if (pepsi >= precioProducto[objeto]){
		inventario[objeto]++;
		pepsi -= precioProducto[objeto];
	}
	else{
		console.log("No tienes suficientes Pepsi");
	}
}

function producir(){
	for(contador=0; contador<inventario.length; contador++){
		pepsi += inventario[contador] * pepsiProduce[contador];
	}
}

function render(){
	document.getElementById("contador").innerHTML = pepsi;
	document.getElementById("inventario").innerHTML = 
		`Cursores: ${inventario[0]}<br>
		 Maquinas: ${inventario[1]}<br>
		 Fabricas: ${inventario[2]}
		 `;
}

var FPSProduce = 1;

setInterval(function(){
	producir();
},1000/FPSProduce);

var FPS = 30;

setInterval(function(){
	render();
},1000/FPS);