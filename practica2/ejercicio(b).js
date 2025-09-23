//ejercicio b 
const productos = [
    { nombre: "laptop" , precio: 1200 },
    { nombre: "Mouse" , precio: 250 },
    { nombre: "Teclado" , precio: 750 },
    { nombre: "Monitor" , precio: 3000 }

];
const filtrados = productos.filter(producto => producto.precio > 1000);
const nombres = filtrados.map(producto => producto.nombre);      
console.log(nombres);


