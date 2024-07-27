let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;



function alterTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMsgIncial(){
    alterTexto('h1', 'Jogo Secreto');
    alterTexto('p', 'Escolha um numero de 1 a 10');
}

exibirMsgIncial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log (chute == numeroSecreto);

if(chute == numeroSecreto){
    alterTexto('h1', 'acertou');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
    alterTexto('p', mensagemTentativas);

    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    if (chute > numeroSecreto){
        alterTexto('p','O número secreto é menor');
    } else{
        alterTexto('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
}

}

function gerarNumero() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementoLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementoLista == numeroLimite ){
    listaDeNumerosSorteados = []
}



   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
   return gerarNumero();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
numeroSecreto = gerarNumero();
limparCampo();
tentativas == 1;
exibirMsgIncial();
document.getElementById('reiniciar').setAttribute('disabled', true);
}

