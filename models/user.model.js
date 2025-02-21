import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true

    },
    avatar:{
        type:String
    },
    coverImage:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String
    },
    watchHistory:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Video"
    }
}, {timestamps:true})

export const User = mongoose.model("User" , userSchema)

