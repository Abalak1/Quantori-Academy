

function powerButton() {

    var screen = document.getElementById("screen-background");
    var cont = document.getElementById("screen-content-middle");
    var cam = document.getElementById("camera-icon");
    var stat = document.getElementById("status-bar");
    screen.classList.toggle("hidden")
    cont.classList.toggle("hidden")
    cam.classList.toggle("hidden")
    stat.classList.toggle("hidden")

}



function homeButton() {
    var screen = document.getElementById("screen-background");
    var cont = document.getElementById("screen-content-middle");
    var cam = document.getElementById("camera-icon");
    var stat = document.getElementById("status-bar");

    screen.classList.remove("hidden")
    cont.classList.remove("hidden")
    cam.classList.remove("hidden")
    stat.classList.remove("hidden")
}





