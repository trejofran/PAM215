function verificarUsuario(Suusuario){
    return new Promise((resolve, reject) => {
        if(Suusuario === "admin"){
            resolve("Accceso concedido");
        } else {
            reject("Acceso denegado");
        }   
    });
}
verificarUsuario("ivan")
.then((mensaje) => console.log(mensaje))
.catch((error) => console.log(error));
verificarUsuario("admin")
.then((mensaje) => console.log(mensaje))
.catch((error) => console.log(error));


    
    
