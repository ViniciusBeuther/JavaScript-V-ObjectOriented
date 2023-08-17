import InputComponent from "./InputComponents.js"

class Component {
    #domReference
    #initialReference
    constructor(domReference,  type){
        this.#domReference = domReference
        this.#initialReference = this.build()
        this.type = new InputComponent(type)
    }

    getDomReference(){
        return this.#domReference
    }

    getInitialReference(){
        return this.#initialReference
    }

    build(){
        this.inputArea = this.getDomReference()
        return this.inputArea
    }
    
    render(){
        const areaToAdd = this.getInitialReference()
        const componentToAdd = document.createElement('input')
        componentToAdd.type = 'text'
        areaToAdd.appendChild(componentToAdd)

        return 'Added'
    }
}

export default Component