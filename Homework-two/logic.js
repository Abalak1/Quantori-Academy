
const btn = document.getElementById("btn")
const audio = new Audio("./sounds/laser.mp3")
btn.addEventListener("click", () => {
    const boxTwo = document.getElementById("box-two")
    boxTwo.classList.remove("hidden")
    btn.classList.add("hidden")
    setInterval(() => {
        audio.play();

    }, 3000);

})

