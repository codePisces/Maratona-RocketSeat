//variaveis?
//dados de entrada
//dados de saida

const respostaElement = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#perguntaTxt")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//clicar em fazer pergunta
function fazerPergunta() {
  if(inputPergunta.value == ""){
    alert("Por favor digite uma pergunta")
    return
  } 

  const pergunta = "<div>" + inputPergunta.value + "<div/>"

  //gerando um numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]

  //Sumir a resposta depois de 3sec
  setTimeout(function () {
    respostaElement.style.opacity = 0;
  }, 3000)
}
