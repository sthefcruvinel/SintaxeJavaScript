//vetores e arrays

//como declarar um array

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'],['array4']];
console.log(array); 

//funções nativas JavaScript para manipular vetores

//forEach (itera um array, faz um índice, exibe um por um dos itens do array)
array.forEach(function(item, index){console.log(item, index)});

//push (add item no final do array)
array.push('novo item');
console.log(array);

//pop (remove item no final do array)
array.pop();
console.log(array);

//shift (remove item do inicio do array)
array.shift();
console.log(array);

//unshift (add item no inicio do array)
array.unshift('novo item inicio');
console.log(array)

//indexOf (retorna o índice de um valor)
console.log(array.indexOf(true));

//splice (remove ou substitui um item pelo índice)
array.splice(0, 3);
console.log(array);

//slice (retorna uma parte de um array existente, também copia elementos de um vetor para outro, a partir do índice)
let novoArray = array.slice(0, 3);
console.log(novoArray);