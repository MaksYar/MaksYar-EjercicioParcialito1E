/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, 
limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/


function mostrar(){
let articulo;
let artPrecMax;
let categoria;
let precioArtmax=0;
let precioArt;
let precioMaxLac="no ingresado";
let pArticuloLact=0;
let confirmacion;
let nBebidas=0;


	do {
	articulo= prompt("Ingrese el nombre de un articulo");
	
	do{
	categoria= prompt("Ingrese la categoria, entre almacen, lacteos, limpieza o bebidas");
	}
	while(!(categoria=="almacen" || categoria=="lacteos" || categoria=="limpieza" ||categoria=="bebidas"));

	do {
	precioArt=parseInt(prompt("Ingrese el precio"));
	}
	while(!(precioArt>=0 && precioArt<=1000));

	if (precioArt>precioArtmax){
		precioArtmax=precioArt;
		artPrecMax=articulo;
		}

	if(categoria == "lacteos" && precioArt>pArticuloLact){
	pArticuloLact=precioArt;
	precioMaxLac=articulo;
	}
	else if (categoria== "bebidas"){
	nBebidas++;
	}

	do{
	confirmacion = prompt("Desea seguir ingresando? (si/no)");
	}
	while(!(confirmacion == "no" || confirmacion == "si"));
	}
	while(confirmacion == "si");

	alert("El articulo con el mayor precio es" + artPrecMax + " a $ " + precioArtmax);
	alert("El articulo con el mayor precio de la categoria lacteos es " + precioMaxLac + " a $ " + pArticuloLact);
	alert("La cantidad de articulos ingresados en la categoria bebidas es "+ nBebidas);

}
