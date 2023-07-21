
console.log('Hello Roma')

// ловить событие
const getButton = document.querySelector('button')

const showElement = document.querySelector('#add-info')
console.log(showElement)


let countClick = 0
getButton.addEventListener('click', () => {
	countClick++
	console.log('На меня нажали')
	showElement.innerHTML += ` На меня нажали столько <b>${countClick} раз</b>!`
})

// клик по секции test

const test = document.querySelector('.test')

test.addEventListener('click', function(){
	test.classList.add('about')
})

console.log('Работа скрипта завершена')

