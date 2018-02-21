const express = require('express')
const router = express.Router()
const query = require('./db/query')


router.get('/blogs', (req, res) => {
  query.getAllBlogs()
    .then((blog) => {
      res.json(blog)
    })
})

router.get('/users/:id/blogs', (req, res) => {
  let id = req.params.id
  query.getBlogPost(id)
    .then((blog) => {
      res.json(blog)
    })
})

router.get('/users/:id/group', (req, res) => {
  let id = req.params.id
    query.getGroupBlog(id)
      .then((blog) => {
        let blogid = blog[0].blog_id
          query.getBlogById(blogid)
            .then((content) => {
              res.json(content)
            })
      })
})

router.get('/blog/:id', (req, res) => {
  let blogid = req.params.id
  query.getBlogById(blogid)
    .then((blog) => {
      res.json(blog)
    })
})

router.get('/users/:id', (req, res) => {
  let id = req.params.id
  query.getUser(id)
    .then((user) => {
      res.json(user)
    })
})

router.get('/users/:id/usergroup', (req, res) => {
  let userid = req.params.id
  query.getGroups(userid)
    .then((groups) => {
      res.json(groups)
    })
})

// CREATE
router.post('/blogs', (req, res) => {
  let id = req.params.id
  let content = req.body
  query.postBlog(id, content)
    .then((blog) => {
      res.json(blog)
  })
})

// UPDATE
router.patch('/blogs', (req, res) => {
  let id = req.body.id
  let update = req.body
  query.updateBlog(id, update)
    .then((update) => {
      res.json(update)
    })
})

module.exports = router
