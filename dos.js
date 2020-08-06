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
let articulo
let artPrecMax
let categoria
let precioArt
let precioArtmax
let pArticuloLact
let bebidas
let confirmacion

function mostrar()
{
	articulo= prompt("Ingrese el nombre de un articulo");
	categoria= prompt("Ingrese la categoria, entre almacen, lacteos, limpieza o bebidas");
	do {
	precioArt=parseInt(prompt("Ingrese el precio"));
	}
	while(!(precioArt>=0 && precioArt<=1000));
	if(articulo == "lacteos" && precioArt>pArticuloLact)
	

	if(precioArt>precioArtmax)
	precioArtmax=precioArt;
	artPrecMax=articulo;
	






	do {
	confirmacion = prompt("Desea seguir ingresando? (si/no)");
	while(!(confirmacion == no || confirmacion == si));




}