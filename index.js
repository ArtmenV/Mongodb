const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/youtube-video', {
  useMongoClient: true
})
  .then(() => console.log('MongoDB has started ...'))
  .catch(e => console.log(e))

require('./person.model')

//http://mongoosejs.com/docs/queries.html

const Person = mongoose.model('persons')

const person = new Person({
  name: 'WebForMyself',
  age: 24,
  phones: [4697171]
})

Person
  .find({name: 'WebForMyself'})
  .limit(2)
  .then(persons => {
    console.log(JSON.stringify(persons, null, 2))
  })

// Person.find({ ... }).remove().then().catch()