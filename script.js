function atualizarBotao() {
    const larguraTelaModelo = 720
    const larguraTelaAtual = window.innerWidth

    const larguraBotao = Math.max(200, larguraTelaAtual - larguraTelaModelo)

    document.getElementsByClassName("ball").style.width = `${larguraBotao}px`
}

document.addEventListener('DOMContentLoaded', atualizarBotao);

window.addEventListener('resize', atualizarBotao)