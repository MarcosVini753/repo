document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;

    const currentPage = window.location.pathname.split("/").pop();
    const match = currentPage.match(/etapa_(\d+)\.html/i);

    if (!match) return;

    const currentStep = parseInt(match[1]);
    const nextStep = currentStep + 1;
    const prevStep = currentStep - 1;

    // Redireciona ao enviar o formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Armazena a mensagem para a próxima página
        sessionStorage.setItem('formMensagem', JSON.stringify({
            texto: 'Etapa salva com sucesso!',
            tipo: 'sucesso'
        }));

        const nextPage = `./etapa_${nextStep}.html`;
        window.location.href = nextPage;
    });

    // Atualiza o botão "Voltar" se existir
    const backButton = document.querySelector(".btn-voltar");
    if (backButton && prevStep >= 1) {
        backButton.href = `./etapa_${prevStep}.html`;
    }
});
