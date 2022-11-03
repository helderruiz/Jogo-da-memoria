const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')
const botaoNovoJovo = document.querySelector('.new-game')
botaoNovoJovo.style.display = 'none'

const personagens = [
    'bomba',
    'bowser',
    'cogumelo',
    'estrela',
    'luigi',
    'mario',
    'princesa',
    'toad',
    'wario',
    'yoshi',
]

function criandoElemento(tag, className) {
    const elemento = document.createElement(tag)
    elemento.className = className
    return elemento
}

let primeiraCard = ''
let segundaCard = ''

function fimDoJogo() {
    const disableCards = document.querySelectorAll('.disabled-card')

    if (disableCards.length == 20) {
        clearInterval(this.loop)
        botaoNovoJovo.style.display = 'block'
    }
}

function checandoCards() {
    const  primeiroPersonagem = primeiraCard.getAttribute('data-personagem')
    const  segundoPersonagem = segundaCard.getAttribute('data-personagem')

    if (primeiroPersonagem === segundoPersonagem) {
        primeiraCard.firstChild.classList.add('disabled-card')
        segundaCard.firstChild.classList.add('disabled-card')
        

        primeiraCard = ''
        segundaCard = ''

        fimDoJogo()

    } else {
        setTimeout(() => {
            primeiraCard.classList.remove('reveal-card')
            segundaCard.classList.remove('reveal-card')

            primeiraCard = ''
            segundaCard = ''

        }, 500)

        
    }
}

function revelaCard({target}) {

    if ( target.parentNode.className.includes('reveal-card')) {
        return
    }

    if (primeiraCard === '') {
        target.parentNode.classList.add('reveal-card')
        primeiraCard = target.parentNode//pra guardar a primeira carta
    } else if (segundaCard === '') {
        target.parentNode.classList.add('reveal-card')
        segundaCard = target.parentNode
    }

    checandoCards()

}

function criandoCard(personagem) {
    const card = criandoElemento('div', 'card')
    const front = criandoElemento('div', 'face front')
    const back = criandoElemento('div', 'face back')

    front.style.backgroundImage = `url('../img/${personagem}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revelaCard)
    card.setAttribute('data-personagem', personagem)

    return card
}

function carregarJogo() {
    const duplicandoPersonagens = [ ...personagens, ...personagens ]
    const personagemEmbaralhado = duplicandoPersonagens.sort(() => Math.random() - 0.5)

    personagemEmbaralhado.forEach((personagem) => {
        const card = criandoCard(personagem)
        grid.appendChild(card)
    })
}

function starTimer() {
    this.loop = setInterval(() => {
        const tempoAtual = Number(timer.innerHTML) 
        timer.innerHTML = tempoAtual + 1
    }, 1000)
}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('play')

    starTimer()
    carregarJogo()
}
