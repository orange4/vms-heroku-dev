// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '6688872429-02m82e9luefpr9aqjl9nsthnpvt864ja.apps.googleusercontent.com',
        'clientSecret'  : 'rCorkg0OAHhTgAbtFYPYAbZ4',
        'callbackURL'   : 'http://localhost:3000/home/callback'
    }

};
