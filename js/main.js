//Selecting element
const submit = document.querySelector('#submit')
const userInput = document.querySelector('.user-input')
const output = document.querySelector('.output')
const err = document.querySelector('#err')
const input = document.querySelector('input')
const back = document.querySelector('#back')
//Backend Data
let url
const pname = document.querySelector('#name')
const title = document.querySelector('#title')
const locations = document.querySelector('#location')
const about = document.querySelector('#about')
const experience = document.querySelector('#experience')
const education = document.querySelector('#education')
const recommendations = document.querySelector('#recommendations')

let nameVal 
let titleVal 
let locVal 
let abtVal 
let expVal 
let eduVal 
let recVal 
let def = '{Backend Harvested Data}'

//Used for assigning value from fetched elements
const assignVal = (element, defVal) => {
    if (element) {
        return element.innerText
    } 
    return defVal
}

submit.addEventListener('click', () => {
    if (!input.value) {
        err.innerText = 'Input cannot be empty'
        return
    } else if (!input.checkValidity()) {
        err.innerText = 'Please enter a valid URL'
        return
    }
    url = input.value
    // Make an HTTP request to the user input URL
    fetch(url)
    .then((response) => response.text()) //convert response to string
    .then((html) => {
    // Parse the HTML content
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    // Extract data from the parsed HTML using querySelector or querySelectorAll
    nameVal = assignVal(doc.querySelector('h1'), def)
    titleVal = assignVal(doc.querySelector('.pv-text-details__left-panel h1'), def)
    locVal = assignVal(doc.querySelector('.text-body-small .inline .t-black--light .break-words'), def)
    abtVal = assignVal(doc.querySelector('.display-flex .ph5 .pv3 .visually-hidden'), def)
    expVal = assignVal(doc.querySelector('.pv-text-details__left-panel h1'), def)
    eduVal = assignVal(doc.querySelector('.display-flex .align-items-center .mr1 .hoverable-link-text .t-bold .visually-hidden'), def)
    recVal = assignVal(doc.querySelector('.pv-text-details__left-panel h1'), def)
    pname.innerText = `Name: ${nameVal}`
    title.innerText = `Title: ${titleVal}`
    locations.innerText = `Location: ${locVal}`
    about.innerText = `About: ${abtVal}`
    experience.innerText = `Experience: ${expVal}`
    education.innerText = `Education: ${eduVal}`
    recommendations.innerText = `Recommendations: ${recVal}`
    })
    .catch((error) => {
    console.error('Error fetching the URL:', error);
    });
    userInput.style.display = 'none'
    output.style.display = 'block'
    err.innerText = ''
})

back.addEventListener('click', () => {
    userInput.style.display = 'flex'
    output.style.display = 'none'
})

