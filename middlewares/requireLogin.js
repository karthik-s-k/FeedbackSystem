module.exports = (req, res, next) => {
    if (!req.user) {
        console.log('You must log in!');
        return res.status(401).send({ error: 'You must log in!' });
    }

    next();
};