import Recinto from './Recinto';
import Animal from './animal';

class Zoologico {
    constructor() {
        this.recintos = [];
    }

    adicionarRecinto(recinto) {
        this.recintos.push(recinto);
    }

    encontrarRecintosViaveis(nomeAnimal, quantidade) {
        const especieAnimal = this.definirEspecie(nomeAnimal);
        if (!especieAnimal) {
            return { erro: "Animal inválido" };
        }
        if (quantidade <= 0 || !Number.isInteger(quantidade)) {
            return { erro: "Quantidade inválida" };
        }

        const recintosViaveis = this.recintos.filter(recinto =>
            recinto.podeAdicionarAnimal(especieAnimal, quantidade)
        ).map(recinto => 
            `Recinto ${recinto.numero} (espaço livre: ${recinto.espacoLivre} total: ${recinto.tamanhoTotal})`
        );

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável" };
        }

        return { recintosViaveis };
    }

    definirEspecie(nomeAnimal) {
        const especies = {
            LEAO: new Animal("LEAO", 3, ["savana"], true),
            LEOPARDO: new Animal("LEOPARDO", 2, ["savana"], true),
            CROCODILO: new Animal("CROCODILO", 3, ["rio"], true),
            MACACO: new Animal("MACACO", 1, ["savana", "floresta"]),
            GAZELA: new Animal("GAZELA", 2, ["savana"]),
            HIPOPOTAMO: new Animal("HIPOPOTAMO", 4, ["savana", "rio"]),
        };
        return especies[nomeAnimal] || null;
    }
}

export default Zoologico;
