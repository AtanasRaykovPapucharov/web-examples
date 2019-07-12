const isAuth = require('../services/auth').isAuth

module.exports = (collection, Model, params) => {
    return {
        getAll: (req, resp) => {
            if(!isAuth(req)) {
                resp.status(401).redirect('/login')
            } else {
                try {
                    return collection.getAll()
                    .then(data => {
                        return resp.status(200).json(data)
                    })
                    .catch(err => {
                        return resp.status(400)
                    })
                } catch (error) {
                    resp.status(400)
                    throw new Error('Controller "getAll" error: ' + error)
                }
            }
        },
        post: (req, resp) => {
            if(!isAuth(req)) {
              resp.status(401).redirect('/login')
            } else {
                try {
                    return collection.post(req.body)
                        .then(data => {
                            return resp.status(200).json(data)
                        })
                        .catch(err => {
                            return resp.status(400).json(err)
                        })
                } catch (error) {
                    resp.status(500)
                    throw new Error('Controller "getById" error: ' + error)
                }
            }
        },
        delete: (req, resp) => {
          if(!isAuth(req)) {
            resp.status(401).redirect('/login')
          } else {
            try {
              return collection.delete(req.params.id)
                .then(data => {
                  return resp.status(200).json(data)
                })
                .catch(err => {
                  return resp.status(400)
                })
            } catch (error) {
              resp.status(400)
              throw new Error('Controller "delete" error: ' + error)
            }
          }
        },
        update: (req, resp) => {
          if(!isAuth(req)) {
            resp.status(401).json({error: "Unauthorized request!"})
          } else {
            const id = req.params.id
            const updateObj = req.body.updateObj
      
            try {
              return collection.update(id, updateObj)
                .then(data => {
                  return resp.status(200).json(data)
                })
                .catch(err => {
                  return resp.status(400)
                })
            } catch (error) {
              resp.status(400)
              throw new Error('Controller "update" error: ' + error)
            }
          }
        }
    }
}