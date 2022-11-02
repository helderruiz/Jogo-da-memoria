const grid = document.querySelector('.grid')

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

const criandoElemento = (tag, className) => {
    const elemento = document.createElement(tag)
    elemento.className = className
    return elemento
}

let primeiraCard = ''
let segundaCard = ''

const revelaCard = ({target}) => {

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

}

const criandoCard = (personagem) => {
    const card = criandoElemento('div', 'card')
    const front = criandoElemento('div', 'face front')
    const back = criandoElemento('div', 'face back')

    front.style.backgroundImage = `url('../img/${personagem}.png')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revelaCard)

    return card
}

const carregarJogo = () => {

    const duplicandoPersonagens = [ ...personagens, ...personagens ]
    const personagemEmbaralhado = duplicandoPersonagens.sort(() => Math.random() - 0.5)

    personagemEmbaralhado.forEach((personagem) => {
        const card = criandoCard(personagem)
        grid.appendChild(card)
    })
}

carregarJogo()