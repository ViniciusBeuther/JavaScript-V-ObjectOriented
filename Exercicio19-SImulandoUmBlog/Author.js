const Post = require('./Post.js')

const postList = []
class Author{
    constructor(name){
        this.name = name;
        this.author_list = []
    }

    createPost(title, description){
        let auxPost = new Post(title, description, this.name)
        this.author_list.push(auxPost.getPost())
    }

    getList(){
        return(this.author_list)
    }

}


module.exports = Author