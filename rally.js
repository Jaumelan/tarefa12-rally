// Declarar os carros
const carroPedro = {
    velMin: 150,
    velMax: 230,
    derrap: 0.03
};

const carroJuca = {
    velMin: 120,
    velMax: 260,
    derrap: 0.05
};

const carroEdna = {
    velMin: 180,
    velMax: 220,
    derrap: 0.01
};

//selecionar elementos do html
const imprimirResultado = document.getElementById("resultados");

//para cada carro sortear um valor entre a velocidade máxima é mínima e subtrair o percentual de derrapagem

function velocidade(min,max,derrapagem) {
    let vel = Math.random()*(max-min) + min;
    let velocidadeFinal = vel*(100 - derrapagem) ;
    return velocidadeFinal;
}

//MODOS DE CORRIDAS
//corrida rápida: 10 voltas
let pedroFinal = 0;
let jucaFinal = 0;
let ednaFinal = 0;

function corridaRapida() {
    let pedroFinal = 0;
    let jucaFinal = 0;
    let ednaFinal = 0;
    
    imprimirResultado.innerHTML = "";
    for (let i = 0; i <= 9; i++) {
        let pedro = velocidade ( carroPedro.velMin , carroPedro.velMax , carroPedro.derrap );
        let juca = velocidade ( carroJuca.velMin , carroJuca.velMax , carroJuca.derrap );
        let edna = velocidade ( carroEdna.velMin , carroEdna.velMax , carroEdna.derrap );
        let volta = [pedro , juca, edna];
        let resultadoVolta = volta.sort((a,b) => b - a);
        if (resultadoVolta[0] === pedro) {
            pedroFinal += 1;
        } else if (resultadoVolta[0] === juca) {
            jucaFinal += 1;
        } else {
            ednaFinal += 1;
        }

    }
    let valoresFinais = [ pedroFinal, jucaFinal, ednaFinal ];
    let resultado = valoresFinais.sort(( a, b) => b - a);
    let vencedor ;
    if (resultado[0] === pedroFinal) {
        vencedor = "Pedro";
    } else if (resultado[0] === jucaFinal) {
        vencedor = "Juca";
    } else {
        vencedor = "Edna";
    }
    console.log("O vencedor da corrida rápida é " + vencedor);
    imprimirResultado.innerHTML = "O vencedor da corrida rápida é " + vencedor;
}

//Grande PrÊmio 70 voltas
function grandePremio() {
    let pedroFinal = 0;
    let jucaFinal = 0;
    let ednaFinal = 0;

    imprimirResultado.innerHTML = "";
    for (let i = 0; i <= 69; i++) {
        let pedro = velocidade ( carroPedro.velMin , carroPedro.velMax , carroPedro.derrap );
        let juca = velocidade ( carroJuca.velMin , carroJuca.velMax , carroJuca.derrap );
        let edna = velocidade ( carroEdna.velMin , carroEdna.velMax , carroEdna.derrap );
        let volta = [pedro , juca, edna];
        let resultadoVolta = volta.sort((a,b) => b - a);
        if (resultadoVolta[0] === pedro) {
            pedroFinal += 1;
        } else if (resultadoVolta[0] === juca) {
            jucaFinal += 1;
        } else {
            ednaFinal += 1;
        }
    }
    let valoresFinais = [ pedroFinal, jucaFinal, ednaFinal ];
    let resultado = valoresFinais.sort(( a, b) => b - a);
    let vencedor ;
    if (resultado[0] === pedroFinal) {
        vencedor = "Pedro";
    } else if (resultado[0] === jucaFinal) {
        vencedor = "Juca";
    } else {
        vencedor = "Edna";
    }
    console.log("O vencedor do Grande Prêmio é " + vencedor);
    imprimirResultado.innerHTML = "O vencedor do Grande Prêmio é " + vencedor;
}

//Enduro
function enduro() {
    imprimirResultado.innerHTML = "";
    let pedroFinal = 0;
    let jucaFinal = 0;
    let ednaFinal = 0;
    
    for (let i = 0; i <= 159; i++) {
        let pedro = velocidade ( carroPedro.velMin , carroPedro.velMax , carroPedro.derrap );
        let juca = velocidade ( carroJuca.velMin , carroJuca.velMax , carroJuca.derrap );
        let edna = velocidade ( carroEdna.velMin , carroEdna.velMax , carroEdna.derrap );
        let volta = [pedro , juca, edna];
        let resultadoVolta = volta.sort((a,b) => b - a);
        if (resultadoVolta[0] === pedro) {
            pedroFinal += 1;
        } else if (resultadoVolta[0] === juca) {
            jucaFinal += 1;
        } else {
            ednaFinal += 1;
        }
    }
    let valoresFinais = [ pedroFinal, jucaFinal, ednaFinal ];
    let resultado = valoresFinais.sort(( a, b) => b - a);
    let vencedor ;
    if (resultado[0] === pedroFinal) {
        vencedor = "Pedro";
    } else if (resultado[0] === jucaFinal) {
        vencedor = "Juca";
    } else {
        vencedor = "Edna";
    }
    console.log("O vencedor do Enduro é " + vencedor);
    imprimirResultado.innerHTML = "O vencedor do Enduro é " + vencedor;
}