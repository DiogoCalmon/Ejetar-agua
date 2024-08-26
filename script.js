function atualizarBotao() {
    const larguraTelaModelo = 720;
    const larguraTelaAtual = window.innerWidth;

    const comprimentoTelaModelo = 540;
    const comprimentoTelaAtual = window.innerHeight


    const larguraBotao = Math.max(200, larguraTelaAtual - larguraTelaModelo);
    const comprimentoBotao = Math.max(200, comprimentoTelaAtual - comprimentoTelaModelo);

    document.querySelector('.ball').style.width = `${larguraBotao}px`;
    document.querySelector('.ball').style.height = `${comprimentoBotao}px`;
}

document.addEventListener('DOMContentLoaded', atualizarBotao);

window.addEventListener('resize', atualizarBotao);