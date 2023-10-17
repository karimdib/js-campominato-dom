const grigliaDOMElement = document.querySelector('.griglia')
const buttonDOMElement = document.querySelector('.button')
let pointGame = 0

buttonDOMElement.addEventListener('click', function() {
    grigliaDOMElement.innerHTML = ''
    
    grigliaDOMElement.classList.remove('gameover')
    pointGame = 0

    const bombsArray = getArrayOfRandomIntBetween(1, 100, 16)
    console.log( bombsArray)

    for(let i = 0; i < 100; i++){

        const htmlItem = `<div class="griglia__items">${i + 1}</div>`
    
        grigliaDOMElement.innerHTML += htmlItem
        
    }

    const itemsGriglia = document.querySelectorAll('.griglia__items')

    for (let i = 0; i < itemsGriglia.length; i++){

        const itemCorrente  = itemsGriglia[i]
		
        itemCorrente.addEventListener('click', function() {
            console.log('Hai cliccato sulla casella numero:', i + 1)
            if (bombsArray.includes(i + 1)) {
                itemCorrente.classList.add('red')
                grigliaDOMElement.classList.add('gameover')
                alert('Hai perso! Clicca sul bottone per iniziare una nuova partita.')
                const pointDOmelement = document.getElementById('point')
                pointDOmelement.innerHTML = pointGame 
            } else {
                itemCorrente.classList.add('skyblue')
                pointGame++
            }
        })
        if(pointGame === 84){
            console.log('hai vinto')
        }
    }
})

function getArrayOfRandomIntBetween(minRange, maxRange, number) {
    const bombsArray = []

    while (bombsArray.length < 16) {
        const n = getRandomIntInclusive(1, 100)

        if (!bombsArray.includes(n)) {
            bombsArray.push(n)
        }
    }

    return bombsArray
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min) 
}

