const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: /* add your client ID here */,
        clientSecret: /* add your client secret here */
    }, () => {
        // passport callback function
    })
);
