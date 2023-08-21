import InputComponent from "./InputComponents.js"

// New component, add create a new element in page //
class Component {
    #domReference
    #initialReference
    constructor(domReference,  type){
        this.#domReference = domReference
        this.#initialReference = this.build()
        this.type = new InputComponent(type)
    }

    //Get DOM reference //
    getDomReference(){
        return this.#domReference
    }

    //Get the initial reference, the first DOM element //
    getInitialReference(){
        return this.#initialReference
    }

    // Create a new input //
    build(){
        this.inputArea = this.getDomReference()
        return this.inputArea
    }
    
    // Add the input create on build method //
    render(){
        const areaToAdd = this.getInitialReference()
        const componentToAdd = document.createElement('input')
        componentToAdd.type = 'text'
        areaToAdd.appendChild(componentToAdd)

        return 'Added'
    }
}

export default Component