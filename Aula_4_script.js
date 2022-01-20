//estruturas condicionais
var jogador1 = 0;
var jogador2 = 0;
var placar;

//if ternário 
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
console.log('Jogadores Inválidos');

if (jogador1 > 0)
    {
        console.log ('O jogador 1 marcou ponto');
        placar = jogador1 > jogador2;
    }   
        else if (jogador2 > 0)
        {
            console.log('O jogador 2 marcou ponto');
            placar = jogador2 > jogador1;
        }
            else
                {
                    console.log('Nenhum jogador marcou ponto');
                }

//switch/case
switch(placar)
{
    case placar = jogador1 > jogador2:
        console.log('O jogador 1 ganhou');
    break;
    case placar = jogador2 > jogador1:
        console.log('O jogador 2 ganhou');
    break;
    default:
        console.log("Ninguém ganhou");
}


//estruturas de repetição
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', pripriedade3: 'valor3',}


//for - executa uma instrução até que ela seja falsa
for (let indice = 0; indice < array.length; indice++)
{
    console.log(indice);
}



//for/in - executa repetição a partir de uma propriedade
//com array
for (let i in array) 
{
    console.log(i);
}

for (i in object)
{
    console.log(i)
}



//for/of - repetição a partir de um valor
//com array
for (i of array)
{
    console.log(i);
}

//for/of - repetição a partir de um valor
//com object (essa estrutura não é utilizada com object)
for (i of object.propriedade)
{
    console.log(i);
}


// while - executa uma instrução enquanto determinada condição for verdadeira;

var i = 0;

while (i < 10)
{
    i++;
    console.log(i);
}

// do/while
var i = 0; 

do 
{
    i++;
    console.log(i);
} while (i < 10);