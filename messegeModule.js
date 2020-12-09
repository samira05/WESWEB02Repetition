const mongoose = require('mongoose');
const messegeSchema= new mongoose.Schema({
    messege: String,
    email: String ,
    age: Number,
  });


  const messege = mongoose.model('messege', messegeSchema);

  exports.person =(name, email, age) =>{
    let person= new person({
        name: name , 
        email:email,
        age: age,
    })


  person.save();
  
  }

  exports.getAllPeople = async () => {
    let people = Person.find({})
    return people
}