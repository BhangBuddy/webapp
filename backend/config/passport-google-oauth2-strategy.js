const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');



passport.use(new googleStrategy({

        clientID: "265338538542-1pkcj948r31em6m605vjqrfrqg13riom.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8000/auth/google/callback",
    },

    function(accessToken, refreshToken, profile, done){
        // find a user
        User.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if (err){console.log('error in google strategy-passport', err); return;}
            console.log(accessToken, refreshToken);
            console.log(profile);
                 
            if (user){
                user.username= profile.name.givenName;
                user.save();
                return done(null, user);
            }else{
                
                User.create({
                    username: profile.name.givenName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex'),
                }, function(err, user){
                    if (err){console.log('error in creating user google strategy-passport', err); return;}

                    return done(null, user);
                });
            }

        }); 
    }


));


module.exports = passport;
