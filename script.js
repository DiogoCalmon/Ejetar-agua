function atualizarBotao() {
    const larguraTelaModelo = 720;
    const larguraTelaAtual = window.innerWidth;

    const larguraBotao = Math.max(250, larguraTelaAtual - larguraTelaModelo);

    if (larguraTelaAtual < 1000)
    {
        document.querySelector('.ball').style.width = `${larguraBotao}px`;
    }
}

document.addEventListener('DOMContentLoaded', atualizarBotao);

window.addEventListener('resize', atualizarBotao);

window.addEventListener("load", () => {
    const ball = document.querySelector(".ball");
    const icon = document.querySelector(".playpause")

    ball.addEventListener("click", function() 
    {
        const header = querySelector("#header");
        console.log("funciocou");

        header.style.height = '10vh';
        icon.classList.toggle("playing");
    })      
});

let audio = document.getElementById("audio");
let count = 0;

function playPause() {
    if (count === 0) {
        count = 1;
        audio.play();
    } else
    {
        count = 0;
        audio.pause();
    }
}
