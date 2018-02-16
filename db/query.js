const db = require('./connect')

function getAllBlogs(){
  return db('blogpost').select('*')
}

function getBlogPost(id){
  return db('blogpost').select('*').where('user_id', id)
}

function getGroupBlog(id){
  return db('group').select('*').where('id', id)
}

function getBlogById(blogid){
  return db('blogpost').select('*').where('id', blogid)
}

function getUser(id){
    return db('user').select('*').where('id', id)
}

function getGroups(userid){
  return db('user_group').select('*').where('user_id', userid).innerJoin('group', 'group_id', 'group.id')
}

// CREATE

function postBlog(id, content){
  return db('blogpost').insert(content).where('user_id', id).innerJoin('user', 'user_id', 'user.id')
}

// UPDATE
function updateBlog(id, update){
  return db('blogpost').update(update).where('id', id).returning('*')
}



module.exports = {
  getAllBlogs,
  getBlogPost,
  getGroupBlog,
  getBlogById,
  getUser,
  getGroups,
  postBlog,
  updateBlog,
}
