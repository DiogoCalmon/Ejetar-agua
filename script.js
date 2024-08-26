function atualizarBotao() {
    const larguraTelaModelo = 720;
    const larguraTelaAtual = window.innerWidth;

    const larguraBotao = Math.max(250, larguraTelaAtual - larguraTelaModelo);

    if (innerWidth < 1000)
    {
        document.querySelector('.ball').style.width = `${larguraBotao}px`;
    }
}

document.addEventListener('DOMContentLoaded', atualizarBotao);

window.addEventListener('resize', atualizarBotao);

let audio = document.getElementById("audio");
let go = document.querySelector(".ball");
let count = 0;

function playPause() {
    if (count == 0)
    {
        count = 1;
        audio.play();
        song.innerHTML = "&#9208"
        result.innerHTML = "Pause";
    }
    else
    {
        count = 0;
        audio.pause()
        song.innerHTML = "&#9658"
        result.innerHTML = "Ejetar água"
    }
}