
const titulo = document.querySelector(".conteudo h3")
const background = document.querySelector(".player .imagem")
const audio = document.querySelector("audio")

const player = {
    titulo: document.querySelector(".conteudo h3"),
    background: document.querySelector(".player .imagem"),
    audioItem:  document.querySelector("audio"),
    dados01: {
        titulo: "Marília Mendonça - BYE BYE - (Todos Os Cantos)",
        background: "arquivos/Marilia-Mendonca-reproducao-facebook.jpg",
        arquivo: "arquivos/Marília Mendonça - BYE BYE - (Todos Os Cantos).mp3"
    }
}

player.titulo.innerHTML = player.dados01.titulo
player.background.style.background = `url("${player.dados01.background}") no-repeat center / cover`
player.audioItem.src = player.dados01.arquivo
