class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;   
        this.idade = idade;
        this.tipo = tipo; 
    }

    atacar(){
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            case "assasino":
                ataque = "veneno";
                break;

            default:
                ataque = "desconhecido";
        }
    
        console.log(`O ${this.tipo} atacou usando ${ataque}!`);

    }      
}

let Gerreiro = new heroi("Guilherme", 25, "guerreiro")
Gerreiro.atacar()

let mago = new heroi("Francisco", 15, "mago")
mago.atacar()

let monge = new heroi("João", 29, "monge")
monge.atacar()

let ninja = new heroi("Enzo", 12, "ninja")
ninja.atacar()

let assasino = new heroi("Ricardo", 19, "assasino")
assasino.atacar()