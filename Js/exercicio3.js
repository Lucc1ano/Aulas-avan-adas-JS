/*Exercícios de Laços e Loops em JavaScript

1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor
seja inválido e continue pedindo até que o usuário informe um valor válido.*/


// 1. Validação de número entre 0 e 10
var numeroq;

do {
  numeroq = parseInt(prompt("1ª questão: Digite um número"));

  if (numeroq >= 0 && numeroq <= 10) {
    document.write("1ª questão: O número está entre 0 e 10. Ok!<br>");
  }
} while (numeroq < 0 || numeroq > 10 || isNaN(numeroq));

alert("Você digitou uma nota válida: " + numeroq);
document.write("Você digitou uma nota válida: " + numeroq);

// 2. Loop para imprimir números de 1 a 100
document.write("<br><br>");
document.write("questão 2 : ");
for (var i = 1; i <= 100; i++) {
  document.write(i + " ");
}

document.write("<br><br>");

// 3. Cadastro de usuário e senha
function pedirUsuarioESenha() {
  let usuario, senha;
  
  // Loop até que a senha seja diferente do nome de usuário
  while (true) {
    usuario = prompt("3° Digite o nome de usuário:");
    senha = prompt("3° Digite a senha:");

    // Verifica se a senha é igual ao nome de usuário
    if (usuario === senha) {
      alert("Erro: A senha não pode ser igual ao nome de usuário. Tente novamente.");
    } else {
      alert("Cadastro realizado com sucesso!");
      break; // Sai do loop quando a senha for válida
    }
  }document.write("questão 3  sai no alert : usuario :"+usuario +" senha : "+senha);
}

pedirUsuarioESenha();  // Chamando a função

document.write("<br><br>");

// 4. Validação de informações do usuário
function validarCadastro() {
  var nome, idade, salario, sexo, estadoCivil;

  // Validação do nome
  while (true) {
    nome = prompt("Digite seu nome:");
    if (nome.length > 3) {
      break;
    } else {
      alert("Erro: O nome deve ter mais que 3 caracteres. Tente novamente.");
    }
  }

  // Validação da idade
  while (true) {
    idade = parseInt(prompt("Digite sua idade:"));
    if (idade >= 0 && idade <= 150) {
      break;
    } else {
      alert("Erro: A idade deve estar entre 0 e 150. Tente novamente.");
    }
  }

  // Validação do salário
  while (true) {
    salario = parseFloat(prompt("Digite seu salário:"));
    if (salario > 0) {
      break;
    } else {
      alert("Erro: O salário deve ser maior que 0. Tente novamente.");
    }
  }

  // Validação do sexo
  while (true) {
    sexo = prompt("Digite seu sexo (f ou m):");
    if (sexo === "f" || sexo === "m" || sexo === "F" || sexo === "M") {
      break;
    } else {
      alert("Erro: O sexo deve ser 'f' ou 'm'. Tente novamente.");
    }
  }

  // Validação do estado civil
  while (true) {
    estadoCivil = prompt("Digite seu estado civil (s, c, v, d):");
    if (estadoCivil === "s" || estadoCivil === "c" || estadoCivil === "v" || estadoCivil === "d") {
      break;
    } else {
      alert("Erro: O estado civil deve ser uma das opções: 's', 'c', 'v', 'd'. Tente novamente.");
    }
  }

  alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nIdade: ${idade}\nSalário: R$ ${salario.toFixed(2)}\nSexo: ${sexo}\nEstado Civil: ${estadoCivil}`);
  document.write("questão 4 :")
  document.write(`Cadastro realizado com sucesso!\nNome: ${nome}\nIdade: ${idade}\nSalário: R$ ${salario.toFixed(2)}\nSexo: ${sexo}\nEstado Civil: ${estadoCivil}`);
}
validarCadastro();  // Chamando a função

document.write("<br><br>");

// 5. Cálculo de anos para a população A ultrapassar ou igualar a população B
function calcularAnosParaIgualarPopulacao(populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB) {
  let anos = 0;
  // Enquanto a população de A for menor que a de B
  while (populacaoA < populacaoB) {
    populacaoA *= (1 + taxaCrescimentoA / 100);  // Atualiza a população de A com base na taxa de crescimento
    populacaoB *= (1 + taxaCrescimentoB / 100);  // Atualiza a população de B com base na taxa de crescimento
    anos++;  // Incrementa o número de anos
  }
  return anos;
}

// Dados do problema
let populacaoA = 80000;      // População inicial do país A
let populacaoB = 200000;     // População inicial do país B
let taxaCrescimentoA = 3;    // Taxa de crescimento anual do país A
let taxaCrescimentoB = 1.5;  // Taxa de crescimento anual do país B

// Calculando o número de anos necessários
let anos = calcularAnosParaIgualarPopulacao(populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB);
alert(`Será necessário(s) ${anos} ano(s) para a população de A ultrapassar ou igualar a população de B.`);
document.write("questão 5 :")
document.write(`Será necessário(s) ${anos} ano(s) para a população de A ultrapassar ou igualar a população de B.`);
document.write("<br><br>");

// 6. Permite ao usuário informar as populações e taxas de crescimento
function calcularAnosComEntradaUsuario() {
  let populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB;

  // Solicitar entradas do usuário
  do {
    populacaoA = parseInt(prompt("Digite a população inicial do país A:"));
  } while (isNaN(populacaoA) || populacaoA <= 0);

  do {
    populacaoB = parseInt(prompt("Digite a população inicial do país B:"));
  } while (isNaN(populacaoB) || populacaoB <= 0);

  do {
    taxaCrescimentoA = parseFloat(prompt("Digite a taxa de crescimento anual do país A (%):"));
  } while (isNaN(taxaCrescimentoA) || taxaCrescimentoA <= 0);

  do {
    taxaCrescimentoB = parseFloat(prompt("Digite a taxa de crescimento anual do país B (%):"));
  } while (isNaN(taxaCrescimentoB) || taxaCrescimentoB <= 0);

  // Calculando o número de anos necessários
  let anos = calcularAnosParaIgualarPopulacao(populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB);

  alert(`Será necessário(s) ${anos} ano(s) para a população de A ultrapassar ou igualar a população de B.`);
}

calcularAnosComEntradaUsuario();  // Chamando a função para calcular com entrada do usuário

function pedirNumeroValido(mensagem, minimo) {
    let numerow;
    do {
        numerow = parseFloat(prompt(mensagem)); // Solicita a entrada do usuário
        if (isNaN(numerow) || numerow <= minimo) {
            alert(`Por favor, insira um valor válido maior que ${minimo}.`);
        }
    } while (isNaN(numerow) || numerow <= minimo); // Valida que o número seja válido e maior que o valor mínimo
    return numerow;
}

function executarProgramaq() {
    do {
        // Solicita as entradas do usuário
        let populacaoA = pedirNumeroValido("Informe a população inicial do país A (maior que 0):", 0);
        let populacaoB = pedirNumeroValido("Informe a população inicial do país B (maior que 0):", 0);
        let taxaCrescimentoA = pedirNumeroValido("Informe a taxa de crescimento anual do país A (%):", 0);
        let taxaCrescimentoB = pedirNumeroValido("Informe a taxa de crescimento anual do país B (%):", 0);

        // Calcula o número de anos necessários para a população A ultrapassar ou igualar a população B
        let anos = calcularAnosParaIgualarPopulacao(populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB);

        // Exibe o resultado
        document.write("questão 6 : ")
        document.write(`Será necessário(s) ${anos} ano(s) para a população de A ultrapassar ou igualar a população de B.`);
        
        // Pergunta se o usuário deseja fazer outra simulação
        var repetir = prompt("Deseja realizar outra simulação? (sim/nao)").toLowerCase();
    } while (repetir === "sim"); // Se o usuário responder 'sim', a operação será repetida
}

executarProgramaq();document.write("questão 7 : ")
document.write("<br><br>")
  
//7. Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois
//modifique o programa para que ele mostre os números um ao lado do outro.

  for(let i = 1; i < 21 ;i++ ){
  document.write(i)
}
document.write("<br><br>")

for (let i = 1; i < 21; i++) {
   

    document.write(i + "<br>")
}
document.write("<br><br>")

//8. Faça um programa que leia 5 números e informe o maior número.
document.write("questão 8 : ")
  function encontrarMaiorNumeroo() {
    let maiorNumero = -Infinity; // Inicializa com o menor número possível
    // Laço para ler 5 números
    for (let i = 1; i <= 5; i++) {
     // Solicita o número e converte para um valor numérico
     let numeror = parseFloat(prompt(`Informe o ${i}º número:`));

        // Verifica se o número é maior que o atual maior número
    if (numeror > maiorNumero) {
       maiorNumero = numeror; // Atualiza o maior número
        }
    }

    // Exibe o maior número
    alert(`O maior número informado foi: ${maiorNumero}`);
    document.write("questão 8 : O maior número informado foi:"+ maiorNumero);
}

// Chama a função
encontrarMaiorNumeroo();
document.write("<br><br>")


//9. Faça um programa que leia 5 números e informe a soma e a média dos números.

var numerog =0; 
for(let i = 0 ; i <5 ;i++ ){
  var numeroy = parseInt(prompt("digite um numero"))
  parseInt(numerog)
numerog += numeroy;


}var media = numerog / 5;
document.write("Questão 9")
document.write("<br>")
document.write("A soma total dos numeros é : "+numerog)
document.write("<br>")
document.write("A media dos numeros é : " +media)
document.write("<br><br>")


//10. Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {  // Verifica se o número é ímpar
        document.write(i);  // Imprime o número ímpar
    }
}
document.write("<br><br>")
//11. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no
//intervalo compreendido por eles.

  function gerarIntervalo() {
    // Solicita os números ao usuário e os converte para inteiros
    let num1 = parseInt(prompt("Informe o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Informe o segundo número inteiro:"));

    // Verifica qual é o menor e o maior número
    let inicio = Math.min(num1, num2);  // Menor número
    let fim = Math.max(num1, num2);     // Maior número

    // Laço para gerar os números no intervalo
    for (let i = inicio + 1; i < fim; i++) {
       alert(i);  // Imprime os números no intervalo
    }
}

// Chama a função
gerarIntervalo();
document.write("<br><br>")
document.write("Questão 12 : ")
document.write("<br>")
//12. Altere o programa anterior para mostrar no final a soma dos números.

  // Função para gerar números no intervalo entre dois números e calcular a soma
function gerarIntervaloESomar() {
    // Solicita os números ao usuário e os converte para inteiros
    let num1 = parseInt(prompt("Informe o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Informe o segundo número inteiro:"));

    // Verifica qual é o menor e o maior número
    let inicio = Math.min(num1, num2);  // Menor número
    let fim = Math.max(num1, num2);     // Maior número

    let soma = 0; // Variável para armazenar a soma

    // Laço para gerar os números no intervalo e calcular a soma
    for (let i = inicio + 1; i < fim; i++) {
        console.log(i);  // Imprime os números no intervalo
        soma += i;       // Adiciona o número à soma
    }

    // Exibe a soma dos números
    document.write(`A soma dos números no intervalo é: ${soma}`);
}

// Chama a função
gerarIntervaloESomar();

document.write("<br><br>")
//13. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro
//entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser
//conforme o exemplo abaixo:
// a. Tabuada de 5:
// 5 X 1 = 5
// 5 X 2 = 10
// ...
// 5 X 10 = 50
// b. Como fazer a tabuada
document.write("Questão 13")
function gerarTabuada() {
    // Solicita o número ao usuário
    let numerok = parseInt(prompt("Informe um número entre 1 e 10 para ver a tabuada:"));

    // Verifica se o número está no intervalo permitido
    if (numerok >= 1 && numerok <= 10) {
        document.write(`Tabuada de ${numerok}: <br>`);
        
        // Laço para calcular e mostrar a tabuada
        for (let i = 1; i <= 10; i++) {
            let resultado = numerok * i;  // Calcula o resultado da multiplicação
            document.write(`${numerok} X ${i} = ${resultado} <br>`);  // Exibe a tabuada no formato desejado
        }
    } else {
       alert("Por favor, informe um número entre 1 e 10."+ gerarTabuada());
    }
}

// Chama a função para gerar a tabuada
gerarTabuada();
document.write("<br><br>")
document.write("Questão 14")
// 14. Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro
// número elevado ao segundo número. Não utilize a função de potência da linguagem.

// Solicita a entrada de base e expoente
let base = parseFloat(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));

// Inicializa o resultado como 1
let resultadoq = 1;
// Se o expoente for positivo, multiplica a base pelo número de vezes
if (expoente > 0) {
    for (let i = 0; i < expoente; i++) {
        resultadoq *= base;
    }
}
// Se o expoente for negativo, calcula a potência como 1/(base^(-expoente))
else if (expoente < 0) {
    for (let i = 0; i < Math.abs(expoente); i++) {
        resultadoq *= base;
    }
    resultadoq = 1 / resultadoq;
}
// Se o expoente for zero, o resultado é sempre 1
else {
    resultadoq = 1;
}

// Exibe o resultado
alert(`${base} elevado a ${expoente} é ${resultadoq}`);

document.write("<br><br>")
document.write("Questão 15")
  // 15. Faça um programa que peça 10 números inteiros, 
// calcule e mostre a quantidade de números
// pares e a quantidade de números ímpares.

var numerop ;
var contadorpar=0;
var contadorimpar=0;
for(var i= 0 ; i <10 ;i++){
  numerop = parseInt(prompt("digite um numero"))

if(numerop % 2 === 0){
  contadorpar ++
alert(`${numerop} é um número par.<br>`)}

else {
    alert(`${numerop} é um número ímpar.<br>`)
    contadorimpar++}
}
document.write(`quantidade de numeros par : ${contadorpar} <br> quantidade de numeros impares ${contadorimpar}`)
document.write("<br><br>")
//16. A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... Faça um programa
//capaz de gerar a série até o n−ésimo termo.
//Sequência de Fibonacci com laços
document.write("Questão 16")
function fibonacci(n) {
    // Verifica se o valor de n é válido
    if (n <= 0) {
        document.write("O número de termos deve ser maior que 0.");
        return;
    }
    
    // Inicializa os dois primeiros termos da sequência de Fibonacci
    let a = 1, b = 1;

    // Imprime os primeiros termos
    document.write("Sequência de Fibonacci:");

    if (n >= 1) document.write(a);  // Imprime o primeiro termo
    if (n >= 2) document.write(b);  // Imprime o segundo termo

    // Gera os próximos termos usando laço
    for (let i = 3; i <= n; i++) {
        let nextTerm = a + b;  // Calcula o próximo termo
        document.write(nextTerm);  // Imprime o próximo termo

        // Atualiza os valores de a e b para os próximos cálculos
        a = b;
        b = nextTerm;
    }
}

// Solicita o número de termos ao usuário
let n = parseInt(prompt("Digite o número de termos da sequência de Fibonacci:"));

// Chama a função para gerar a sequência de Fibonacci
fibonacci(n);
document.write("<br><br>")
// 17. A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa
// que gere a série até que o valor seja maior que 500.

// Função para gerar a sequência de Fibonacci até o primeiro número maior que 500
document.write("Questão 17")
function fibonacciAte500() {
    let a = 0;  // Primeiro termo da sequência
    let b = 1;  // Segundo termo da sequência

    document.write("Sequência de Fibonacci até que o número seja maior que 500:");

    // Imprime os primeiros termos
    document.write(a);  // Imprime 0
     document.write(b);  // Imprime 1

    // Enquanto o próximo número for menor ou igual a 500, continua calculando
    while (true) {
        let nextTerm = a + b;  // Calcula o próximo número

        // Se o próximo termo for maior que 500, para o loop
        if (nextTerm > 500) {
            break;
        }

        // Imprime o próximo termo da sequência
        document.write(nextTerm);

        // Atualiza os valores de a e b
        a = b;
        b = nextTerm;
    }
}

// Chama a função para gerar a sequência de Fibonacci até 500
fibonacciAte500();
document.write("<br><br>")
document.write("Questão 18")
// 18. Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.:
// 5!=5.4.3.2.1=120
// Calcular fatorial com laços

// Função para calcular o fatorial de um número
function calcularFatorial(numerom) {
    if (numerom < 0) {
        return "Fatorial não definido para números negativos.";
    }

    let fatorial = 1;

    // Laço que calcula o fatorial
    for (let i = 1; i <= numerom; i++) {
        fatorial *= i;  // Multiplica o número atual pelo acumulado
    }

    return fatorial;
}

// Solicita ao usuário o número para calcular o fatorial
let numerom = parseInt(prompt("Digite um número para calcular o fatorial:"));

// Chama a função e exibe o resultado
let resultadoh = calcularFatorial(numerom);
document.write(`${numerom}! = ${resultadoh}`);


document.write("<br><br>")
  
//19. Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior
//valor e a soma dos valores.
document.write("Questão 19")
  var maior = -Infinity;
var menor = Infinity;

for(var i = 0 ; i<4 ; i++)
{
  var numeroz = parseInt(prompt("digite um numero"))
 if(numeroz > maior){
    maior = numeroz
  }
  if (numeroz < menor){
    menor = numeroz
  } 
}
 
   document.write(`esse é o maior numero: ${maior}`)
 document.write("<br>")
   document.write(`esse é o menor numero: ${menor}`)
   document.write("<br><br>")
// 20. Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.

document.write("Questão 20<br>"); 

var maior = -Infinity; 
var menor = Infinity; 
var soma = 0;

for (var i = 0; i < 4; i++) {   
  var numeroz = parseInt(prompt("Digite um número entre 0 e 1000:"));
  
  if (numeroz >= 0 && numeroz <= 1000) {
    soma += numeroz;

    if (numeroz > maior) {
      maior = numeroz;
    } 
    
    if (numeroz < menor) {
      menor = numeroz;
    }
  } else {
    alert("Número inválido! Por favor, insira um número entre 0 e 1000.");
    i--;
  }
}

document.write(`Esse é o maior número: ${maior}<br>`);
document.write(`Esse é o menor número: ${menor}<br>`);
document.write(`A soma dos números é: ${soma}<br><br>`);


// 21. Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes
// e limitando o fatorial a números inteiros positivos e menores que 16.

document.write("Questão 21<br>");

function calcularFatorial(n) {
  let fatorial = 1;
  for (let i = 1; i <= n; i++) {
    fatorial *= i;
  }
  return fatorial;
}

while (true) {
  var numero = parseInt(prompt("Digite um número inteiro positivo menor que 16 para calcular o fatorial (ou 0 para sair):"));

  if (numero === 0) {
    break;
  }

  if (numero > 0 && numero < 16) {
    var resultado = calcularFatorial(numero);
    document.write(`O fatorial de ${numero} é: ${resultado}<br>`);
  } else {
    alert("Por favor, insira um número inteiro positivo menor que 16.");
  }
}

document.write("Programa encerrado.<br>");

  
// 22. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
// Um número primo é aquele que é divisível somente por ele mesmo e por 1.
// Números primos com laços

document.write("Questão 22<br>");

var numero = parseInt(prompt("Digite um número inteiro para verificar se é primo:"));

function verificarPrimo(n) {
  if (n <= 1) {
    return false; // Números menores ou iguais a 1 não são primos
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // Se encontrar um divisor, não é primo
    }
  }

  return true; // Se não encontrar divisores, o número é primo
}

if (verificarPrimo(numero)) {
  document.write(`${numero} é um número primo.<br>`);
} else {
  document.write(`${numero} não é um número primo.<br>`);
}


// 23. Altere o programa de cálculo dos números primos, informando, caso o número não seja primo,
// por quais número ele é divisível.

document.write("Questão 23<br>");

var numero = parseInt(prompt("Digite um número inteiro para verificar se é primo:"));

function verificarPrimo(n) {
  if (n <= 1) {
    return { primo: false, divisores: [] }; // Números menores ou iguais a 1 não são primos
  }

  var divisores = [];
  
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisores.push(i); // Se for divisor, adiciona ao array de divisores
    }
  }

  // Se divisores encontrados, não é primo, e lista os divisores
  if (divisores.length > 0) {
    return { primo: false, divisores: divisores };
  }

  // Caso contrário, o número é primo
  return { primo: true, divisores: [] };
}

var resultado = verificarPrimo(numero);

if (resultado.primo) {
  document.write(`${numero} é um número primo.<br>`);
} else {
  document.write(`${numero} não é um número primo.<br>`);
  document.write(`Ele é divisível por: ${resultado.divisores.join(", ")}<br>`);
}

  
// 24. Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro
// fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele
// executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o
// número de testes (divisões) executados.

document.write("Questão 24<br>");

var N = parseInt(prompt("Digite um número inteiro N para encontrar todos os primos entre 1 e N:"));

var divisaoCount = 0; // Variável para contar o número de divisões

function verificarPrimo(n) {
  if (n <= 1) {
    return false; // Números menores ou iguais a 1 não são primos
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    divisaoCount++; // Conta uma divisão a cada tentativa de verificação
    if (n % i === 0) {
      return false; // Se for divisível por algum número, não é primo
    }
  }

  return true; // Se não encontrar nenhum divisor, é primo
}

document.write(`Números primos entre 1 e ${N} são:<br>`);

for (var i = 2; i <= N; i++) {
  if (verificarPrimo(i)) {
    document.write(i + "<br>");
  }
}

document.write(`<br>Total de divisões executadas: ${divisaoCount}<br>`);

  
// 25. Faça um programa que calcule o mostre a média aritmética de N notas.

document.write("Questão 25<br>");

var N = parseInt(prompt("Digite o número de notas:"));
var soma = 0;

for (var i = 1; i <= N; i++) {
  var nota = parseFloat(prompt(`Digite a nota ${i}:`));
  soma += nota; // Soma cada nota fornecida pelo usuário
}

var media = soma / N; // Calcula a média aritmética

document.write(`A média das ${N} notas é: ${media.toFixed(2)}<br>`);

  
// 26. Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar
// se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma
// é jovem, adulta ou idosa, conforme a média calculada.

document.write("Questão 26<br>");

var n = parseInt(prompt("Digite o número de pessoas:"));
var somaIdades = 0;

for (var i = 1; i <= n; i++) {
  var idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));
  somaIdades += idade; // Soma as idades de todas as pessoas
}

var mediaIdades = somaIdades / n; // Calcula a média das idades

document.write(`A média de idade da turma é: ${mediaIdades.toFixed(2)}<br>`);

if (mediaIdades <= 25) {
  document.write("A turma é jovem.<br>");
} else if (mediaIdades <= 60) {
  document.write("A turma é adulta.<br>");
} else {
  document.write("A turma é idosa.<br>");
}
  

// 27. Numa eleição existem três candidatos. Faça um programa que peça o número total de
// eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

document.write("Questão 27<br>");

var totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));

var votosCandidato1 = 0;
var votosCandidato2 = 0;
var votosCandidato3 = 0;

for (var i = 1; i <= totalEleitores; i++) {
  var voto = parseInt(prompt("Digite seu voto (1, 2 ou 3):\n1 - Candidato 1\n2 - Candidato 2\n3 - Candidato 3"));
  
  if (voto === 1) {
    votosCandidato1++;
  } else if (voto === 2) {
    votosCandidato2++;
  } else if (voto === 3) {
    votosCandidato3++;
  } else {
    alert("Voto inválido! Por favor, digite 1, 2 ou 3.");
    i--; // Decrementa o contador para que o eleitor possa votar novamente
  }
}

document.write(`Votos do Candidato 1: ${votosCandidato1}<br>`);
document.write(`Votos do Candidato 2: ${votosCandidato2}<br>`);
document.write(`Votos do Candidato 3: ${votosCandidato3}<br>`);

  
// 28. Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a
// quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais
// de 40 alunos.

document.write("Questão 28<br>");

var numeroDeTurmas = parseInt(prompt("Digite o número de turmas:"));
var somaAlunos = 0;
var turmasValidas = 0;

for (var i = 1; i <= numeroDeTurmas; i++) {
  var alunosNaTurma = parseInt(prompt(`Digite o número de alunos para a turma ${i}:`));
  
  // Verifica se o número de alunos está dentro do limite (não pode ter mais de 40 alunos por turma)
  if (alunosNaTurma <= 40) {
    somaAlunos += alunosNaTurma; // Soma o número de alunos se for válido
    turmasValidas++; // Conta a turma como válida
  } else {
    alert("O número de alunos por turma não pode ser maior que 40. Esta turma não será considerada.");
  }
}

if (turmasValidas > 0) {
  var mediaAlunosPorTurma = somaAlunos / turmasValidas;
  document.write(`A média de alunos por turma é: ${mediaAlunosPorTurma.toFixed(2)}<br>`);
} else {
  document.write("Não foi possível calcular a média, pois nenhuma turma foi válida.<br>");
}

  
// 29. Faça um programa que calcule o valor total investido por um colecionador em sua coleção de
// CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o
// valor para em cada um.

document.write("Questão 29<br>");

var quantidadeDeCDs = parseInt(prompt("Digite a quantidade de CDs na coleção:"));
var valorTotalInvestido = 0;

for (var i = 1; i <= quantidadeDeCDs; i++) {
  var valorCD = parseFloat(prompt(`Digite o valor do CD ${i}:`));
  valorTotalInvestido += valorCD; // Soma o valor investido em cada CD
}

var valorMedio = valorTotalInvestido / quantidadeDeCDs; // Calcula o valor médio gasto por CD

document.write(`O valor total investido na coleção de CDs é: R$ ${valorTotalInvestido.toFixed(2)}<br>`);
document.write(`O valor médio gasto por CD é: R$ ${valorMedio.toFixed(2)}<br>`);

  
// 30. O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas.
// Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o
// número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do
// caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você
// foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os
// preços de 1 até 50 produtos, conforme o exemplo abaixo:

// a. Lojas Quase Dois - Tabela de preços

// 1 - R$ 1.99
// 2 - R$ 3.98
// ...
// 50 - R$ 99.50

document.write("Lojas Quase Dois - Tabela de Preços<br><br>");

var precoUnitario = 1.99;

for (var i = 1; i <= 50; i++) {
  var total = i * precoUnitario;
  document.write(`${i} - R$ ${total.toFixed(2)}<br>`);
}


// 31. O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia
// da tabelinha, que já é um sucesso na sua loja de 1,99. Você foi contratado para desenvolver o
// programa que monta a tabela de preços de pães, de 1 até 50 pães, a partir do preço do pão
// informado pelo usuário, conforme o exemplo abaixo:
// a. Preço do pão: R$ 0.18

// Panificadora Pão de Ontem - Tabela de preços
// 1 - R$ 0.18
// 2 - R$ 0.36
// ...
// 50 - R$ 9.00

// 32. O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui
// uma loja de conveniências. Faça um programa que implemente uma caixa registradora
// rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços
// das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra.
// O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente
// forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá
// voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo
// abaixo:
// a. Lojas Tabajara

// Produto 1: R$ 2.20
// Produto 2: R$ 5.80
// Produto 3: R$ 0
// Total: R$ 9.00
// Dinheiro: R$ 20.00
// Troco: R$ 11.00
// ...

document.write("Panificadora Pão de Ontem - Tabela de Preços<br><br>");

// Solicita o preço do pão ao usuário
var precoDoPao = parseFloat(prompt("Digite o preço do pão: R$"));

// Verifica se o preço do pão é válido
if (precoDoPao <= 0) {
    document.write("Preço inválido. O preço do pão deve ser maior que zero.");
} else {
    // Gera a tabela de preços para 1 até 50 pães
    for (var i = 1; i <= 50; i++) {
        var total = i * precoDoPao; // Calcula o preço total para o número de pães
        document.write(`${i} - R$ ${total.toFixed(2)}<br>`); // Exibe o número de pães e o preço
    }
}


// 33. O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que
// leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior
// temperaturas informadas, bem como a média das temperaturas.


document.write("Departamento Estadual de Meteorologia - Relatório de Temperaturas<br><br>");

var temperatura;
var somaTemperaturas = 0;
var contador = 0;
var maiorTemperatura = -Infinity;  // Inicializa como o menor valor possível
var menorTemperatura = Infinity;   // Inicializa como o maior valor possível

while (true) {
  // Solicita a temperatura ao usuário
  temperatura = parseFloat(prompt("Digite a temperatura (ou '0' para encerrar):"));
  
  // Se o usuário digitar 0, o programa será encerrado
  if (temperatura === 0) {
    break;
  }
  
  // Atualiza a maior e a menor temperatura
  if (temperatura > maiorTemperatura) {
    maiorTemperatura = temperatura;
  }
  if (temperatura < menorTemperatura) {
    menorTemperatura = temperatura;
  }
  
  // Acumula a soma das temperaturas e incrementa o contador
  somaTemperaturas += temperatura;
  contador++;
}

// Verifica se pelo menos uma temperatura foi informada
if (contador > 0) {
  var mediaTemperaturas = somaTemperaturas / contador;
  
  // Exibe o resultado final
  document.write(`A menor temperatura informada foi: ${menorTemperatura}°C<br>`);
  document.write(`A maior temperatura informada foi: ${maiorTemperatura}°C<br>`);
  document.write(`A média das temperaturas é: ${mediaTemperaturas.toFixed(2)}°C<br>`);
} else {
  document.write("Nenhuma temperatura foi informada.<br>");
}

  
// 34. Os números primos possuem várias aplicações dentro da Computação, por exemplo na
// Criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um
// programa que peça um número inteiro e determine se ele é ou não um número primo.

document.write("Verificação de Número Primo<br><br>");

var numero = parseInt(prompt("Digite um número inteiro:"));

// Função para verificar se o número é primo
function verificarPrimo(num) {
  if (num < 2) {
    return false; // Números menores que 2 não são primos
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Se for divisível por algum número além de 1 e ele mesmo, não é primo
    }
  }
  return true; // Caso contrário, é primo
}

// Verifica se o número informado é primo e exibe o resultado
if (verificarPrimo(numero)) {
  document.write(`${numero} é um número primo!<br>`);
} else {
  document.write(`${numero} não é um número primo.<br>`);
}


  
// 35. Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos
// números primos existentes entre 1 e um número inteiro informado pelo usuário.

// Solicita ao usuário o valor máximo para encontrar os números primos
var limite = parseInt(prompt("Digite um número inteiro para encontrar os números primos até este valor:"));

// Função para verificar se um número é primo
function verificarPrimo(num) {
  if (num < 2) return false; // Números menores que 2 não são primos
  for (var i = 2; i <= Math.sqrt(num); i++) { // Verifica até a raiz quadrada do número
    if (num % i === 0) {
      return false; // Se for divisível por qualquer número, não é primo
    }
  }
  return true; // Caso contrário, é primo
}

// Exibe os números primos no intervalo de 1 até o limite fornecido
document.write(`Números primos de 1 até ${limite}:<br>`);
for (var i = 1; i <= limite; i++) {
  if (verificarPrimo(i)) {
    document.write(`${i} <br>`); // Exibe os números primos
  }
}


// 36. Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado
// pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor
// inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:
// a. Montar a tabuada de: 5
// Começar por: 4
// Terminar em: 7
// Vou montar a tabuada de 5 começando em 4 e terminando em 7:
// 5 X 4 = 20
// 5 X 5 = 25
// 5 X 6 = 30
// 5 X 7 = 35

// Obs: Você deve verificar se o usuário não digitou o final menor que o inicial.

// Solicita ao usuário os valores para a tabuada
var numero = parseInt(prompt("Montar a tabuada de:"));
var inicio = parseInt(prompt("Começar por:"));
var fim = parseInt(prompt("Terminar em:"));

// Verifica se o valor final é maior que o valor inicial
if (fim < inicio) {
  document.write("O valor final não pode ser menor que o valor inicial.");
} else {
  document.write(`Vou montar a tabuada de ${numero} começando em ${inicio} e terminando em ${fim}:<br><br>`);
  
  // Exibe a tabuada de acordo com os valores fornecidos
  for (var i = inicio; i <= fim; i++) {
    var resultado = numero * i;
    document.write(`${numero} X ${i} = ${resultado}<br>`);
  }
}

  
// 37. Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto, o mais
// baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada
// um dos clientes da academia seu código, sua altura e seu peso. O final da digitação de dados deve
// ser dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar o programa também deve
// ser informados os códigos e valores do clente mais alto, do mais baixo, do mais gordo e do mais
// magro, além da média das alturas e dos pesos dos clientes


document.write("Senso de Academia<br><br>");

var codigo;
var altura;
var peso;

var maisAlto = {codigo: 0, altura: 0};
var maisBaixo = {codigo: 0, altura: Infinity};
var maisGordo = {codigo: 0, peso: 0};
var maisMagro = {codigo: 0, peso: Infinity};

var somaAlturas = 0;
var somaPesos = 0;
var totalClientes = 0;

while (true) {
    codigo = parseInt(prompt("Digite o código do cliente (digite 0 para encerrar):"));
    
    if (codigo === 0) {
        break;
    }

    altura = parseFloat(prompt("Digite a altura do cliente:"));
    peso = parseFloat(prompt("Digite o peso do cliente:"));

    somaAlturas += altura;
    somaPesos += peso;
    totalClientes++;

    // Verifica o cliente mais alto
    if (altura > maisAlto.altura) {
        maisAlto = {codigo: codigo, altura: altura};
    }
    
    // Verifica o cliente mais baixo
    if (altura < maisBaixo.altura) {
        maisBaixo = {codigo: codigo, altura: altura};
    }
    
    // Verifica o cliente mais gordo
    if (peso > maisGordo.peso) {
        maisGordo = {codigo: codigo, peso: peso};
    }
    
    // Verifica o cliente mais magro
    if (peso < maisMagro.peso) {
        maisMagro = {codigo: codigo, peso: peso};
    }
}

var mediaAltura = somaAlturas / totalClientes;
var mediaPeso = somaPesos / totalClientes;

document.write(`<br>Cliente mais alto: Código ${maisAlto.codigo}, Altura ${maisAlto.altura}m<br>`);
document.write(`Cliente mais baixo: Código ${maisBaixo.codigo}, Altura ${maisBaixo.altura}m<br>`);
document.write(`Cliente mais gordo: Código ${maisGordo.codigo}, Peso ${maisGordo.peso}kg<br>`);
document.write(`Cliente mais magro: Código ${maisMagro.codigo}, Peso ${maisMagro.peso}kg<br>`);
document.write(`Média das alturas: ${mediaAltura.toFixed(2)}m<br>`);
document.write(`Média dos pesos: ${mediaPeso.toFixed(2)}kg<br>`);


// 38. Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:
// a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
// c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual
// do ano anterior. Faça um programa que determine o salário atual desse funcionário. Após concluir
// isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário.


var salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário: R$"));
var salario = salarioInicial;
var aumentoPercentual = 1.5 / 100; // Aumento inicial de 1.5%

// Salário inicial em 1995
var ano = 1995;

for (var anoAtual = 1996; anoAtual <= 2024; anoAtual++) {
    salario += salario * aumentoPercentual;
    aumentoPercentual *= 2; // O aumento dobra a cada ano após 1996
}

document.write(`O salário atual do funcionário é R$ ${salario.toFixed(2)} (referente a 2024).<br>`);

  
// 39. Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de
// trânsito. Foram obtidos os seguintes dados:
// a. Código da cidade;
// b. Número de veículos de passeio (em 1999);
// c. Número de acidentes de trânsito com vítimas (em 1999). Deseja-se saber:
// d. Qual o maior e menor índice de acidentes de transito e a que cidade pertence;
// e. Qual a média de veículos nas cinco cidades juntas;
// f. Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.

var cidades = 5;
var maiorIndice = {cidade: 0, indice: 0};
var menorIndice = {cidade: 0, indice: Infinity};
var somaVeiculos = 0;
var somaAcidentes = 0;
var cidadesComMenosVeiculos = 0;
var somaAcidentesMenosVeiculos = 0;

for (var i = 1; i <= cidades; i++) {
    var codigoCidade = parseInt(prompt(`Digite o código da cidade ${i}:`));
    var veiculos = parseInt(prompt(`Digite o número de veículos de passeio da cidade ${i}:`));
    var acidentes = parseInt(prompt(`Digite o número de acidentes com vítimas da cidade ${i}:`));
    
    // Calcular o índice de acidentes
    var indiceAcidentes = acidentes / veiculos;

    if (indiceAcidentes > maiorIndice.indice) {
        maiorIndice = {cidade: codigoCidade, indice: indiceAcidentes};
    }

    if (indiceAcidentes < menorIndice.indice) {
        menorIndice = {cidade: codigoCidade, indice: indiceAcidentes};
    }

    somaVeiculos += veiculos;
    somaAcidentes += acidentes;

    if (veiculos < 2000) {
        cidadesComMenosVeiculos++;
        somaAcidentesMenosVeiculos += acidentes;
    }
}

var mediaVeiculos = somaVeiculos / cidades;
var mediaAcidentesMenosVeiculos = cidadesComMenosVeiculos > 0 ? somaAcidentesMenosVeiculos / cidadesComMenosVeiculos : 0;

document.write(`Maior índice de acidentes: Cidade ${maiorIndice.cidade} com índice ${maiorIndice.indice.toFixed(2)}<br>`);
document.write(`Menor índice de acidentes: Cidade ${menorIndice.cidade} com índice ${menorIndice.indice.toFixed(2)}<br>`);
document.write(`Média de veículos nas 5 cidades: ${mediaVeiculos.toFixed(2)}<br>`);
document.write(`Média de acidentes nas cidades com menos de 2.000 veículos: ${mediaAcidentesMenosVeiculos.toFixed(2)}<br>`);


// 40. Faça um programa que receba o valor de uma dívida e mostre uma tabela com os seguintes
// dados: valor da dívida, valor dos juros, quantidade de parcelas e valor da parcela.
// a. Os juros e a quantidade de parcelas seguem a tabela abaixo:

// Quantidade de Parcelas % de Juros sobre o valor inicial da dívida
// 1 0
// 3 10
// 6 15
// 9 20
// 12 25
// Exemplo de saída do programa:
// Valor da Dívida Valor dos Juros Quantidade de Parcelas Valor da Parcela
// R$ 1.000,00 0 1 R$ 1.000,00
// R$ 1.100,00 100 3 R$ 366,00
// R$ 1.150,00 150 6 R$ 191,67

var divida = parseFloat(prompt("Digite o valor da dívida: R$"));

var parcelas = [1, 3, 6, 9, 12];
var juros = [0, 10, 15, 20, 25];

document.write("Tabela de Dívidas:<br>");
document.write("Valor da Dívida | Valor dos Juros | Quantidade de Parcelas | Valor da Parcela<br>");

for (var i = 0; i < parcelas.length; i++) {
    var quantidadeParcelas = parcelas[i];
    var percentualJuros = juros[i];
    var valorJuros = (divida * percentualJuros) / 100;
    var valorTotal = divida + valorJuros;
    var valorParcela = valorTotal / quantidadeParcelas;

    document.write(`R$ ${valorTotal.toFixed(2)} | R$ ${valorJuros.toFixed(2)} | ${quantidadeParcelas} | R$ ${valorParcela.toFixed(2)}<br>`);
}


// 41. O cardápio de uma lanchonete é o seguinte:
// a. Especificação Código Preço

// Cachorro Quente 100 R$ 1,20
// Bauru Simples 101 R$ 1,30
// Bauru com ovo 102 R$ 1,50
// Hambúrguer 103 R$ 1,20
// Cheeseburguer 104 R$ 1,30
// Refrigerante 105 R$ 1,00
// Faça um programa que leia o código dos itens pedidos e as quantidades desejadas.
// Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do
// pedido. Considere que o cliente deve informar quando o pedido deve ser encerrado.

var cardapio = {
    100: 1.20,
    101: 1.30,
    102: 1.50,
    103: 1.20,
    104: 1.30,
    105: 1.00
};

var total = 0;

while (true) {
    var codigo = parseInt(prompt("Digite o código do item (0 para encerrar):"));
    if (codigo === 0) break;

    if (cardapio[codigo]) {
        var quantidade = parseInt(prompt("Digite a quantidade:"));
        var preco = cardapio[codigo];
        var subtotal = preco * quantidade;
        total += subtotal;
        document.write(`Item ${codigo} - Preço unitário: R$ ${preco} - Quantidade: ${quantidade} - Total: R$ ${subtotal.toFixed(2)}<br>`);
    } else {
        alert("Código inválido.");
    }
}

document.write(`<br>Total Geral: R$ ${total.toFixed(2)}<br>`);

  

// 42. Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de
// código. Os códigos utilizados são:
// a. 1 , 2, 3, 4 - Votos para os respectivos candidatos

// (você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
// 5 - Voto Nulo
// 6 - Voto em Branco

// Faça um programa que calcule e mostre:

// b. O total de votos para cada candidato;
// c. O total de votos nulos;
// d. O total de votos em branco;
// e. A percentagem de votos nulos sobre o total de votos;
// f. A percentagem de votos em branco sobre o total de votos. Para finalizar o conjunto de votos
// tem-se o valor zero.

var votos = [0, 0, 0, 0, 0, 0]; // Votos para candidatos 1, 2, 3, 4, nulos, brancos

while (true) {
    var voto = parseInt(prompt("Digite o código do voto (1-4 para candidatos, 5 para nulo, 6 para branco, 0 para encerrar):"));
    if (voto === 0) break;

    if (voto >= 1 && voto <= 4) {
        votos[voto - 1]++;
    } else if (voto === 5) {
        votos[4]++;
    } else if (voto === 6) {
        votos[5]++;
    } else {
        alert("Código inválido.");
    }
}

var totalVotos = votos.reduce((a, b) => a + b, 0);
var percentVotosNulos = (votos[4] / totalVotos) * 100;
var percentVotosBrancos = (votos[5] / totalVotos) * 100;

document.write(`Votos Candidato 1: ${votos[0]}<br>`);
document.write(`Votos Candidato 2: ${votos[1]}<br>`);
document.write(`Votos Candidato 3: ${votos[2]}<br>`);
document.write(`Votos Candidato 4: ${votos[3]}<br>`);
document.write(`Votos Nulos: ${votos[4]}<br>`);
document.write(`Votos em Branco: ${votos[5]}<br>`);
document.write(`Percentagem de votos nulos: ${percentVotosNulos.toFixed(2)}%<br>`);
document.write(`Percentagem de votos em branco: ${percentVotosBrancos.toFixed(2)}%<br>`);

  
// 43. Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o
// programa deve perguntar ao aluno a resposta de cada questão e ao final comparar com o gabarito
// da prova e assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa). Após
// cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema.
// Após todos os alunos terem respondido informar:
// a. Maior e Menor Acerto;
// b. Total de Alunos que utilizaram o sistema;
// c. A Média das Notas da Turma.

var gabarito = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B'];
var totalAlunos = 0;
var maiorNota = 0;
var menorNota = 10;
var somaNotas = 0;

while (true) {
    var acertos = 0;

    for (var i = 0; i < 10; i++) {
        var resposta = prompt(`Questão ${i+1}: Sua resposta (A/B/C/D):`);
        if (resposta === gabarito[i]) {
            acertos++;
        }
    }

    totalAlunos++;
    maiorNota = Math.max(maiorNota, acertos);
    menorNota = Math.min(menorNota, acertos);
    somaNotas += acertos;

    var outroAluno = prompt("Outro aluno vai utilizar o sistema? (S/N):");
    if (outroAluno.toUpperCase() !== 'S') {
        break;
    }
}

var mediaNotas = somaNotas / totalAlunos;

document.write(`Maior nota: ${maiorNota}<br>`);
document.write(`Menor nota: ${menorNota}<br>`);
document.write(`Total de alunos: ${totalAlunos}<br>`);
document.write(`Média das notas: ${mediaNotas.toFixed(2)}<br>`);
