module.exports = (req, res, next) => {
    const auth = req.headers.authorization;
    if (auth == undefined || auth != process.env.authorization) {
        return res.status(401).json({ error: 'invalid authorization' });
    }
    next()
}