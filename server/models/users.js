const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "email cannot be empty"]

    },
    password: {
        type: String,
        required: [true, "password is required"]
    }


})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.checkPassword = async function (password) {
    const result = await bcrypt.compare(password, this.password)
    console.log('bcrypt pass match', result);
    return result
}

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw Error('Incorrect Password')
    }
    throw Error('User not Found')
}
const User = mongoose.model('users', userSchema)

module.exports = User