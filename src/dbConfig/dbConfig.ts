import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.Mongo_URI!) 
    const connection = mongoose.connection;
    
    connection.on('connected', () => {
      console.log('MONGO DB Connected Succefully');
    })
    connection.on('error', (err) => {
      console.log('MongoDb connection error'+ err);
      process.exit();      
    })
  } catch (error) {
    console.log(error, 'Something goes wrong');
  }
}