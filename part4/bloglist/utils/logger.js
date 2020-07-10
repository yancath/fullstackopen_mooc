const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') {  //it does not print to console in test mode:
    console.log(...params)
  }  
}

const error = (...params) => {
  console.error(...params)
}

module.exports = {
  info, error
}