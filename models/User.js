const mongoose = require('mongoose')

const userSchema = {
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 16 },
  email: { type: String, match: /.+@\w{2,}\.\w{2,}/i },
}

module.exports = mongoose.model('User', userSchema)
