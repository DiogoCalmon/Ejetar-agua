
window.addEventListener("load", () => {
    const ball = document.querySelector(".ball");
    const icon = document.querySelector(".playpause")

    ball.addEventListener("click", function() 
    {
        const header = document.querySelector("#header"); 

        const currentHeightPx = parseFloat(window.getComputedStyle(header).height);
        const viewportHeight = window.innerHeight;
        const currentHeightVh = (currentHeightPx / viewportHeight) * 100;
        
        console.log("currentHeightPx: " + currentHeightPx);
        console.log("viewportHeight: " + viewportHeight);
        console.log("currentHeightVh: " + currentHeightVh);

        const text = document.querySelector(".texts");
        
        const currentTextPx = parseFloat(window.getComputedStyle(text).height);
        const viewportText = window.innerHeight;
        const currentTextVh = (currentTextPx / viewportText) * 100;

        if (currentHeightVh > 10)
        {
            header.style.opacity = '0%';
            header.style.height = '3vh';

            text.style.opacity = '100%';
            text.style.height = '0%';
        }
        else
        {
            header.style.opacity = '100%';
            header.style.height = '20vh';

            text.style.opacity = '0%';
            text.style.height = '50%';
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
