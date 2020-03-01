module.exports = middleware => {
    return (req, res, next) => {
        if (req.user.admin) {
            console.log(req.user)
            middleware(req, res, next)
        } else {
            res.status(401).send('Usuário não é administrador')
        }
    }
}