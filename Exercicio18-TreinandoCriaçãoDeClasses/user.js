class user {
    constructor(fullname, email, password){
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    getEmail(){
        return (self.email)
    }

    getPassword(){
        return (self.password)
    }

    login(email, password){
        if (email === this.email && password === this.password){
            return (`Login feito com sucesso!`)
        }
        else {
            return ("Os dados informados estão incorretos!")
        }
    }
}

const Vinicius = new user('Vinicius Eduardo Beuther', 'vinicius.beuther15@gmail.com', 'vinicius123')
console.log(Vinicius.login('vinicius.beuther15@gmail.com', 'vinicius123'))