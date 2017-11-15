function apertouTeclado(event) {
    alert("Apertou a tecla: "+event.keyCode);
}

function soltouTeclado(event) {
    alert("Soltou a tecla: "+event.keyCode);
}

function pressionaTeclado(event) {
    alert("Pressionou a tecla: "+event.keyCode);
}

function pressionaShift(event) {
    if(event.shiftKey == true) {
        console.log("Apertou a tecla shift... ");
    }
}
