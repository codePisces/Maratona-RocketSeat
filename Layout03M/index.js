const respostaElement = [
    "Está perdido, Marujo ?",
    "Continue em frente, Marujo",
    "Achamos o tesouro",
    "Mais RUM, estamos quase lá!",
    "Virar a bombordo",
    "Terra a vista",
    "Virar a estibordo",
    "Argh, tente novamente"
]
const perguntaUser = document.querySelector("#perguntaUser")
const perguntaPage = document.querySelector("#resposta")



function fazerPergunta(){
    //Validação
    if(perguntaUser.value == ""){
        alert("Qual a sua duvida, Marujo?")
        return
    }    
    //Criando respostas aleatorio
    const numeroAleatorio = Math.floor(Math.random() * respostaElement.length)

    perguntaPage.innerHTML = perguntaUser.value 
}