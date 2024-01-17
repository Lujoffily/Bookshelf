const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    try { 
        const userData = await User.create({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'User created and logged in successfully'});
        })
    } catch (err) {
        res.status(500).json(err)
        console.log(err);
        window.alert("Sorry! We were unable to create the account");
    }
    finally {
        Response.redirect("/")
    }
});

module.exports = router