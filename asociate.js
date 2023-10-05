document.addEventListener("DOMContentLoaded", function(event){
    
    document.getElementById("nombre").onblur = function() {
        if(document.getElementById("nombre").value == ""){
            document.getElementById("nombre").style.borderColor="red";
        }else{
            document.getElementById("nombre").style.borderColor="";

        }
    };

    document.getElementById("apellido").onblur = function() {
        if(document.getElementById("apellido").value == ""){
            document.getElementById("apellido").style.borderColor="red";
        }else{
            document.getElementById("apellido").style.borderColor="";
        }
    };

    document.getElementById("cumpleaños").onblur = function() {
        if(document.getElementById("cumpleaños").value == ""){
            document.getElementById("cumpleaños").style.borderColor="red";
        }else{
            document.getElementById("cumpleaños").style.borderColor="";
        }
    };

    document.getElementById("direccion").onblur = function() {
        if(document.getElementById("direccion").value == ""){
            document.getElementById("direccion").style.borderColor="red";
        }else{
            document.getElementById("direccion").style.borderColor="";
        }
    };

    document.getElementById("correo").onblur = function() {
        if(document.getElementById("correo").value == ""){
            document.getElementById("correo").style.borderColor="red";
        }else{
            document.getElementById("correo").style.borderColor="";
        }
    };
    
});


function validarDatos(){

    let datosValidos = true;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;
    let cumple = document.getElementById("cumpleaños").value;

    let mensajeError = "Falta completar ";

    //validamos que no haya campos vacios
    if (nombre == ""){
        datosValidos=false;
        mensajeError = mensajeError + "nombre, ";
    }
    if (apellido == ""){
        datosValidos=false;
        mensajeError = mensajeError + "apellido, ";
    }
    if (cumple == ""){
        datosValidos=false;
        mensajeError = mensajeError + "cumpleaños, ";
    }
    if (direccion == ""){
        datosValidos=false; 
        mensajeError = mensajeError + "direccion, ";
    }
    if (correo == ""){
        datosValidos=false;
        mensajeError = mensajeError + "correo, ";
    }
        
    if(!datosValidos){
        mensajeError = mensajeError.substring(0, mensajeError.length - 2);
        document.getElementById("validacionError").innerHTML = mensajeError;
    }
    else
        document.getElementById("validacionError").innerHTML = "";

    //una vez no haya campos vacios, validamos formatos
    if(datosValidos)
    {
        datosValidos = validarNombre(nombre);
        if(!datosValidos)
        {
            document.getElementById("validacionError").innerHTML = "El nombre ingresado no es valido";
            document.getElementById("nombre").style.borderColor="red";
            return datosValidos;  
        }
        else
        {
            document.getElementById("validacionError").innerHTML = "";
            document.getElementById("nombre").style.borderColor="";
        }

        datosValidos = validarNombre(apellido);
        if(!datosValidos)
        {
            document.getElementById("validacionError").innerHTML = "El apellido ingresado no es valido";
            document.getElementById("apellido").style.borderColor="red";
            return datosValidos;
        }
        else
        {
            document.getElementById("validacionError").innerHTML = "";
            document.getElementById("apellido").style.borderColor="";
        }
            

        datosValidos = validarEmail(correo);
        if(!datosValidos)
        {
            document.getElementById("validacionError").innerHTML = "El correo ingresado no es valido";
            document.getElementById("correo").style.borderColor="red";
            return datosValidos;
        }
        else
        {
            document.getElementById("validacionError").innerHTML = "";
            document.getElementById("correo").style.borderColor="";
        }
                    
    }      
    
    if(datosValidos)
    {
        document.getElementById("mensajeExitoso").innerHTML = "Datos enviados correctamente";
        document.getElementById("botonEnviar").style.display = "none";

    }
    return datosValidos;
}

function validarEmail(correo){
    let validacionEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; /* expresiones regulares*/ 
    let campoCorreo = validacionEmail.test(correo);
    

    if (campoCorreo==true){
        return true;
    }else{
        return false;
    }
}

function validarNombre(nombre){
    let validacionNombre =  /^[A-Za-z\s]+$/;
    let campoNombre = validacionNombre.test(nombre);
    
    if (campoNombre==true){
        return true;
    }else{
        return false;
    }
}
