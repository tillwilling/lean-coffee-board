const mongoose = require('mongoose')

const userSchema = {
    name: String,
    age: Number,
    email: String,
}

module.exports mongoose.model('User', userSchema)