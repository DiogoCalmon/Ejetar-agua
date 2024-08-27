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

window.addEventListener("load", () => {
    const btn = document.querySelector(".ball");

    btn.addEventListener("click", function() {
        btn.classList.toggle('playing');
    })
});

let audio = document.getElementById("audio");
let go = document.querySelector(".ball");
let count = 0;

function playPause() {
    if (count == 0)
    {
        count = 1;
        audio.play();
    }
    else
    {
        count = 0;
        audio.pause();
    }
}