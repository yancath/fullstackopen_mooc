const mongoose = require('mongoose')
const supertest = require('supertest')
const App = require('../App')
const Blog = require('../models/blog')

const api = supertest(App)

const initialBlogs = [
    {
    "title": "Blogilates",
    "author": "Cassie Ho",
    "url": "https://www.blogilates.com/",
    "likes": 1000000,
    "id": "5f013aacb8816ad12c6d2254"
    },
    {
    "title": "The Glute Guy",
    "author": "Bret Contreras",
    "url": "https://bretcontreras.com/",
    "likes": 11000000,
    "id": "5f08feac485fb3d220bd35c9"
    }
]

beforeEach(async () => {
    await Blog.deleteMany({})
  
    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()
  
    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
  })

test('correct amount of blog posts returned', async () => {
    const response  = await api.get('/api/blogs')
    expect(response.body).toHaveLength(initialBlogs.length)
})

test('unique identifier is called id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
    expect(response.body[1].id).toBeDefined()
})

afterAll(() => {
    mongoose.connection.close();
  });