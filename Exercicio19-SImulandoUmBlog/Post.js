const Author = require('./Author')
const Comment = require('./Comment.js')

class Post {
    constructor(title, description, author){
        this.title = title;
        this.description = description;
        this.comment_list = []
        this.author = author
        
    }

    getPost(){
        return(`===========Inicio da Matéria=========\n
                Titulo: ${this.title}\n${this.description}\n
                Postado por ${this.author}\n
                ===========Final da Matéria=========`)
    }

    newComment(username, content){
        const comment = new Comment(username, content)
        this.comment_list.push(comment)
        return comment
    }

}

module.exports = Post
