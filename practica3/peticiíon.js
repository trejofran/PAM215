function simularPeticionAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos correctamente");
    }, 5000);
  });
}

async function obtenerDatos() {
  try {
    const resultado = await simularPeticionAPI(); 
    console.log(resultado); // Imprime el resultado
  } catch (error) {
    console.error("Error en la petición:", error);
  }
}

// Llamamos a la función
obtenerDatos();
