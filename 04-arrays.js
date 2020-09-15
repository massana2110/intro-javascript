//Arrays
const array = []; //declaracion array vacio

//array de objetos
/*array[0] = {
	nombre: 'Jose',
	apellido: 'Romero',
	edad: 22,
};

array[1] = {
	nombre: 'David',
	apellido: 'Massana',
	edad: 22,
};*/

//array de numeros
array[0] = 3;
array[1] = 5;
array[2] = 1;
array[3] = 0;

// ---------CICLOS FOR --------------
for (let i = 0; i < array.length; i++) {
	array[i] = array[i] + 1;
	console.log(array[i]);
} //for clasico de toda la vida

for (let numero of array) {
	numero++;
	console.log(numero);
} // for of

let flag = true;

array.forEach(function (valor, index) {
	console.log('a[' + index + '] = ' + valor);
}); //for each

// ---------CICLOS FOR --------------

//----------METODOS PARA ARRAYS -------
const array2 = array.map(function (x) {
	return x * 2;
});

const array3 = array.filter(function (valor) {
	return valor % 2 === 0;
});

console.log(array3);

array.push(10); //Añade el elemento hasta el final del array

array.sort(); // Ordena un array, no es que sea tan exacta la ordenacion

//----------METODOS PARA ARRAYS -------

console.log(array);

const personas = [
	{
		nombre: 'Jose',
	},
	{
		nombre: 'David',
	},
	{
		nombre: 'Charly',
	},
];

console.log(personas);

const personafiltrada = personas.filter(function (persona) {
	return persona.nombre === 'Charly';
});

console.log(personafiltrada); //trabajo kk de Jose
