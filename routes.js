const express = require('express')
const router = express.Router()
const query = require('./db/query')

// allblogs
// retrieves list of blogs
router.get('/blogs', (req, res) => {
  query.getAllBlogs()
    .then((blog) => {
      res.json(blog)
    })
})

// blogpost/:id
// retrieves blogs for specific user
router.get('/user/:id/blogs', (req, res) => {
  let id = req.params.id
  query.getBlogPost(id)
    .then((blog) => {
      res.json(blog)
    })
})

// groupblog/:id
router.get('/user/:id/group', (req, res) => {
  let id = req.params.id
  console.log(req.params)
    query.getGroupBlog(id)
      .then((blog) => {
        let blogid = blog[0].blog_id
          query.getBlogById(blogid)
            .then((content) => {
              res.json(content)
            })
      })
})

// singleblog/:id
router.get('/user/:id/blog', (req, res) => {
  let blogid = req.params.id
  query.getBlogById(blogid)
    .then((blog) => {
      res.json(blog)
    })
})

// user/:id
router.get('/user/:id', (req, res) => {
  let id = req.params.id
  query.getUser(id)
    .then((user) => {
      res.json(user)
    })
})

//  usergroup/:id
router.get('/user/:id/usergroup', (req, res) => {
  let userid = req.params.id
  query.getGroups(userid)
    .then((groups) => {
      res.json(groups)
    })
})

// CREATE
// newblog/:id
router.post('/user/:id/blog', (req, res) => {
  let id = req.params.id
  let content = req.body
  query.postBlog(id, content)
    .then((blog) => {
      res.json(blog)
  })
})

// UPDATE
// /update
router.patch('/user/:id/blog', (req, res) => {
  let id = req.body.id
  let update = req.body
  query.updateBlog(id, update)
    .then((update) => {
      res.json(update)
    })
})

module.exports = router
