const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.play = (req,res) =>{
    const level =req.user.level;
    if(level === 0) {
        res.render('level1', {title: 'Play'});
        return;
    }
    else
    if(level === 1) {
        res.render('level2', {title: 'Play'});
        return;
    }
    if(level === 2) {
        res.render('level3', {title: 'Play'});
        return;
    }
    if(level === 3) {
        res.render('level4', {title: 'Play'});
        return;
    }
    if(level === 4) {
        res.render('level5', {title: 'Play'});
        return;
    }
    if(level === 5) {
        res.render('completed', {title: 'Play'});
        return;
    }
};
exports.newlevel = async(req,res) =>{
    option = req.body.option
    if(req.user.level === 0)
    {
        if(option === "abdulnazirkunju") {
            const user = await User.findOneAndUpdate(
                {_id: req.user._id},
                {$set: {
                    level: req.user.level+1,
                }},
                {new:true,runValidators:true,context: 'query'}
            );
            req.flash('success','Answer is correct');
            res.redirect('/play');
            }
            else
        {
            req.flash('success','Wrong Answer');
            res.redirect('/play');
        }

    }
    if(req.user.level === 1)
    {
        if(option === "kaylanalake") {
            const user = await User.findOneAndUpdate(
                {_id: req.user._id},
                {$set: {
                    level: req.user.level+1,
                }},
                {new:true,runValidators:true,context: 'query'}
            );
            req.flash('success','Answer is correct')
            res.redirect('/play');
        }
        else
        {
            req.flash('success','Wrong Answer');
            res.redirect('/play');
        }

    }
    if(req.user.level === 2)
    {
        if(option === "kakkayamcamp") {
            const user = await User.findOneAndUpdate(
                {_id: req.user._id},
                {$set: {
                    level: req.user.level+1,
                }},
                {new:true,runValidators:true,context: 'query'}
            );
            req.flash('success','Answer is correct')
            res.redirect('/play');
        }
        else
        {
            req.flash('success','Wrong Answer');
            res.redirect('/play');
        }

    }
    if(req.user.level === 3)
    {
        if(option === "16122012") {
            const user = await User.findOneAndUpdate(
                {_id: req.user._id},
                {$set: {
                    level: req.user.level+1,
                }},
                {new:true,runValidators:true,context: 'query'}
            );
            req.flash('success','Answer is correct')
            res.redirect('/play');
        }
        else
        {
            req.flash('success','Wrong Answer');
            res.redirect('/play');
        }

    }
    if(req.user.level === 4)
    {
        if(option === "threetimes") {
            const user = await User.findOneAndUpdate(
                {_id: req.user._id},
                {$set: {
                    level: req.user.level+1,
                }},
                {new:true,runValidators:true,context: 'query'}
            );
            req.flash('success','Answer is correct')
            res.redirect('/play');
        }
        else
        {
            req.flash('success','Wrong Answer');
            res.redirect('/play');
        }

    }

}