console.log('Start script')
// Типы данных
// Типов данных в языке программирования 8 штук 

// 1. Тип данных - число  (Numbers)
let numbers = 10
console.log('Some numbers ' + numbers)

// 2. Тип данных - строка (String)
let string = 'Hello, Roman!'
console.log(string)

// 3. Тип данных - булевый (Boolean)
// Используется для представления логических значений 
// true (истина) или false (ложь).
let yes = true
console.log(yes)

let no = false
console.log(no)

// if(true){
// 	console.log('Это условие я выполню!')
// }

// if (true) {
// 	console.log('Верно')
// } else {
// 		console.log('Неверно')
// }

// 4. Тип данных - не определено (Undefined)
let simply
console.log(simply)

// 5. Тип данных - нулевой (Null)
let myNull = null 
console.log(myNull)

// 6. Тип данных - объекты (Object) 
let person = {
	name: 'Рома',
	age: 10,
	eyeColor: 'brown',
	height: 143,
	isStudent: true,
	doYouWork: false,
}
console.log(person)
console.log(person.name)

// Тип данных функции (Function)

function add(a, b) {
  return a + b;
}
console.log( add(3057, 500) )

// 8. Тип данных символ (Symbols)
let mySymbols = Symbol("Test Symbols");
console.log(mySymbols)










// ловить событие
let getButton = document.querySelector('button')

let showElement = document.querySelector('#add-info')
// console.log(showElement)


let countClick = 0
getButton.addEventListener('click', () => {
	countClick++
	// console.log('На меня нажали')
	showElement.innerHTML += ` На меня нажали столько <b>${countClick} раз</b>!`
})

// клик по секции test
// let test = document.querySelector('.test')

// test.addEventListener('click', function () {
// 	test.classList.add('about')
// })

// console.log('Работа скрипта завершена')  
