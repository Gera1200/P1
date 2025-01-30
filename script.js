function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function mostrarSeccion(id) {
    let secciones = document.querySelectorAll(".seccion");
    secciones.forEach(seccion => {
        seccion.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");

    let menu = document.getElementById("menu");
    menu.style.display = "none";
}

function toggleInfo(id) {
    let info = document.getElementById(id);
    info.classList.toggle("mostrar");
}
