const passport = require('passport');


exports.login = passport.authenticate('local',{
    failureRedirect: '/login',
    failureFlash: 'Failed Login',
    successRedirect: '/play',
    successFlash: 'You are now logged in'

});
exports.flogin = passport.authenticate('local',{
    failureRedirect: '/login',
    failureFlash: 'Failed Login',
    successRedirect: '/rules',
    successFlash: 'You are now logged in'

});

exports.logout = (req,res) => {
  req.logout();
  req.flash('success','You are now logout');
  res.redirect('/');
};

exports.isLoggedIn = (req,res,next) => {
  if(req.isAuthenticated())
  {
      next();
      return;
  }
  res.redirect('/register');
};
exports.isNotLoggedIn = (req,res,next) => {
    if(req.isAuthenticated())
    {
        res.redirect('/play');
        return;
    }
    next();
};