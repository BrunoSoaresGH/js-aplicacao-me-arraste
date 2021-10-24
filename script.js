let caixa = document.querySelector("#caixa");
let cx, cy;

function setPos(x, y) {
    caixa.style.top = y + "px";
    caixa.style.left = x + "px"; 
}

caixa.addEventListener("mousedown", iniciaArraste);

function iniciaArraste(event) {
    cx = event.clientX - pxParaNum(caixa.style.left);    
    cy = event.clientY - pxParaNum(caixa.style.top);    
    caixa.classList.add("arrastando");
    document.addEventListener("mousemove", arrasta);
}

document.addEventListener("mouseup", terminaArraste);

function terminaArraste(event) {
    caixa.classList.remove("arrastando");
    document.removeEventListener("mousemove", arrasta);
}

function arrasta(event) {
    let x = event.clientX;    
    let y = event.clientY;
    setPos(x - cx, y - cy);
}

function pxParaNum(str) {
    return +(str.replace("px", ""));
}