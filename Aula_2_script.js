//tipos primitivos

//booleanos: recebem valores Verdadeiro ou Falso 
var VOuF = false; 
console.log(typeof(VOuF));

//number
var numeroQualquer = 1;
console.log(typeof (numeroQualquer)); 

//string 
var nome = 'Stheffany';
console.log(typeof(nome));

//como declarar
var variavel;
variavel = 'cruvinel';
console.log(variavel);

let variavel2 = 'stheffany';
//variavel let usada em escopos locais
console.log(variavel2);

const constante = 'ana';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal()
{
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

//chamada de função
escopoLocal();

//atribuição
var atribuicao = 0;

//comparação 
var comparacao = '0' == 0;
console.log(comparacao);

//comparação identica (usa-se 3 vezes o sinal de igual " = ", usa-se esse tipo de comparação para saber se o tipo e o valor da variável são iguais)
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//operadores aritméticos
var adicao = 1 + 1;
console.log(adicao);

var subtracao = 2 - 1;
console.log(subtracao);

var multiplicacao = 2 * 3;
console.log(multiplicacao);

var divisaoReal = 6 / 2;
console.log(divisaoReal);

var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

var potenciacao = 2 ** 10;
console.log(potenciacao);

//operadores relacionais
// > maior que;
// < menor que ;
// >= maior ou igual a; 
// <= menor ou igual a;

var maiorQue = 5 > 2;
console.log(maiorQue); 

var menorQue = 5 < 2;
console.log(menorQue); 

var maiorOuIgual = 5 >= 2
console.log(maiorOuIgual);

var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//operadores lógicos
var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);