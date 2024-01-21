let listaNumerosSorteados = [];
let limiteNumeroLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentivas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou');
        let palavraTentativa = tentivas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns você acertou o numero secreto com ${tentivas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        // tentativas = tentativas + 1;
        tentivas++;
        
        limparCampo();
       
    }
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumeroLista + 1);
    let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeElementosNaLista == limiteNumeroLista);{
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentivas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}











