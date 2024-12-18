const express = require('express')
const connectToMongo=require('./db')
connectToMongo();
const app = express()
const port = 5000
const cors = require('cors')
const User=require("./models/Users")
const Assignment=require("./models/Assignment")

app.use(cors())
app.use(express.json())

const assignSecretSantas = (participants) => {
  if (participants.length < 2) {
    return { error: "Not enough participants for assignment." };
  }

  // Shuffle the array
  const shuffled = [...participants].sort(() => Math.random() - 0.5);

  // Assign each user the next user in the shuffled array
  const assignments = shuffled.map((user, index) => ({
    giver: user,
    receiver: shuffled[(index + 1) % shuffled.length],
  }));

  return assignments;
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.post('/',async(req, res)=>{
//   try {

//     const {name, secretName, phone, email, hobbies, gift1, gift2, gift3}=req.body
//     user= await User.create({name:name, email: email, secretName: secretName, phone:phone, hobbies:hobbies, gift1: gift1, gift2: gift2, gift3: gift3})
//     res.status(201).json(user)
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error);
//   }
// })

app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users.length);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/yeshu-registered-usres', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/assign-santas", async (req, res) => {
  try {
    const participants = await User.find();
    if (!participants || participants.length < 2) {
      return res.status(400).json({ message: "Not enough participants" });
    }

    const assignments = assignSecretSantas(participants);
    // await Assignment.create(assignments);
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: "Error assigning Secret Santas" });
  }
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
