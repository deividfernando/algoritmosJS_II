const { edGalho, edFolha } = require('./arrays');

function JuntaListas (lista1, lista2) {
    let listaFinal = [];
    let posicaoAtualL1 = 0;
    let posicaoAtualL2 = 0;
    let atual = 0;

    while (posicaoAtualL1 < lista1.length && posicaoAtualL2 < lista2.length) {
        let produtoAtualL1 = lista1[posicaoAtualL1];
        let produtoAtualL2 = lista2[posicaoAtualL2];

        if (produtoAtualL1.preco < produtoAtualL2.preco) {
            listaFinal[atual] = produtoAtualL1;

            posicaoAtualL1++;
        } else {
            listaFinal[atual] = produtoAtualL2;

            posicaoAtualL2++
        }

        atual++;
    }

    while (posicaoAtualL1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualL1];
        posicaoAtualL1++;
        atual++;
    }
    
    while (posicaoAtualL2 < lista2.length) {
        listaFinal[atual] = lista2[posicaoAtualL2];
        posicaoAtualL2++;
        atual++;
    }

    return listaFinal;
}

console.log(JuntaListas(edGalho, edFolha));