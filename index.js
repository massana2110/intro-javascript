// Realice una función que reciba un arreglo como parámetro y liste los tipos de datos de sus elementos y cuantos de cada tipo.
const array = [
	'Nombre', //string
	'Apellido', //string
	23, //number
	15.22, //number
	true, //boolean
	false, //boolean
	-2, //number
	[10], //array
	{
		name: 'David',
		last_name: 'Zacatares',
	}, //objet
	null, //null
];

function recibir(array) {
	const array2 = array.map(function (elemento) {
		return typeof elemento;
	});
	return array2;
}

console.log(recibir(array));

// Realice una función que reciba un arreglo de datos numéricos, y muestre la suma de todos los elementos del arreglo y su promedio.

//---VERSION JOSE ---
const array2 = [1, 2, 3, 4, 5];

function suma_pro(array) {
	let suma = 0;
	for (let index = 0; index < array.length; index++) {
		suma = suma + array[index];
	}
	return suma;
}
console.log(suma_pro(array2));

//----VERSION DAVID-----
const numeros = [1, 3, 4, 5, 6];

const sumaArreglo = numeros => {
	let resultado = 0;
	for (const valor of numeros) {
		resultado += valor;
	}

	return resultado;
};

console.log(sumaArreglo(numeros));

// Realice una función en JS, que dados un número y un arreglo como parámetros, retorne cuantas ocurrencias existen de ese número dentro del arreglo.

// Elabore una función que llene un arreglo con 20 números de forma aleatoria (random), y que pida al usuario adivinar un número, si lo adivina mostrará un mensaje indicando que ganó, si no mostrará que perdió.

// Análisis de una circunferencia: Crear una función en JavaScript que pida por el teclado el radio de un circunferencia, y calcule el área de esta y lo retorne, si el radio ingresado es negativo o cero, retornará -1.
