const db = require('./connect')


function getBlogPost(id){
  return db('blogpost').select('*').where('user_id', id)
}

function getGroupBlog(id){
  return db('group').select('*').where('id', id)
}

function getBlogById(blogid){
  return db('blogpost').select('*').where('id', blogid)
}

function postBlog(id, content){
  return db('blogpost').insert(content).where('user_id', id).innerJoin('user', 'user_id', 'user.id')
}




module.exports = {
  getBlogPost,
  getGroupBlog,
  getBlogById,
  postBlog,
}
