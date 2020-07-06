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

  return max;
}
  
  module.exports = {
    dummy, totalLikes, favoriteBlog
  }