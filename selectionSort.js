const livros = require('./listalivros');
const menorValor = require("./menorValor");

                    //1
    for (let atual = 0; atual < livros.length; atual++) {

        let menor = menorValor(livros, atual)

        let livrosAtual = livros[atual];
        console.log('posição atual', atual)
        console.log('livro atual', livros[atual])
        let livrosMenorPreco = livros[menor];
        console.log('livro menor preço', livros[atual])

        livros[atual] = livrosMenorPreco
        livros[menor] = livrosAtual

    }

    console.log(livros)