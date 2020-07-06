const blog = require("../models/blog");

const dummy = (blogs) => {
    if (blogs) {
        return 1;
    }
  }

const totalLikes = (blogs) => {
  const sumUp = (sum, {likes}) => {
    return sum + likes
  }

  return blogs.reduce(sumUp, 0)
}

const favoriteBlog = (blogs) => {
  max = 0

  if (blogs.length === 0) {
    return 0;
  }

  for (i = 0; i < blogs.length; i++) {
    if (blogs[i].likes > max) {
      max = blogs[i].likes
    }
  }

  for (j = 0; j < blogs.length; j++) {
    if (blogs[j].likes === max) {
      return blogs[j];
    }
  }
}

const mostBlogs = (blogs) => {
  blogCounts = []
  currCount = 0
  max = 0

  if (blogs.length === 0) {
    return 0;
  }

  for (i = 0; i < blogs.length; i++) {
    const author = blogs[i].author
   
    if (blogCounts[author] === undefined) {
      blogCounts[author] = 1
    } else {
      blogCounts[author] = blogCounts[author] + 1
    }

    if (blogCounts[author] > currCount) {
      currCount = blogCounts[author]
      max = blogs[i]
    }
  }

  return {
    author: max.author,
    blogs: currCount
  }
}

const mostLikes = (blogs) => {
    max = 0
  
    if (blogs.length === 0) {
      return 0;
    }
  
    for (i = 0; i < blogs.length; i++) {
      if (blogs[i].likes > max) {
        max = blogs[i].likes
      }
    }
  
    for (j = 0; j < blogs.length; j++) {
      if (blogs[j].likes === max) {
        return {
          author: blogs[j].author,
          likes: blogs[j].likes
        };
      }
    }
  }
  
  module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
  }