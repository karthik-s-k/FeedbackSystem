const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id,
            shipping: {
                name: 'Stripe Test User',
                address: {
                  line1: '105 Reflections drive',
                  postal_code: '94583',
                  city: 'San Ramon',
                  state: 'CA',
                  country: 'US',
                },
              },
        });

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};