const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user);
        })
        .catch((err) => {
            done(err, null);
        });
});

// passport.serializeUser((user, done) => {
//     done(null, user);
// });
  
// passport.deserializeUser((obj, done) => {
//     done(null, obj);
// });

passport.use(new GoogleStrategy({
    clientID : keys.googleClientID, 
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const userData = profile._json;
        const existingUser = await User.findOne({ email: userData.email })

        //User is already registered
        if (existingUser) {            
            return done(null, existingUser);
        }
    
        //New user to be registered
        const user = await new User({ 
            name: userData.name, 
            email: userData.email, 
            authType: "google", 
            userId: profile.id }).save()
        done(null, user);    
    })
);

passport.use(new FacebookStrategy({
    clientID : keys.facebookClientID, 
    clientSecret: keys.facebookClientSecret,
    callbackURL: '/auth/facebook/callback',
    profileFields: ["id", "email", "name"],
    proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {        
        const userData = profile._json;
        const existingUser = await User.findOne({ email: userData.email })

        //User is already registered
        if (existingUser) {            
            return done(null, existingUser);
        }
        
        //New user to be registered
        const user = await new User({ 
            name: userData.first_name + " " + userData.last_name, 
            email: userData.email, 
            authType: "facebook", 
            userId: profile.id }).save()
        
        done(null, user);
    })
);