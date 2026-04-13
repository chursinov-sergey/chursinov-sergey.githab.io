document.addEventListener('DOMContentLoaded', () => {

    const copy = async (item) => {
        const text = item.dataset.copy;

        try {
            await navigator.clipboard.writeText(text);

            item.classList.add('copied');
            item.setAttribute('data-tooltip', 'Скопировано');

            setTimeout(() => {
                item.classList.remove('copied');
                item.removeAttribute('data-tooltip');
            }, 1500);

        } catch (err) {
            console.error('Ошибка копирования:', err);
        }
    };

    document.querySelectorAll('.contact-link').forEach(item => {

        // 👉 КЛИК ПО ИКОНКЕ
        const btn = item.querySelector('.copy-btn');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            copy(item);
        });

        // 👉 ПРАВЫЙ КЛИК (desktop)
        item.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            copy(item);
        });

        // 👉 ДОЛГИЙ ТАП (mobile)
        let pressTimer;

        item.addEventListener('touchstart', () => {
            pressTimer = setTimeout(() => {
                copy(item);
            }, 500);
        });

        item.addEventListener('touchend', () => {
            clearTimeout(pressTimer);
        });

    });

});