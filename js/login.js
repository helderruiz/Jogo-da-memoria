const input = document.querySelector('.login__input')
const button = document.querySelector('.login__button')
const form = document.querySelector('.login__form')

const validandoInput = ({target}) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

const enviando = (evento) => {
    evento.preventDefault()
    
    localStorage.setItem('play', input.value)
    window.location = 'pages/game.html'
}

input.addEventListener('input', validandoInput)
form.addEventListener('submit', enviando)