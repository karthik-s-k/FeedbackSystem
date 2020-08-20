module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        console.log('Not enough credits!');
        return res.status(403).send({ error: 'Not enough credits!' });
    }

    next();
};