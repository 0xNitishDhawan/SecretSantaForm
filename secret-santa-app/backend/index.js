const express = require("express");
const connectToMongo = require("./db");
connectToMongo();
const app = express();
const port = 5000;
const cors = require("cors");
const User = require("./models/Users");
const Assignment = require("./models/Assignment");
const nodemailer = require("nodemailer");
const expressAsyncHandler = require("express-async-handler");

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "anonymousperson.coder@gmail.com",
    pass: "eehd wgai jxgb snbv",
  },
});

const assignSecretSantas = (participants) => {
  if (participants.length < 2) {
    return { error: "Not enough participants for assignment." };
  }

  // Shuffle the array
  const shuffled = [...participants].sort(() => Math.random() - 0.5);

  // Assign each user the next user in the shuffled array
  const assignments = shuffled.map((user, index) => ({
    giverName: user.name,
    giverEmail: user.email,
    giverSecretName: user.secretName,
    receiver: shuffled[(index + 1) % shuffled.length],
  }));

  const matchedData = assignments.map(
    ({ giverName,giverEmail, giverSecretName, receiver }) => {
      return {
        giverName: giverName,
        giverSecretName: giverSecretName,
        recieverName: receiver.name,
        giverEmail: giverEmail,
        recieverHobbies: receiver.hobbies,
        receiverNoGift: receiver.gift1,
        receiverSuperpower: receiver.gift2,
      };
    }
  );

  return matchedData;
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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

app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users.length);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/yeshu-registered-usres", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/send-mail", async (req, res) => {
  try {
    const assignments = await Assignment.find();
    const santaList = assignments;
    santaList.forEach(
      ({
        giverName,
        giverSecretName,
        recieverName,
        recieverHobbies,
        receiverNoGift,
        receiverSuperpower,
        giverEmail,
      }) => {
        const subject = "Your Secret Santa Assignment 🎅";
        const message = `<p>Hi <b>${giverSecretName}</b>,</p>
      
      <p>You have been chosen as the <b>Secret Santa</b> for <b>${recieverName}</b>. 🎁</p>
      
      <p><b>Their interests:</b><br> ${recieverHobbies}</p>
      
      <p><b>Things to avoid gifting:</b><br> ${receiverNoGift}</p>
      
      <p><b>They want to have a superpower:</b><br> ${receiverSuperpower}</p>

      <p><i>Remember, it’s a secret—don’t tell anyone! 🤫</i></p>
      
      <p>Please be on time and dressed in proper attire to spread the festive cheer! 🎄✨</p>
      
      <p>Have fun choosing the perfect gift! 🎉</p>
      
      <p>Warm regards,<br><b>Secret Santa Team</b></p>
      `;

        const mailOptions = {
          from: "anonymousperson.coder@gmail.com",
          to: giverEmail,
          subject: subject,
          html: message,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log(`mail sent successfully to ${giverName}`);
          }
        });
      }
    );
    res.status(200);
  } catch (error) {
    res.status(500).json({ message: "Error assigning Secret Santas" });
  }
});

app.post("/send-mail-single", async (req, res) => {
  try {
    const santaList = req.body;
    santaList.forEach(
      ({
        giverName,
        giverSecretName,
        recieverName,
        recieverHobbies,
        receiverNoGift,
        receiverSuperpower,
        giverEmail,
      }) => {
        const subject = "Your Secret Santa Assignment 🎅";
        const message = `<p>Hi <b>${giverSecretName}</b>,</p>
      
      <p>You have been chosen as the <b>Secret Santa</b> for <b>${recieverName}</b>. 🎁</p>
      
      <p><b>Their interests:</b><br> ${recieverHobbies}</p>
      
      <p><b>Things to avoid gifting:</b><br> ${receiverNoGift}</p>
      
      <p><b>They want to have a superpower:</b><br> ${receiverSuperpower}</p>

      <p><i>Remember, it’s a secret—don’t tell anyone! 🤫</i></p>
      
      <p>Please be on time and dressed in proper attire to spread the festive cheer! 🎄✨</p>
      
      <p>Have fun choosing the perfect gift! 🎉</p>
      
      <p>Warm regards,<br><b>Secret Santa Team</b></p>
      `;

        const mailOptions = {
          from: "anonymousperson.coder@gmail.com",
          to: giverEmail,
          subject: subject,
          html: message,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log(`mail sent successfully to ${giverName}`);
          }
        });
      }
    );
    res.status(200);
  } catch (error) {
    res.status(500).json({ message: "Error assigning Secret Santas" });
  }
});

// app.post("/assign-santas", async (req, res) => {
//   try {
//     const participants = await User.find();
//     if (!participants || participants.length < 2) {
//       return res.status(400).json({ message: "Not enough participants" });
//     }

//     const assignments = assignSecretSantas(participants);
//     await Assignment.create(assignments);
//     res.status(200).json(assignments);
//   } catch (error) {
//     res.status(500).json({ message: "Error assigning Secret Santas" });
//   }
// });

app.get("/matched-data", async (req, res) => {
  try {
    const Assignments = await Assignment.find();
    res.status(200).json(Assignments);
  } catch (error) {
    res.status(500).json({ message: "Error assigning Secret Santas" });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
