// Menu dropdown - desplegable 
// constante del boton menu 
const btn_menu = document.querySelector('.btn_menu')
// constante del icono del boton menu 
const btn_menuIcon = document.querySelector('.btn_menu i')
// constante del menu
const dropdownMenu = document.querySelector('.dropdown_menu')
// funcion del boton menu al hacer click 
btn_menu.onclick = function(){
    // añade la clase open al elemento con la clase dropdownMenu 
    dropdownMenu.classList.toggle('open')
    // constant para comprobar si el menu con clase dropdownMenu tiene la clase open o no 
    const isOpen = dropdownMenu.classList.contains('open')
    // si el valor de la constante es True cambia el icono del menu al de cerrar, si es False cambia al icono de lista/abrir
    btn_menuIcon.classList = isOpen ? 'bi bi-x-circle' : 'bi bi-list'
}

// Carrusel 
// constante del elemento de clase large - contenedor de todas las imagenes
const large = document.querySelector('.large')
// constante de los puntos - de TODOS los puntos
const point = document.querySelectorAll('.point')
// recorre TODOS los puntos
point.forEach( (singlePoint, i) => {
    // asignamos un CLICK a singlePoint
    point[i].addEventListener('click', () => {
        // Guardar la posicion de ese punto
        let position = i
        // calculando el espacio que debe desplazarse el large
        let calc = (position * -33.3) - .1
        // se mueve el large
        large.style.transform = `translateX(${ calc }%)`
        // recorremos TODOS los puntos - otra vez
        point.forEach( (singlePoint, i) => {
            // quitamos la clase active a TODOS los puntos
            point[i].classList.remove('active')
        })
        // añadir la clase active en el punto pulsado - CLICK
        point[i].classList.add('active')
    })
})

// lightbox
const imagenes = document.querySelectorAll('.ul .a')
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector('.grande')
const cerrar = document.querySelector('.close')

imagenes.forEach( (cadaImagen, i) =>{
    imagenes[i].addEventListener('click', ( e ) =>{
        e.preventDefault()
        let ruta = cadaImagen.querySelector('.img').src
        console.log(ruta)
        lightbox.classList.add('mostrar')
        grande.setAttribute('src', ruta)
    })
})

cerrar.addEventListener('click', () =>{
    lightbox.classList.remove('mostrar')
})

// validar formulario de suscripcion
function validateSub() {
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
        alert("Por favor, introduzca una dirección de correo electrónico válida.");
        return false; // Evita que se envíe el formulario
    }

    // Si la validación pasa, el formulario se enviará
    return true;
}