document.addEventListener("DOMContentLoaded", () => {
    const msgStatus = document.getElementById('msg-status');
    if (!msgStatus) return;

    function mostrarMensagem(texto, tipo = 'info') {
        msgStatus.textContent = texto;
        msgStatus.className = '';
        msgStatus.classList.add(`alert-${tipo}`);

        setTimeout(() => {
            msgStatus.textContent = '';
            msgStatus.className = '';
        }, 5000);
    }

    // Exibe mensagem armazenada no sessionStorage
    const mensagem = sessionStorage.getItem('formMensagem');
    if (mensagem) {
        const { texto, tipo } = JSON.parse(mensagem);
        mostrarMensagem(texto, tipo);
        sessionStorage.removeItem('formMensagem');
    }

    // Torna a função global para outros scripts se necessário
    window.mostrarMensagem = mostrarMensagem;
});
