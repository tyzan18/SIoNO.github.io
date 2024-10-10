const btnNo = document.querySelector("#btn-random");

function moverAleatoriamente(btn) {
    // Establecer posición absoluta y estilo
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.transition = "top 0.3s ease, left 0.3s ease"; // Movimiento suave

    // Obtener el tamaño del botón y de la ventana
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calcular posiciones aleatorias sin que se salga del viewport
    const randomTop = Math.floor(Math.random() * (windowHeight - btnHeight));
    const randomLeft = Math.floor(Math.random() * (windowWidth - btnWidth));

    // Asignar las nuevas posiciones al botón
    btn.style.top = randomTop + "px";
    btn.style.left = randomLeft + "px";
}

// Añadir el evento cuando el mouse entra en el botón
btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target);
});
