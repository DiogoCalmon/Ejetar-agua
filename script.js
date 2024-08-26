function atualizarBotao() {
    const larguraTelaModelo = 720;
    const larguraTelaAtual = window.innerWidth;

    const larguraBotao = Math.max(300, larguraTelaAtual - larguraTelaModelo);

    if (innerWidth < 1000)
    {
        document.querySelector('.ball').style.width = `${larguraBotao}px`;
    }
}

document.addEventListener('DOMContentLoaded', atualizarBotao);

window.addEventListener('resize', atualizarBotao);