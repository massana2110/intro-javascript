//uso de fetch api

const apiKey = 'UEmUDVd6SmR49e2loJAPC0eGl90qEEa5';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

const peticion2 = fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);

// fetch retorna una promesa, la cual usamos .then para obtener la respuesta
peticion
	.then(resp => resp.json())
	.then(({ data }) => {
		const { url } = data.images.original;

		const img = document.createElement('img');

		img.src = url;

		document.body.append(img);
	})
	.catch(console.warn);

//peticion a poke api
peticion2
	.then(resp => resp.json())
	.then(({ sprites }) => {
		console.log(sprites);
		const { front_female } = sprites;
		const img = document.createElement('img');

		img.src = front_female;

		document.body.append(img);
	})
	.catch(err => console.error(err));
