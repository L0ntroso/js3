function mostrarMensagem() {
  console.log("1. Bem-vindo ao estudo de funções em JavaScript!");
}
mostrarMensagem();
function somaSimples() {
  const a = 4;
  const b = 6;
  console.log(`2. ${a} + ${b} = ${a + b}`);
}
somaSimples();
function imprimirNome() {
  const nome = "Maria";
  console.log(`3. Nome: ${nome}`);
}
imprimirNome();
function quadrado(numero) {
  return numero * numero;
}
console.log(`4. quadrado(5) = ${quadrado(5)}`);
function converterParaCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log(`5. 98.6°F = ${converterParaCelsius(98.6).toFixed(1)}°C`);
function concatenaPalavras(palavra1, palavra2) {
  return palavra1 + " " + palavra2;
}
console.log(`6. ${concatenaPalavras("Aprender", "JavaScript")}`);
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}
console.log(`7. Média de 7, 8 e 9 = ${calcularMedia(7, 8, 9)}`);
function desconto(valor, percentual) {
  return valor - (valor * percentual / 100);
}
console.log(`8. R$ 200 com 15% de desconto = R$ ${desconto(200, 15)}`);
function saudacaoPersonalizada(nome) {
  console.log(`9. Olá, ${nome}! Seja bem-vindo.`);
}
saudacaoPersonalizada("Carlos");
const multiplicar = function (a, b) {
  return a * b;
};
console.log(`10. 3 x 4 = ${multiplicar(3, 4)}`);
const dividir = function (a, b) {
  return a / b;
};
console.log(`11. 10 / 2 = ${dividir(10, 2)}`);
const dobro = (numero) => numero * 2;
console.log(`12. dobro(7) = ${dobro(7)}`);
const ehPar = (numero) => numero % 2 === 0;
console.log(`13. ehPar(8) = ${ehPar(8)}`);
console.log(`13. ehPar(7) = ${ehPar(7)}`);
function calculadora(a, b) {
  function soma(x, y) {
    return x + y;
  }
  function subtrair(x, y) {
    return x - y;
  }
  console.log(`14. Soma: ${soma(a, b)}`);
  console.log(`14. Subtração: ${subtrair(a, b)}`);
}
calculadora(10, 4);
function operacoesAvancadas(a, b) {
  function produto(x, y) {
    return x * y;
  }
  function potencia(x, y) {
    return x ** y;
  }
  return {
    produto: produto(a, b),
    potencia: potencia(a, b)
  };
}
console.log(`15. ${JSON.stringify(operacoesAvancadas(2, 5))}`);
const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");
function mostrar(texto, classe) {
  mensagem.textContent = texto;
  mensagem.className = classe;
}
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const confirmaSenha = document.getElementById("confirmaSenha").value;
  const perfil = document.getElementById("perfil").value;
  const termos = document.getElementById("termos").checked;
  const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (nome === "") return mostrar("Informe o nome completo.", "erro");
  if (!formatoEmail.test(email)) return mostrar("Informe um e-mail válido.", "erro");
  if (senha.length < 6) return mostrar("A senha deve ter no mínimo 6 caracteres.", "erro");
  if (senha !== confirmaSenha) return mostrar("As senhas não coincidem.", "erro");
  if (perfil === "") return mostrar("Selecione um perfil técnico.", "erro");
  if (!termos) return mostrar("É necessário aceitar os termos de uso.", "erro");
  mostrar("Cadastro realizado com sucesso, " + nome + "!", "ok");
  form.reset();
});
