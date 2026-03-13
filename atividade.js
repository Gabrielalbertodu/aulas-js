let acertou=false
let escolhapc
let parar

while (!acertou) {
    let escolha=prompt("escolha pedra papel pou tesoura");
    alert(escolha);
    let compiuterescolha = Math.floor(Math.random() * 3);

    if (compiuterescolha === 1) {
        escolhapc=("pedra");
    }
    else if (compiuterescolha === 2) {
        escolhapc=("papel");
    }
    else if (compiuterescolha === 3) {
        escolhapc=("tesoura");
    }

    if (escolha===escolhapc) {
        alert("mesmo jogada")
    }
    if (escolha==="pedra" && escolhapc==="tesoura"|| escolha==="tesoura" && escolhapc==="papel"||escolha==="papel" && escolhapc==="pedra" ){
        alert("voce ganhou")
    }
    else {
        alert("perdeu")
    }
    parar=prompt("parar?")
    if (parar==="sim"){
        break
    }

}