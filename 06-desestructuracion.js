// Desestructuracion
const persona = {
	nombre: 'David',
	edad: 22,
	clave: 'DAMZ1021',
};

const { nombre, edad, clave } = persona; //selecciona las propiedades del objeto

console.log(nombre);
console.log(edad);
console.log(clave);

const useContext = ({ nombre, clave, edad, rango = 'Capitan' }) => {
	// console.log(nombre, edad, rango);
	return {
		nombreClave: clave,
		anios: edad,
		latlng: {
			lat: 124.145,
			lng: -12.351,
		},
	};
};

const {
	nombreClave,
	anios,
	latlng: { lat, lng },
} = useContext(persona);

// const { nombreClave, anios } = avenger;

console.log(nombreClave, anios, lat, lng);
