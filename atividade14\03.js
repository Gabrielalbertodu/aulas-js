

/* para executar o código, basta remover os comentários (/*) de cada bloco de código que deseja testar. Cada bloco é independente e pode ser executado separadamente. */


1
let numeroSecreto = Math.floor(Math.random() * 20) + 1;

let tentativa;
let acertou = false;

while (!acertou) {
    tentativa = Number(prompt("Adivinhe o número entre 1 e 20:"));

    if (tentativa === numeroSecreto) {
        alert("Parabéns! Você acertou o número: " + numeroSecreto);
        acertou = true;
    } 
    else if (tentativa > numeroSecreto) {
        alert("O número secreto é MENOR que " + tentativa);
    } 
    else if (tentativa < numeroSecreto) {
        alert("O número secreto é MAIOR que " + tentativa);
    } 
    else {
        alert("Digite um número válido!");
    }
}



/* 
2
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


 */

/*
3
 let numero = parseInt(prompt("Digite um número para a tabuada:"));

for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
 */


/* 
4
let linhas = parseInt(prompt("Digite o número de linhas do triângulo:"));

for (let i = 1; i <= linhas; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += "*";
    }
    console.log(linha);
}
 */



/*
5
let termos = parseInt(prompt("Digite a quantidade de termos da série:"));

let numeroSerie = 0;
let soma = 0;
let expressao = "";

for (let i = 1; i <= termos; i++) {
    numeroSerie = numeroSerie * 10 + 1;
    soma += numeroSerie;
    expressao += numeroSerie;
    if (i < termos) {
        expressao += " + ";
    }
}

console.log(expressao);
console.log("A soma é: " + soma); */
