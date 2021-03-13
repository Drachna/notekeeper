const User=require('../models/users')
const jwt = require('jsonwebtoken')


const expireIn = 1 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, 'secrete', {
        expiresIn: expireIn
    })

}



module.exports.register_post = async (req, res) => {
    try {

        const user = await User(req.body)
        await user.save()
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: expireIn * 1000 })
        res.status(200).send({ status: 'LOGGED_IN' })
    } catch (error) {
        console.log(error);
        // const errors = mongooseErrorFromatter(error)
        res.status(404).send(error.message)
    }
}

module.exports.login_post = async (req, res) => {

    try {
        
        const user = await User.login(req.body.email, req.body.password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: expireIn * 1000 })
        res.status(200).send({ status: 'LOGGED_IN' })

    } catch (error) {
        console.log(error.message);
        res.status(404).send(error.message)
    }

}

module.exports.auth_get = (req, res) => {
    res.status(200).send({ status: 'LOGGED_IN' })
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt','',{maxAge:0})
    res.status(200).send({ status: 'NOT_LOGGED_IN' })
}