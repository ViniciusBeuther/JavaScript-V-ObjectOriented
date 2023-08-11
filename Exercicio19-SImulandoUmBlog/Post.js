const Author = require('./Author')

class Post {
    constructor(title, description, author){
        this.title = title;
        this.description = description;
        this.message_list = []
        this.author = author
        
    }

    getPost(){
        return(`Titulo: ${self.title}\n${self.description}\nPostado por ${self.author}`)
    }

}

module.exports = Post
