if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://Deary:Batamania12@ds211724.mlab.com:11724/bank-clone'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidbot-dev'}
}