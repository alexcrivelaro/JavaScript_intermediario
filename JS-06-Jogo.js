function addBola() {
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    /* cria uma <div> e depois 
       cria a class="bola" dentro dessa div
       <div class="bola"><div> */

    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);
    /* Math.random() - gera um número decimal de 0 a 1.
       Math.random() * 500 - gera um número decimal de 0 a 500
       Math.floor(Math.rando() * 500); - gera um número inteiro de 0 a 500 */

    bola.setAttribute("style", "left:"+p1+"px; top:"+p2+"px;");
    /* criamos uma div com left:323 e top:122
    para colocar em alguma posição na tela
    <div style="left:323px;top:122px"><div> */

    bola.setAttribute("onclick", "estourar(this)");
    /* cria a ação de click e de estourar */

    document.body.appendChild(bola);
    /* appendChild() - pega o conteúno do site 
       e adiciona um elemento novo */
    }
    function estourar(elemento) {
        document.body.removeChild(elemento);
    /* estourar é remover o elemento da tela */
}

function iniciar() {
    setInterval(addBola, 1000)
    /* setar um time para addBola() */
}
