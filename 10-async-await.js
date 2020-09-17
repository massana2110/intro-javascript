//async await: Para trabajo asincrono pero mas legible el codigo
//mipromesa.then(() => {}).catch(error => console.log(error))

const getPokemon = async () => {
	try {
		const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
		const res = await peticion.json();
		const { sprites } = res;
		const { front_female } = sprites;
		const img = document.createElement('img');
		img.src = front_female;
		document.body.append(img);
	} catch (error) {
		console.error(error);
	}
};

getPokemon();

// ------ Trabajos con promesas ------

// const apiKey = 'UEmUDVd6SmR49e2loJAPC0eGl90qEEa5';
// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//peticion a poke api con promesa
// peticion2
// 	.then(resp => resp.json())
// 	.then(({ sprites }) => {
// 		console.log(sprites);
// 		const { front_female } = sprites;
// 		const img = document.createElement('img');

// 		img.src = front_female;

// 		document.body.append(img);
// 	})
// 	.catch(err => console.error(err));
