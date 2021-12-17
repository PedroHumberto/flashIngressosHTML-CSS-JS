# Flash Ingressos

Index feita com HTML, CSS e J.S. Feita para estudos do uso do DOM e OOP.
Decidi usar o JS para incluir os cards dos filmes que irão aparecer na tela principal através do DOM.
Criei uma classe Ingressos com os atributos data, nome, endereço, tipo e imagem.

```javascript
class Ingresso{
    constructor(data, nome, endereco, tipo, imagem){
        this.data = data;
        this.nome = nome;
        this.endereco = endereco;
        this.tipo = tipo;
        this.imagem = imagem;
    };
};
```