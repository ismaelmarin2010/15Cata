// Manejo del formulario RSVP

const form = document.getElementById("rsvpForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Podés guardar en Google Sheets / API / Firebase etc.
    // Por ahora, solo mostramos confirmación visual

    form.style.display = "none";
    successMsg.style.display = "block";
});


// Funcion para el contador
function iniciarCuentaRegresiva() {
    const fechaObjetivo = new Date("2026-02-06T21:00:00-03:00").getTime();

    setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        if (diferencia <= 0) {
            document.getElementById("countdown").innerHTML =
                "<h2>¡Llegó el gran día!</h2>";
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = dias;
        document.getElementById("hours").textContent = horas;
        document.getElementById("minutes").textContent = minutos;
        document.getElementById("seconds").textContent = segundos;
    }, 1000);
}

iniciarCuentaRegresiva();
