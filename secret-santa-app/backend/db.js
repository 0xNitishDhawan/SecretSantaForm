const mongoose=require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const mongoURI=`mongodb+srv://studyvideos789:${process.env.MongoDBPassword}@cluster0.krlga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const connectToMongo = async () => { 
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false });
        console.log("Connected to Mongo successfully");
    } catch (error) {
        console.log(error)        
    }
}
module.exports=connectToMongo;       