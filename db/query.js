const db = require('./connect')

function getAllBlogs(){
  return db('blogpost').select('*')
}

function getBlogPost(id){
  return db('blogpost').select('*').where('user_id', id)
  // .innerJoin('user', 'user_id', 'user.id')
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
  getAllBlogs,
  getBlogPost,
  getGroupBlog,
  getBlogById,
  postBlog,
}
