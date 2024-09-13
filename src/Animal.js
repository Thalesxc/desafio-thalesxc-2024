class Animal {
    constructor(nome, tamanho, biomas, carnivoro = false) {
        this.nome = nome;
        this.tamanho = tamanho;
        this.biomas = biomas;
        this.carnivoro = carnivoro;
    }
}

export default Animal;