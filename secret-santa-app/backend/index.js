const express = require('express')
const connectToMongo=require('./db')
connectToMongo();
const app = express()
const port = 5000
const cors = require('cors')
const User=require("./models/Users")

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/',async(req, res)=>{
  try {

    const {name, secretName, phone, email, hobbies, gift1, gift2, gift3}=req.body
    user= await User.create({name:name, email: email, secretName: secretName, phone:phone, hobbies:hobbies, gift1: gift1, gift2: gift2, gift3: gift3})
    res.status(201).json(user)
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
})

app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users.length);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
