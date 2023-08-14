const Post = require('./Post.js')
const Comment = require('./Comment.js')

const postList = []
class Author{
    constructor(name){
        this.name = name;
        this.post_list = []
    }

    createPost(title, description){
        const post = new Post(title, description, this)
        this.post_list.push(post)
        return post
    }

    


}


module.exports = Author