const mensajeNombre = document.getElementById('mensajeAlertaNombre')
console.log(mensajeNombre)

const mensajeApellido = document.getElementById('mensajeAlertaApellido')
console.log(mensajeApellido)

const mensajeCorreo = document.getElementById('mensajeAlertaCorreo')
console.log(mensajeCorreo)

const mensajeFechaNacimiento = document.getElementById('mensajeAlertaFechaNacimiento')
console.log(mensajeFechaNacimiento)

const mensajePassword = document.getElementById('mensajeAlertaPassword')
console.log(mensajePassword)

const mensajeTyC = document.getElementById('mensajeAlertTyC')
console.log(mensajeTyC)





function validarFormulario(event) {
    event.preventDefault()

    let inputName = document.getElementById('name')
    console.log(inputName)

    let inputApellido = document.getElementById('apellido')
    console.log(inputApellido)

    let inputCorreo = document.getElementById('correo')
    console.log(inputCorreo)

    let inputFechaNacimiento = document.getElementById('FechaNacimiento')
    console.log(inputFechaNacimiento)

    let inputPassword = document.getElementById('Password')
    console.log(inputPassword)

    let inputTyC = document.getElementById('chekboxTyC')
    console.log(inputTyC)

    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6}$/;


    if (inputName.value == '') {
        mensajeNombre.innerText = "Complete el campo nombre"
        inputName.classList.add('bgcAlert')
        swal("Error", "Ingrese nombre!", "error");
    }
    else{
        inputName.classList.remove('bgcAlert')
        mensajeNombre.innerText="" }


    if (inputApellido.value == '') {
        mensajeApellido.innerText = "Complete el campo Apellido"
        inputApellido.classList.add('bgcAlert')
        swal("Error", "Ingrese Apellido!", "error");
    }
    else{inputApellido.classList.remove('bgcAlert')
        mensajeApellido.innerText="" }

    if (inputCorreo.value == '') {
        mensajeCorreo.innerText = "Complete el campo Correo"
        inputCorreo.classList.add('bgcAlert')
        swal("Error", "Ingrese Correo!", "error");
    }
    else{inputCorreo.classList.remove('bgcAlert')
        mensajeCorreo.innerText="" }

    if (inputFechaNacimiento.value == '') {
        mensajeFechaNacimiento.innerText = "Complete el campo Fecha Nacimiento"
        inputFechaNacimiento.classList.add('bgcAlert')
        swal("Error", "Ingrese Fecha Nacimiento!", "error");
    }
    else{inputFechaNacimiento.classList.remove('bgcAlert')
        mensajeFechaNacimiento.innerText="" }

    if (inputPassword.value == '') {
        mensajePassword.innerText = "Complete el campo Password"
        inputPassword.classList.add('bgcAlert')
        swal("Error", "Ingrese Password!", "error");
    }
    else if(inputPassword.value.length < 6){       
        swal("Error", "La longitud de la contraseña debe ser de 6 dígitos!", "error");        
    }
    
    else{inputPassword.classList.remove('bgcAlert')
        mensajePassword.innerText="" }

    if (inputTyC.checked == false) {
        mensajeTyC.innerText = "Acepte los terminos y condiciones"
        swal("Error", "Acepte los terminos y condiciones!", "error");
    }

    if(inputName != "" && inputApellido !="" && inputCorreo !="" && inputFechaNacimiento !="" && inputPassword !="" && inputTyC.checked == true) {
        swal("Muy Bien!", "Registro Exitoso!", "Success");
        setTimeout(()=>{window.location = './assets/paginas/index.html'},2000)
    }

}