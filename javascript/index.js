function escuro(){
    const fundo = document.querySelector("body");
    const botao = document.querySelector("button");
    const verifica = fundo.classList.contains("escuro");
    fundo.classList.toggle("escuro");
    if(verifica === true){
        botao.innerHTML = "Modo Claro";
    } else{
        botao.innerHTML = "Modo Escuro";
    }
}