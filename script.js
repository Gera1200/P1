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

    // Ocultar menú después de seleccionar
    let menu = document.getElementById("menu");
    menu.style.display = "none";
}

function toggleInfo(id) {
    let info = document.getElementById(id);
    if (info.classList.contains("mostrar")) {
        info.classList.remove("mostrar");
    } else {
        document.querySelectorAll(".info").forEach(el => el.classList.remove("mostrar"));
        info.classList.add("mostrar");
    }
}

