function pergunta1() {
    var num1 = 5;
    var num2 = 3;
    var pA = document.getElementById('pergunta1_a');
    var pB = document.getElementById('pergunta1_b');
    var pC = document.getElementById('pergunta1_c');
    var pD = document.getElementById('pergunta1_d');
    var numero_aleatorio1 = Math.floor(Math.random() * 50);
    var numero_aleatorio2 = Math.floor(Math.random() * 50);
    pA.innerHTML = num1 - num2;
    pB.innerHTML = (num1 * 2) + (num2 * 3);
    pC.innerHTML = num1 * num2;
    pD.innerHTML = "Resultado no console!"
    console.log("---------------------------------------------------------")
    console.log("PERGUNTA 1:")
    console.log("Numero aleátorio 1:", numero_aleatorio1);
    console.log("Numero aleátorio 2:", numero_aleatorio2);
    if (numero_aleatorio1 > numero_aleatorio2) {
        console.log(numero_aleatorio1, '>', numero_aleatorio2);
    } else {
        console.log(numero_aleatorio2, '>', numero_aleatorio1);
    };
};
function pergunta2 (){
    var nome_funcionario = document.getElementById('nome_funcionario').value;
    var salario = document.getElementById('salario').value;
    var taxa_desconto;
    var valorINSS;

    if (salario <= 1000) {
        taxa_desconto = 0.08;
    } else if (salario <= 1500) {
        taxa_desconto = 0.085;
    } else {
        taxa_desconto = 0.09;
    }
    valorINSS = salario * taxa_desconto
    console.log("---------------------------------------------------------")
    console.log("Pergunta 2")
    console.log("Nome do funcionário: ",nome_funcionario);
    console.log("Salário Bruto: ",salario);
    console.log("Valor do INSS: ",valorINSS.toFixed(2));
    console.log("Salário Líquido: ",salario - valorINSS);
};