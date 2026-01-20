document.addEventListener("DOMContentLoaded", () => { 
    const tarjetas = Array.from(document.querySelectorAll(".tarjeta"));
    const botones = document.querySelectorAll(".filtros button");

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {

            // Quitar clase "activo" del resto
            botones.forEach((b) => b.classList.remove("activo"));
            boton.classList.add("activo");

            const filtro = boton.dataset.filter;

            tarjetas.forEach((tarjeta) => {
                const categorias = tarjeta.dataset.category.split(" ");

                if (filtro === "todos" || categorias.includes(filtro)) {
                    tarjeta.style.display = "block";
                } else {
                    tarjeta.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => { 
    const galeria = document.querySelector(".galeria");
    const tarjetas = Array.from(document.querySelectorAll(".tarjeta"));
    const botones = document.querySelectorAll(".filtros button");

    /* 🧩 ORDENAR TARJETAS POR data-orden */
    const tarjetasOrdenadas = tarjetas.sort((a, b) => {
        return parseInt(a.dataset.orden) - parseInt(b.dataset.orden);
    });

    // Insertarlas en el DOM ordenadas
    tarjetasOrdenadas.forEach(t => galeria.appendChild(t));

    /* 🎯 FILTRO */
    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            botones.forEach((b) => b.classList.remove("activo"));
            boton.classList.add("activo");

            const filtro = boton.dataset.filter;

            tarjetasOrdenadas.forEach((tarjeta) => {
                const categorias = tarjeta.dataset.category.split(" ");

                if (filtro === "todos" || categorias.includes(filtro)) {
                    tarjeta.style.display = "block";
                } else {
                    tarjeta.style.display = "none";
                }
            });
        });
    });
});
