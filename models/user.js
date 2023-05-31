const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    //name: String
    //both are same
    //the reason we are providing ,,,,the name is more complex and require more field


    //required:true this is also fine
    //but if you pass array [] ....then first property is true the second property is error message
    //when somebody does not pass the error message then this will be provided
    name: {
        type: String,
        required: [true, 'please provide name'],
        maxLength: [40, 'name should be under 40 characters']
    },
    email: {
        type: String,
        required: [true, 'please provide email'],
        validate: [validator.isEmail, 'please enter email in correct format'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minLength: [6, 'password should be at least 6 character'],
        select: false
    },
    role: {
        type: String,
        default: 'user'
    },
    photo: {
        id: {
            type: String,
            required: true
        },
        secure_url: {
            type: String,
            required: true
        }
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    createdAt: {
        type: Date,
        default: Date.now()
    }

})


module.exports = mongoose.model('User', userSchema)