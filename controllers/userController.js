const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.loginForm = (req, res) => {
    res.render('login', { title: 'Login' });
};

exports.rules = (req, res) => {
    res.render('rules', { title: 'Rules' });
};

exports.about = (req, res) => {
    res.render('about', { title: 'About' });
};

exports.home = (req, res) => {
    res.sendFile('public/index.html');
};

exports.registerForm = (req, res) => {
    res.render('register', { title: 'Register' });
};

exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.sanitizeBody('teamname');
    req.sanitizeBody('collegename');
    req.sanitizeBody('phonenumber');
    req.checkBody('name', 'You must supply a name!').notEmpty();
    req.checkBody('email', 'That Email is not valid!').isEmail();
    req.checkBody('teamname', 'You must supply a team name!').notEmpty();
    req.checkBody('phonenumber', 'You must supply a phone number!').notEmpty();
    req.checkBody('collegename', 'You must supply a college name!').notEmpty();
    req.sanitizeBody('email').normalizeEmail({
        gmail_remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    });
    req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
    req.checkBody('password-confirm', 'Confirmed Password cannot be blank!').notEmpty();
    req.checkBody('password-confirm', 'Oops! Your passwords do not match').equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
        req.flash('error', errors.map(err => err.msg));
        res.render('register', { title: 'Register', body:req.body, flashes: req.flash() });
        return; // stop the fn from running
    }
    next(); // there were no errors!
};

exports.register =async (req, res, next) => {
    try{
        const user = new User({ email: req.body.email, name: req.body.name ,teamname: req.body.teamname,collegename: req.body.collegename, phonenumber: req.body.phonenumber});
        const register = promisify(User.register, User);
        await register(user, req.body.password);
        next();
    }
    catch (e){
        req.flash('error', "Email or team name already exists");
        res.render('register', { title: 'Register', body:req.body, flashes: req.flash() });
        return;
    }
    // pass to authController.login
};
