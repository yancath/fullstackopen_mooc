const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const { request } = require('express')

blogsRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  })
  
blogsRouter.post('/', (request, response) => {
    const body = request.body

    if (!body.title || !body.url) {
      return response.status(400).json({error: 'missing url/title'}) //return a response otherwise still awaiting
    }

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes || 0
    })
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })

  blogsRouter.delete('/:id', async (request, response, next) => {
    try {
      await Blog.findByIdAndRemove(request.params.id)
      response.status(204).end()
    } catch (error) {
      next(error)
    }
  })

  module.exports = blogsRouter
