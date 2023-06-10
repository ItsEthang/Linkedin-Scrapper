//Selecting elements
const submit = document.querySelector('#submit')
const main = document.querySelector('main')
const userInput = document.querySelector('.user-input')
const output = document.querySelector('.output')
const err = document.querySelector('#err')
const input = document.querySelector('input')
const back = document.querySelector('#back')

submit.addEventListener('click', () => {
    if (!input.value) {
        err.innerText = 'Input cannot be empty'
        return
    } else if (!input.checkValidity()) {
        err.innerText = 'Please enter a valid URL'
        return
    }
    userInput.style.display = 'none'
    output.style.display = 'block'
})

back.addEventListener('click', () => {
    userInput.style.display = 'flex'
    output.style.display = 'none'
})

