const mongoose = require('mongoose')
const supertest = require('supertest')
const App = require('../App')
const Blog = require('../models/blog')
const { response } = require('express')

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

test('a valid blog can be added', async () => {
    const newBlog = {
        title: 'Liz Lisa Blog',
        author: 'Tokyo Kawaii Life',
        url: 'https://lizlisa.com/blog',
        likes: 100000
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(initialBlogs.length + 1)

    const titles = response.body.map(blog => blog.title)
    expect(titles).toContain(newBlog.title)
})

test('a blog without likes is defaulted to zero', async () => {
    const noLikes = {
        title: 'EkiBlog',
        author: 'Ekimura',
        url: 'http://www.ekiblog.com/'
    }
    const response = //looks at REQUEST
    await api
    .post('/api/blogs')
    .send(noLikes)
    .expect(201)
    .expect('Content-Type', /application\/json/)
    
    expect(response.body.likes).toBe(0)

    //looks at response returned
    //const response = await api.get('/api/blogs')
    //expect(response.body[2].likes).toBe(0)
})

test('blog without title and url cannot be added', async () => {
    const invalid = {
        author: 'Xiaxue',
        likes: 2000000
    }

    await api
    .post('/api/blogs')
    .send(invalid)
    .expect(400)

    const response  = await api.get('/api/blogs')
    const blogsIntially = response.body.map(blog => blog.title)
    expect(blogsIntially).toHaveLength(initialBlogs.length)
})

afterAll(() => {
    mongoose.connection.close();
  });