const Author = require('./Author')
const Post = require('./Post')
const Comment = require('./Comment')

Vinicius = new Author('Vinicius Beuther')
Carla = new Author('Carla Grossl')
const post = Carla.createPost('Medicina', 'Como o bom atendimento médico em unidades de saúde melhora a vida do cidadão...')
/*---------------------------------------------Creating Objects------------------------------------------------------------*/

/*Debugging*/
post.newComment('Vinicius', 'Muito bom')
console.log(Carla)
