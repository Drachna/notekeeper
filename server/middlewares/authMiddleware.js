const jwt = require('jsonwebtoken')

const requireAuthentication = async (req, res, next) => {
    try {      
        const token = req.cookies.jwt
        if (token) {
            jwt.verify(token, 'secrete', (err, decodedToken) => {
                if (err) {
                    console.log(err.message);
                    res.send('Invalid User')
                }
                else {
                    req.user_id=decodedToken.id
                    console.log(decodedToken,req.body);
                    next()
                }
            })
        }
        else {
            res.send({status:'NOT_LOGGED_IN'})
        }
    } catch (error) {
        console.log(error.message);
        res.send({status:'NOT_LOGGED_IN'})
    }
}

module.exports = requireAuthentication


