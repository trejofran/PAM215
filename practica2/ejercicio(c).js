const personas = [
{nombre: "Ana", edad: 22},
{nombre: "Luis", edad: 35},
{nombre: "Maria", edad: 28},

];

const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log( " Encontrado: ", personaLuis);

personas.forEach( p => {
    console.log( p.nombre + " tiene " + p.edad + " años.");

});

const totalEdades = personas.reduce((suma,p) => suma + p.edad, 0);
console.log(" La suma de todas las edades es: ", totalEdades);
