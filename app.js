class Persona {
    constructor(id, nombre, apellido, email, pais) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.pais = pais;
    }
}

function validarString() {
    swal({
        title: "Has colocado números",
        text: "Por favor ingresa los datos nuevamente",
        icon: "error",
    });
    formulario.reset()
    personas.push();
}

function formularioSuccess() {
    swal({
        icon: "success",
        text: "¡Gracias por suscribirte a nuestro newsletter!",
        button: false,
        timer: 1800
    });
    formulario.reset();
}

let formulario = document.getElementById("formulario");
let nombreInput = document.getElementById("nombreInput");
let apellidoInput = document.getElementById("apellidoInput");
let pasaporteInput = document.getElementById("emailInput");
let nacionalidadInput = document.getElementById("nacionalidadInput");
let paisesLista = document.getElementById("paises");  
let botonSuscrbibirme = document.getElementById("btnSuscribirme");

let personas = [];

formulario.onsubmit = (event) => validarFormulario(event);
function validarFormulario(event) {
    event.preventDefault();
    
    nombre = nombreInput.value;
    apellido = apellidoInput.value;
    email = emailInput.value;
    pais = paisesLista.value;

    let persona = new Persona(nombre, apellido, email, pais);
    (isNaN(nombre) && true) ?
        (isNaN(apellido) && true) ?
                personas.push(persona) && formularioSuccess() : (validarString()) : (validarString());
}