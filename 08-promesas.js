//Promesas, async await, fetch => asincronismo: Ejecutar tareas que tomaran tiempo.

const heroes = [
	{
		id: 1,
		name: 'Batman',
		owner: 'DC',
	},
	{
		id: 2,
		name: 'Spiderman',
		owner: 'Marvel',
	},
	{
		id: 3,
		name: 'Superman',
		owner: 'DC',
	},
	{
		id: 4,
		name: 'Flash',
		owner: 'DC',
	},
	{
		id: 5,
		name: 'Wolverine',
		owner: 'Marvel',
	},
];

const getHeroById = id => {
	//find encuentra el elemento que cumple la condicion, solo 1 y es el primero depende de la condicion, se hace mediante una funcion
	return heroes.find(heroe => id === heroe.id);
};

const promesa = new Promise((resolve, reject) => {
	setTimeout(() => {
		//tarea
		const hero = getHeroById(3);
		resolve(hero); //resolve es que si se resolvio la tarea
		//reject('Nose pudo encontrar el heroe'); Es que hubo error
		// console.log('2 segundos despues');
		// resolve();
	}, 2000);
});

promesa
	.then(heroe => {
		console.log('heroe', heroe); //en metodo .then tu podes usar la respuesta que te devuelven como tu quieras
	})
	.catch(err => console.error(err)); //manejar error
