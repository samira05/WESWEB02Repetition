const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repetion', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log ('open bruh!');
});



const personSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });
  
  const Person = mongoose.model('Person', personSchema);
  
  exports.storePerson = (name, email, age) => {
      var person = new Person({
          name: name, 
          email: email,
          age: age 
         })
         return person
        }

        exports.getAllPeople = async () => {
            let people = Person.find({})
            return people
        }