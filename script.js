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
    const pause = document.querySelector(".pause");
    const play = document.querySelector(".play");
    const btn = document.querySelector("#app");

    btn.addEventListener("click", function() 
    {
        if(play.classList.contains("active"))
        {
            play.classList.remove("active");
            pause.classList.add("active");
        }
        else
        {
            pause.classList.remove("active");
            play.classList.add("active")
        }
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
