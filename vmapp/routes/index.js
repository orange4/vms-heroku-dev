module.exports = function(app, passport) {

    // route for home page
    app.get('/', function(req, res) {
        res.render('login',{title : "VMS"}); // load the index.ejs file
    });
	app.get('/home', function(req, res) {
        res.render('index',{title: "VMS"});
    });
    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/home/callback',
            passport.authenticate('google', {
                    successRedirect : '/home',
                    failureRedirect : '/'
            }));

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}