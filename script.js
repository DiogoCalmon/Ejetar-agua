
window.addEventListener("load", () => {
    const ball = document.querySelector(".ball");
    const icon = document.querySelector(".playpause")

    ball.addEventListener("click", function() 
    {
        const header = document.querySelector("#header"); 

        const currentHeightPx = parseFloat(window.getComputedStyle(header).height);
        const viewportHeight = window.innerHeight;
        const currentHeightVh = (currentHeightPx / viewportHeight) * 100;
        console.log(currentHeightVh)

        if (currentHeightVh == '20vh')
        {
            header.style.height = '10vh';
        }
        else
        {
            header.style.height = '20vh';
        }
        
        icon.classList.toggle("playing");
    })      
});

let audio = document.getElementById("audio");
let count = 0;

function playPause() {
    if (count === 0) {
        count = 1;
        audio.play();
    } 
    else
    {
        count = 0;
        audio.pause();
    }
}
