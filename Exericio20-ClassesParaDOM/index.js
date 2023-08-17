import Component from './Component.js'
import InputComponent from './InputComponents.js'

const mainContainer = document.getElementById('container')
const addButton = document.getElementById('addBtn')


const myComponent = new Component(mainContainer, 'text')

addButton.addEventListener('click', function (){
    console.log(myComponent.build(mainContainer))
    console.log(myComponent.render(mainContainer))
})

//const inputParam = new InputComponent('text')
