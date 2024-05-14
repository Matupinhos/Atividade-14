function pergunta1() {
    var num1 = document.getElementById('var1').value;
    var num2 = document.getElementById('var2').value;
    var pA = document.getElementById('pergunta1_a');
    var pB = document.getElementById('pergunta1_b');
    var pC = document.getElementById('pergunta1_c');
    var pD = document.getElementById('pergunta1_d');
    if (num1 < num2) {
        pA.innerHTML = num1 - num2;
    } else {
        pA.innerHTML = num2 -    num1
    }
    pB.innerHTML = (num1 * 2) + (num2 * 3);
    pC.innerHTML = num1 * num2; 
    if (num1 > num2) {
        pD.innerHTML = 'Em ordem decrescente : ' + num2 + ' < '+ num1;
    } else {
        pD.innerHTML = 'Em ordem decrescente : ' + num1 + ' < '+ num2;
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