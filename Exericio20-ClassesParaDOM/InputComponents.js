import Component from './Component.js'

class InputComponent extends Component{
    inputType

    constructor(type){
        this.type = type
        super(this.getDomReference())
    }

    getInputType() {
        return this.type
    }

}

export default InputComponent