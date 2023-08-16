class user {
    #password
    #balance = 0
    #email
    constructor(email, password){
        this.#email = email
        this.#password = password
    }

    login(email, password){
        const currentEmail = this.#email
        const currentPassword = this.#password

            if( currentEmail == email && currentPassword == password ){
                const sucess = `\t\t===== SUCESSO =====\n
                Email: ${currentEmail}\n
                Password: ${password}\n
                ===================`
                
                return sucess
            }
            else{
                return 'Login inválido!'
            }
    }

    getPassword(){
        return this.#password
    }

    getEmail(){
        return this.#email
    }
}

vinicius = new user('viniciusTest@gmail.com', 'testing123')
carla = new user('carlaTest@gmail.com', 'testing123')

//console.log(vinicius.getEmail())
//console.log(vinicius.getPassword())
console.log(vinicius.login('viniciusTesting@gmail.com', 'test123'))
console.log(carla.login('carlaTest@gmail.com', 'testing123'))

