document.addEventListener("DOMContentLoaded", () => {

    // Evita crear múltiples mensajes si ya existe
    if (!document.querySelector(".moon-welcome")) {

        const welcome = document.createElement("div");
        welcome.className = "moon-welcome";

        welcome.innerHTML = `
            <h2>🌙 Bienvenido a Moon Center</h2>
            <p>Sesión Informática – Versión 2.0</p>
        `;

        document.body.appendChild(welcome);

        // Mostrar animación
        setTimeout(() => {
            welcome.classList.add("show");
        }, 300);

        // Ocultar
        setTimeout(() => {
            welcome.classList.remove("show");
        }, 4000);

        // Eliminar del DOM
        setTimeout(() => {
            welcome.remove();
        }, 4700);
    }
});


// Mensaje de importancia
function mensajeImportancia() {

    // Evita duplicados
    if (document.querySelector(".moon-alert")) return;

    const box = document.createElement("div");
    box.className = "moon-alert";

    box.innerHTML = `
        <h3>📘 ¿Por qué es importante la Informática?</h3>
        <p>
            La informática impulsa el desarrollo tecnológico,
            mejora la calidad de vida y permite crear soluciones
            innovadoras para el mundo actual.
        </p>
    `;

    document.body.appendChild(box);

    setTimeout(() => {
        box.classList.add("show");
    }, 100);

    setTimeout(() => {
        box.classList.remove("show");
    }, 3500);

    setTimeout(() => {
        box.remove();
    }, 4200);
}