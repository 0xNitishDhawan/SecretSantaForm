const mongoose=require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    }, 
    secretName:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    hobbies:{
        type:String,
        required:true
    },
    gift1:{
        type:String,
        required:true
    },
    gift2:{
        type:String,
        required:true
    },
    gift3:{
        type:String,
        required:true
    },  
    date:{
        type: Date,
        default: Date.now
    }
});

const User=mongoose.model("user", UserSchema);
module.exports=User;