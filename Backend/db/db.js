const mongoose = require('mongoose');


const connectToDb = async() => {
    await mongoose.connect("mongodb+srv://shreyas:pass1wo2rd3@cluster0.genjx.mongodb.net/FoodStack?retryWrites=true&w=majority&appName=Cluster0");
  
  }
  
  connectToDb()
  .then(()=> {
      console.log("Database Connected Successfully");
  }).catch((err) => {
      console.log("Connection Failed", err);
      
  });

module.exports = connectToDb;