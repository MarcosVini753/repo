// form-navigation.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;

    // Captura o nome do arquivo atual (ex: etapa_2.html)
    const currentPage = window.location.pathname.split("/").pop();
    const match = currentPage.match(/etapa_(\d+)\.html/i);

    if (!match) return; // se não estiver no formato esperado, não faz nada

    const currentStep = parseInt(match[1]);
    const nextStep = currentStep + 1;
    const prevStep = currentStep - 1;

    // Redireciona ao enviar o formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // impede o reload
        const nextPage = `./etapa_${nextStep}.html`;
        window.location.href = nextPage;
    });

    // Atualiza o botão "Voltar" se existir
    const backButton = document.querySelector(".btn-voltar");
    if (backButton && prevStep >= 1) {
        backButton.href = `./etapa_${prevStep}.html`;
    }
});
