const OBJ = {
    name: 'Alex',
    age: 30
}
const json = JSON.stringify(OBJ)
const nowObj = JSON.parse(json)
console.log(nowObj)

const button = document.querySelector('button')
const nameSpan = document.querySelector('.name')
const ageSpan = document.querySelector('.age')
button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'main.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()
    xhr.onload = () => {
        const data = JSON.parse(xhr.response)
        console.log(data)
        nameSpan.innerText = data.name
        ageSpan.innerText = data.age
    }
})

const buttonLog = document.querySelector('button')
button.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'main.json')
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send()
    xhr.onload = () => {
        const data = JSON.parse(xhr.response)
        console.log(data)
    }
})

