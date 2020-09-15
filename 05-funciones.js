//funciones

//funcion de toda la vida
function mostrarHolaMundo() {
	//codigo
	document.write('Hola mundo');
} //declaracion

//arrow function (funcion tipo fecha), mas comun verla en los codigos
const setArrayOfPeople = () => {
	return ['David', 'Jose', 'Charly'];
};

const mostrarMiNombre = function (nombre) {
	document.write(`Hola, mi nombre es ${nombre}`);
};

mostrarHolaMundo(); //ejecucion

const miArray = setArrayOfPeople();

console.log(miArray);
mostrarMiNombre('David');

const myBtn = document
	.getElementById('btn')
	.addEventListener('click', function () {
		console.log('The button was clicked');
	}); //Vista rapida del manejo del DOM
