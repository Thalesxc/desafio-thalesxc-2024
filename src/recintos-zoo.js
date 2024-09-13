import Zoologico from './Zoologico';
import Recinto from './Recinto';
import Animal from './animal';

const zoologico = new Zoologico();
zoologico.adicionarRecinto(new Recinto(1, ["savana"], 10, [new Animal("MACACO", 1, ["savana", "floresta"]), 
new Animal("MACACO", 1, ["savana", "floresta"]), new Animal("MACACO", 1, ["savana", "floresta"])]));
zoologico.adicionarRecinto(new Recinto(2, ["floresta"], 5));
zoologico.adicionarRecinto(new Recinto(3, ["savana", "rio"], 7, [new Animal("GAZELA", 2, ["savana"])]));
zoologico.adicionarRecinto(new Recinto(4, ["rio"], 8));
zoologico.adicionarRecinto(new Recinto(5, ["savana"], 9, [new Animal("LEAO", 3, ["savana"], true)]));

class RecintosZoo {

  
  analisaRecintos(animal, quantidade) {
    return zoologico.encontrarRecintosViaveis(animal, quantidade);
  }

}

export { RecintosZoo as RecintosZoo };
