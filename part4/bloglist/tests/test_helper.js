const Blog = require('../models/blog')

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

const blogsInDB = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs, blogsInDB
}