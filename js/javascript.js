
const bienvenida = document.getElementById('bienvenida');

bienvenida.addEventListener('animationend', () => {
    bienvenida.innerHTML = 'En las solapas verás la información sobre mi';
    bienvenida.style.fontSize = '1.5rem';
    bienvenida.style.textAlign = 'center';
});


bienvenida.classList.add('animacion-mensaje');

document.getElementById('enviar').onclick = function () {
    document.getElementById('notificacion').innerHTML = "";
}

function mouseOver(id) {
    document.getElementById(id).style.color = "red";
}

function mouseOut(id) {
    document.getElementById(id).style.color = "";
}

document.getElementById('formularioContacto').onsubmit = function (evento) {
    evento.preventDefault();
    var nombre = document.getElementById('formularioNombre').value;
    var email = document.getElementById('formularioEmail').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
        document.getElementById('notificacion').innerHTML = "Por favor, complete todos los campos.";
    }
    else {
        document.getElementById('notificacion').innerHTML = "El formulario ha sido enviado";
    }
}



