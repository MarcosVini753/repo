document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('[data-toggle-target]');

    toggles.forEach(toggle => {

        function updateToggle() {
            const targetSelector = toggle.getAttribute('data-toggle-target');
            const enableValue = toggle.getAttribute('data-enable-value');
            const targets = document.querySelectorAll(targetSelector);

            const isActive = toggle.checked && toggle.value === enableValue;

            targets.forEach(target => {
                console.log('target = ', target);
                if (isActive) {
                    target.disabled = false;
                    target.classList.remove('disabled');
                } else {
                    target.disabled = true;
                    target.classList.add('disabled');
                }
            });
        }

        toggle.addEventListener('change', updateToggle);
        updateToggle();
    });

    // Seleciona todos os campos controladores (ex.: select, radio)
    const controllers = document.querySelectorAll("[data-toggle-field]");

    controllers.forEach(controller => {
        const targetName = controller.getAttribute("data-toggle-field");
        const targets = document.querySelectorAll(`[data-show-when-field='${targetName}']`);

        function updateVisibility() {
            const selectedValue = controller.value;

            targets.forEach(target => {
                const showWhen = target.getAttribute("data-show-when");
                if (showWhen === selectedValue) {
                    target.style.display = "";
                    target.disabled = true;
                    target.removeAttribute("aria-hidden");
                } else {
                    target.style.display = "none";
                    target.disabled = false;
                    target.setAttribute("aria-hidden", "true");
                }
            });
        }

        controller.addEventListener("change", updateVisibility);
        updateVisibility();
    });
});