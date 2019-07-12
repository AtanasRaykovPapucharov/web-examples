const jwt = require('jsonwebtoken')
const crypto = require('../services/crypt')
const isAuth = require('../services/auth').isAuth

module.exports = (collection, Model, params) => {
    return {
        login: (req, resp) => {
            if(!isAuth(req)) {
                resp.status(401).json({error: "Unauthorized request!"})
            } else {
                let data = req.body
                console.log(data)
                
                // try {
                //     const username = req.body.username
                //     const token = jwt.sign({
                //         username: username
                //     }, req.body.password)

                //     resp.status(200)
                //         .cookie('heroku-api-access-token', JSON.stringify({ username, token }), {
                //             expires: new Date(Date.now() + 900000),
                //             httpOnly: false
                //         })
                //         .redirect('/api')
                // } catch (err) {
                //     resp.status(400).json(err)
                // }
            }
        },
        register: (req, resp) => {
            let data = req.body
            console.log(data)

            // User registration
            if(data.username && data.email && data.password) {
                try {
                return collection.getAll({email: data.email })
                    .then(user => {
                        if(user.length > 0) {
                            resp.status(400).json({error: "User already exists!"})
                        } else {
                            const salt = crypto.generateSalt()
                            const hashedPassword = crypto.generateHashedPassword(data.password, salt)
        
                            data.privateKey = salt
                            data.cryptPassword = crypto.encrypt(hashedPassword, salt)
                            data.token = jwt.sign({ username: data.email}, data.cryptPassword)
                    
                            let newModel = new Model(data)
                            try {
                                return collection.post(newModel)
                                    .then(data => {
                                        return resp.status(200).cookie('user-access-token', data.token)
                                    })
                                    .catch(err => {
                                        return resp.status(500).json(err)
                                    })
                            } 
                            catch (err) {
                                resp.status(500).json(err)
                                throw new Error('Controller "post" error: ' + err)
                            }
                        }
                    }).catch(err => {
                        return resp.status(500).json(err)
                    })
                } catch (err) {
                    resp.status(500)
                    throw new Error('Controller "post" error: ' + err)
                }
            }
        
            let newModel = new Model(data)
            try {
                return collection.post(newModel)
                .then(data => {
                    return resp.status(200).json(data)
                })
                .catch(err => {
                    return resp.status(400)
                })
            } catch (error) {
                resp.status(400)
                throw new Error('Controller "post" error: ' + error)
            }
        },
        // getByToken: (req, resp) => {
        //     console.log(req)
        //     try {
        //         return collection.getByProp({token: ''})
        //         .then(data => {
        //             return resp.status(200).json(data)
        //         })
        //         .catch(err => {
        //             return resp.status(400)
        //         })
        //     } catch (error) {
        //         resp.status(400)
        //         throw new Error('Controller "getAll" error: ' + error)
        //     }
        // }
    }
}