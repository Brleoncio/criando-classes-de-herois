let ataquePorTipo = {
    guerreiro: "espada",
    mago: "magia",
    moge: "artes marciais",
    ninja: "shuriken",
    assasino: "veneno",
    arqueiro: "arco e flecha"
}

class heroi {
    constructor(nome, nickName, idade, tipo) {
        this.nome = nome;
        this.nickName = nickName;   
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); 
    }

    validarTipo(){
        return ataquePorTipo.hasOwnProperty(this.tipo);
    }

    apresentar(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e no jogo tenho a classe ${this.tipo}.`);        
    }

    atacar(){
        if (this.validarTipo()) {
            let ataque = ataquePorTipo[this.tipo];
            console.log(`${this.nickName}, o ${this.tipo}, atacou usando ${ataque}!`);            
        } else {
            console.log(`Tipo herói invalido: ${this.tipo}. Não sei atacar.`);            
        }
    }
}

let Guerreiro = new heroi("Guilherme", "Hercules", 25, "guerreiro")
Guerreiro.apresentar()
Guerreiro.atacar()

let mago = new heroi("Francisco", "Lucius", 15, "mago")
mago.apresentar()
mago.atacar()

let monge = new heroi("João", "Po", 29, "monge")
monge.apresentar()
monge.atacar()

let ninja = new heroi("Enzo", "Sombra", 12, "ninja")
ninja.apresentar()
ninja.atacar()

let assasino = new heroi("Ricardo", "Espinho Negro", 19, "assasino")
assasino.apresentar()
assasino.atacar()

let arqueiro = new heroi("Luiz", "Arcanjo", 21, "arqueiro")
arqueiro.apresentar()
arqueiro.atacar()
