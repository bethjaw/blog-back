const express = require('express')
const router = express.Router()
const query = require('./db/query')


router.get('/allblogs', (req, res) => {
  query.getAllBlogs()
    .then((blog) => {
      res.json(blog)
    })
})

router.get('/blogpost/:id', (req, res) => {
  let id = req.params.id
  query.getBlogPost(id)
    .then((blog) => {
      res.json(blog)
    })
})

router.get('/groupblog/:id', (req, res) => {
  let id = req.params.id
  console.log(req.params)
    query.getGroupBlog(id)
      .then((blog) => {
        let blogid = blog[0].blog_id
          query.getBlogById(blogid)
            .then((content) => {
              res.json(content)
            })
        // res.json(blog)
      })
})

router.get('/singleblog/:id', (req, res) => {
  let blogid = req.params.id
  query.getBlogById(blogid)
    .then((blog) => {
      res.json(blog)
    })
})

// CREATE

router.post('/newblog/:id', (req, res) => {
  let id = req.params.id
  let content = req.body
  query.postBlog(id, content)
    .then((blog) => {
      res.json(blog)
  })
})

// UPDATE

router.patch('/update', (req, res) => {
  let id = req.body.id
  let update = req.body
  query.updateBlog(id, update)
    .then((update) => {
      res.json(update)
    })
})

module.exports = router
