const board = document.querySelector('#board')
const colors = ['rgb(29, 252, 0)', 'rgb(238, 255, 0)', 'rgb(255, 0, 242)', 'rgb(255, 0, 0)', 'rgb(255, 0, 221)', 'rgb(0, 255, 234)']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div') // Создание div в html
    square.classList.add('square') // Добавление класса к div

    // Слушатель при наведении
    square.addEventListener('mouseover', () => 
    setColor(square)) 

    // Слушатель когда убираем мышь
    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square) // Добавление в HTML
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}





















