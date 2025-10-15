function goToStep(step) {
    window.location.href = `etapa_${step}.html`;
}

/* ====== Barra de Progresso Dinâmica ====== */
function gerarBarraProgresso() {
    const totalEtapas = 14;
    const container = document.getElementById('progress-bar-container');
    if (!container) return;

    // Detecta número da etapa a partir do nome do arquivo
    const match = window.location.pathname.match(/etapa_(\d+)/);
    const etapaAtual = match ? parseInt(match[1]) : 1;

    let html = `<div class="progress-bar"><ul class="steps">`;
    for (let i = 1; i <= totalEtapas; i++) {
        html += `<li class="${i === etapaAtual ? 'active' : ''}" onclick="goToStep(${i})">${i}</li>`;
    }
    // html += `</ul><p class="progress-text">Etapa ${etapaAtual} de ${totalEtapas}</p></div>`;

    container.innerHTML = html;
}

// executa automaticamente ao carregar
document.addEventListener('DOMContentLoaded', gerarBarraProgresso);
