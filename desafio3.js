
//Função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro

let altura = parseInt(prompt('informe sua altura'));
let peso = parseInt(prompt('Informe seu peso'));

function calculoImc( altura, peso){
    return (altura * altura)/peso;
}

let imc = calculoImc(altura, peso);
alert(`Calculo de IMC é ${imc}`);

//função que calcule o valor do fatorial de um número passado como parâmetro.

let numero = parseInt(prompt('Digite um número'));

function calcularFatorial(num) {
    if (num == 0 || num == 1) {
      return 1;
    }
      let fatorial = 1;
    for (let i = 2; i <= num; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
    let resultado = calcularFatorial(numero);
  alert(`O fatorial de ${numero} é ${resultado}`);
  
 //função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

let valorEmDolar = 100;

 function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2); //usar 2 casas decimais após o ponto
  }
  
  let valorEmReais = converterDolarParaReal(valorEmDolar);
    alert(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);



//função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

let alt = Number(prompt('Digite a altura da sala'));
let largura = Number(prompt('Digite largura da sala'));

function areaPerimetro(alt, largura) {
  let area = alt * largura;
  let perimetro = (alt + largura) * 2
  return perimetro, area;
}

let medidaA = areaPerimetro(alt, largura);
let medidaP = areaPerimetro(alt, largura);

alert(`A área é de ${medidaA} metros quadrados.`);
alert(`O perímetro é de ${medidaP} metros.`);


// Função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.


let raio = 6;

function areaPerimetroCircular(raio) {
  let areaCirculo = Math.PI * raio * raio
  let perimetroCirculo = 2 * Math.PI * raio
  return areaCirculo, perimetroCirculo
  
}

let area = areaPerimetroCircular(raio);
let perimetro = areaPerimetroCircular(raio);

alert(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
alert(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);


//função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(num) {
  for (let i = 0 ; i <= 10 ; i++) {
      let resultadoTabuada = num * i;
      alert(`${num} x ${i} = ${resultadoTabuada}`);
  }
  return resultadoTabuada;
}

tabuada(9);
