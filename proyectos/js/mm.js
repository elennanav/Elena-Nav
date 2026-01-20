document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.type').forEach(el => {

        const text = el.textContent; // guardamos el texto
        el.textContent = '';         // lo borramos

        let i = 0;
        const speed = 50; // velocidad (ms)

        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    });
});


