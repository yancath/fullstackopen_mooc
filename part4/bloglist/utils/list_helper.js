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
  
  module.exports = {
    dummy, totalLikes
  }