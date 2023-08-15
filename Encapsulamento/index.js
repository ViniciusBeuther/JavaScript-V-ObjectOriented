class user {
    #password
    #balance = 0
    constructor(email, password){
        this.email = email
        this.#password = password
    }

    getPassword(email, password){
        if (email === this.email && password === this.password){
            return this.#password
        }

        else{
            return null
        }
    }
}

vinicius = new user('vinicius.beuther15@gmail.com', 'vinicius123')

console.log(vinicius.getPassword('vinicius.beuther15@gmail.com', 'vinicius123'))
