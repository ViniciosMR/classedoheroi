let vidaDoMonstro = 100
let danoDoAtaque = 20

function calculoDeDano() {
  vidaDoMonstro = vidaDoMonstro - danoDoAtaque
}

class criandoHeroi {
  constructor(nomeDoHeroi, idadeDoHeroi, classeDoHeroi) {
    this.nomeDoHeroi = nomeDoHeroi
    this.idadeDoHeroi = idadeDoHeroi
    this.classeDoHeroi = classeDoHeroi
  }
  atacar(){
    this.tipoDoAtaque = " "
    if(this.classeDoHeroi === "Red Mage"){
      this.tipoDoAtaque = "Firaga"
    } else if (this.classeDoHeroi === "Squire") {
      this.tipoDoAtaque = "Focus"
    } else if (this.classeDoHeroi === "Lancer") {
      this.tipoDoAtaque = "Jump +2"
    } else if (this.classeDoHeroi === "ninja") {
      this.tipoDoAtaque = "Muramasa"
    }
    this.escrever()
  }
  escrever(){
    console.log(`O ${this.classeDoHeroi} atacou ${this.tipoDoAtaque} e totalizou ${danoDoAtaque} de dano no monstro.`)
  }
}

let heroi = new criandoHeroi("Ramza", "19", "Squire")

while (danoDoAtaque < vidaDoMonstro) {
  heroi.atacar()
  danoDoAtaque = danoDoAtaque + 20
  if (danoDoAtaque === 100) {
    console.log("O herói atacou mais uma vez e derrotou o monstro.")
  }
}











