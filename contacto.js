document.addEventListener("DOMContentLoaded", function(event){
    
    document.getElementById("nombre").onblur = function() {
        if(document.getElementById("nombre").value == ""){
            document.getElementById("nombre").style.borderColor="red"
        }else{
            document.getElementById("nombre").style.borderColor=""

        }
    };

    document.getElementById("correo").onblur = function() {
        if(document.getElementById("correo").value == ""){
            document.getElementById("correo").style.borderColor="red"
        }else{
            document.getElementById("correo").style.borderColor=""
        }
    };

    document.getElementById("mensaje").onblur = function(){
        if(document.getElementById("mensaje").value == "" ){
            document.getElementById("mensaje").style.borderColor="red"
        }else{
            document.getElementById("mensaje").style.borderColor=""
        }
    };
    
});


function validarDatosContacto(){
    let validar = true;
    let nombreApellido = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    let mensajeErrorContact = "Falta completar ";

    

    if (nombreApellido == ""){
         mensajeErrorContact = mensajeErrorContact + "nombre, ";  // mensajeErrorContact = `${mensajeErrorContact} nombre, `;
        validar = false;
    }

    if (correo == ""){
        mensajeErrorContact = mensajeErrorContact + "correo, ";
        validar = false;
    }

    if (mensaje == ""){
        mensajeErrorContact = mensajeErrorContact + "mensaje, ";
        validar = false;
    }

    if(!validar){
        mensajeErrorContact = mensajeErrorContact.substring(0, mensajeErrorContact.length - 2);
        document.getElementById("validacionContactoError").innerHTML = mensajeErrorContact;
    }
    else
        document.getElementById("validacionContactoError").innerHTML = "";
        



    if(validar)
    {

        validar = validarNombre(nombreApellido);
        if(!validar)
        {
            document.getElementById("validacionContactoError").innerHTML = "El nombre ingresado no es valido";
            document.getElementById("nombre").style.borderColor="red";
            return validar;
        }else
        {
            document.getElementById("validacionContactoError").innerHTML = "";
            document.getElementById("nombre").style.borderColor="";
        }

        validar = validarEmail(correo);
        if(!validar)
        {
            document.getElementById("validacionContactoError").innerHTML = "El correo ingresado no es valido";
            document.getElementById("correo").style.borderColor="red";
        }else
        {
            document.getElementById("validacionContactoError").innerHTML = "";
            document.getElementById("correo").style.borderColor=""; 
        }


        if(validar)
        {
            document.getElementById("validacionExitosa").innerHTML = "Mensaje enviado con exito";
            document.getElementById("botonExitosa").style.display = "none";
        }
           
           
    }        

    return validar;
    
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
