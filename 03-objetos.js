const persona = {}; //declarar un objeto, en este caso objeto vacio

const persona2 = {
  nombre: "David",
  apellido: "Massana",
  edad: 22,
  ocupacion: "Estudiante",
  materias: ["Matematicas", "Programacion", 23, { materia: "Base de datos" }],
};

const persona4 = {
  nombre: "David",
  apellido: "Massana",
  edad: 22,
  ocupacion: "Estudiante",
  materias: ["Matematicas", "Programacion", 23, { materia: "Base de datos" }],
};

//Declarar un objeto con informacion

// let persona3 = persona2; //asignacion por referencia - ASINGACION MALA

let persona3 = { ...persona2 }; //Asignacion correcta.

persona3.nombre = "Jose";

console.log(persona);
console.log(persona2);
console.log(persona3);
