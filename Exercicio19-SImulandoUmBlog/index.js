const Author = require('./Author')
const Post = require('./Post')

Vinicius = new Author('Vinicius')
console.log(Vinicius.createPost('Política', 'Veja as principais noticias do mundo político...'))
console.log(Vinicius.createPost('Automoveis', 'Veja os super esportivos mais amados...'))
console.log(Vinicius.getList())
console.log(Vinicius instanceof Author)