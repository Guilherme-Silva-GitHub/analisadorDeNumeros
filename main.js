// Pegando os elementos necessários

// Input do número

let num = document.querySelector('#num');

// Input da seleção

let numSelecao = document.querySelector('#numSelecao');

// Resposta para mostrar no HTML

let res = document.querySelector('#res');

// Valores da lista

let valores = [];

// Funções necessárias para validar o número

function isNumber(n){

    if (Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }

}

function inLista(n, l){

    if (l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }

}

// Função para colocar valor no select com options

function adicionar(){

    // Uso das duas funções acima (ver se é um número válido e se o item não (!) está na lista, buscando um retorno false, mediante a execução do programa)

    if (isNumber(num.value) && !inLista(num.value, valores)){

        // Colocando na lista

        valores.push(Number(num.value));

        // Criando elemento e afilhando no select (appendChild nele)

        let item = document.createElement('option');

        item.text = `${num.value} adicionado.`;

        numSelecao.appendChild(item);

    } else if (!isNumber(num.value)) {

        alert(`Valor inválido, digite um número entre ${num.min} e ${num.max}!`);

    } else {

        alert("Digite algum número que não esteja na lista!");

    }

    // Deixando o input vazio

    num.value = '';
    num.focus();

}

// Função para finalizar o programa de analisar os números

function finalizar(){

    if (valores.length == 0){

        alert('Adicione valores antes de finalizar!');

    } else {

        // Total de valores reservados

        let total = valores.length;

        // Maior número, no princípio vai ser o primeiro

        let maior = valores[0];

        // Menor número, no princípio vai ser o primeiro

        let menor = valores[0];

        // Soma dos valores

        let soma = 0;

        // Média dos valores

        let media = 0;

        // Fazendo um laço para calcular a soma, maior e menor

        for (let pos in valores){

            // Somando

            soma += valores[pos];

            // Verificando o maior

            if (valores[pos] > maior){

                maior = valores[pos];

            }

            // Verificando o menor

            if (valores[pos] < menor) {

                menor = valores[pos];

            }

        }

        // Calculando a média

        media = soma / total;

        // Inserindo as respostas na div

        res.innerHTML = '';
        res.innerHTML += `<p><strong>Ao todo, temos ${total} números cadastrados!</strong></p>`;
        res.innerHTML += `<p><strong>O maior valor informado foi: ${maior}.</strong></p>`;
        res.innerHTML += `<p><strong>O menor valor informado foi: ${menor}.</strong></p>`;
        res.innerHTML += `<p><strong>Somando todos os valores, temos: ${soma}.</strong></p>`;
        res.innerHTML += `<p><strong>A média dos valores digitados é: ${media}.</strong></p>`;

    }

}