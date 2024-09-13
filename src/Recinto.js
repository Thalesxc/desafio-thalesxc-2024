import Animal from './animal';

class Recinto {
    constructor(numero, biomas, tamanhoTotal, animaisExistentes = [], espacoLivre = 0) {
        this.numero = numero;
        this.biomas = biomas;
        this.tamanhoTotal = tamanhoTotal;
        this.animaisExistentes = animaisExistentes;
        this.espacoLivre = espacoLivre;
    }

    getEspacoOcupado() {
        let espaco = 0;
        for (let i = 0; i < this.animaisExistentes.length; i++) {
            espaco = espaco + this.animaisExistentes[i].tamanho;
        }
        return espaco;
    }

    podeAdicionarAnimal(animal, quantidade) {
        if (!animal.biomas.some(bioma => this.biomas.includes(bioma))) {
            return false;
        }

        if(animal.nome === "MACACO" && this.animaisExistentes.length === 0 && quantidade === 1) {
            return false;
        }
        
        if (animal.nome === "HIPOPOTAMO" && this.animaisExistentes.length > 0 && !this.biomas.includes("savana" && "rio")) {
            return false;
        }

        let espacoNecessario = this.getEspacoOcupado() + (animal.tamanho * quantidade);
       
        if (this.animaisExistentes.length > 0 && !this.animaisExistentes.some(a => a.nome === animal.nome)) {
            espacoNecessario++;
        }
        
        if (espacoNecessario > this.tamanhoTotal) {
            return false;
        }
        this.espacoLivre = this.tamanhoTotal - espacoNecessario;

        if (animal.carnivoro) {
            return this.animaisExistentes.every(a => a.nome === animal.nome);
        }

        if (this.animaisExistentes.some(a => a.carnivoro)) {
            return false;
        }

        return true;
    }
}

export default Recinto;

