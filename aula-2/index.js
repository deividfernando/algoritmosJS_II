const listaLivros = require('./array');

function MergeSort (array, nivelAninhamento = 0) {

    console.log(`Nível de aninhamento = ${nivelAninhamento}`);
    console.log(array);

    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = MergeSort(array.slice(0, meio), nivelAninhamento + 1); 
        const parte2 = MergeSort(array.slice(meio, array.length), nivelAninhamento + 1);

        array = Ordena(parte1, parte2);
    }

    return array;
}

function Ordena (parte1, parte2) {
    let posicaoAtualP1 = 0;
    let posicaoAtualP2 = 0;
    const resultado = [];

    while (posicaoAtualP1 < parte1.length && posicaoAtualP2 < parte2.length) {
        let produtoAtualP1 = parte1[posicaoAtualP1];
        let produtoAtualP2 = parte2[posicaoAtualP2]

        if (produtoAtualP1.preco < produtoAtualP2.preco) {
            resultado.push(produtoAtualP1);
            posicaoAtualP1++;
        } else {
            resultado.push(produtoAtualP2);
            posicaoAtualP2++;
        }
    }

    return resultado.concat(posicaoAtualP1 < parte1.length
        ? parte1.slice(posicaoAtualP1)
        : parte2.slice(posicaoAtualP2))
}

console.log(MergeSort(listaLivros));