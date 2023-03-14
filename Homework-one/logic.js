




function powerButton() {
    var screen = document.getElementById("screen-background");
    var cont = document.getElementById("screen-content-middle");
    var cam = document.getElementById("camera-icon");
    var stat = document.getElementById("status-bar");

    screen.style.opacity = "0%"
    cont.style.opacity = "0%"
    cam.style.opacity = "0%"
    stat.style.opacity = "0%"
}

function homeButton() {
    var screen = document.getElementById("screen-background");
    var cont = document.getElementById("screen-content-middle");
    var cam = document.getElementById("camera-icon");
    var stat = document.getElementById("status-bar");

    screen.style.opacity = "100%"
    cont.style.opacity = "100%"
    cam.style.opacity = "0%"
    stat.style.opacity = "100%"
}


// const screen = document.getElementById('screen-background');
// const myButton = document.getElementById('power-button');

// myButton.addEventListener('click', () => {
//     if (screen.style.opacity === '1') {
//         screen.style.opacity = '0';
//         console.log("aaaa")
//     } else {
//         screen.style.opacity = '1';
//         console.log("bbb")
//     }
// });
