const router = require('express').Router();
const { User, Media, Types } = require('../../models');

router.post('/login',async(req,res) => {
    try{
        const userData = await User.findOne({where: {email:req.body.email}})
        console.log(userData)
    if(!userData){
        res.status(400).json({message:'Email or password is incorrect'})
        return;
    }
    const isValid = await userData.checkPassword(req.body.password)
    if(!isValid){
        res.status(400).json({message:'Email or password is incorrect'})
        return;
    }
    await req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
    }) 
    res.json({user:userData,message:'thank you for logging in'})
    console.log(req.session)
} //end Try
    catch(err){
        res.status(400).json(err);
        if(err){
            alert(err)
        }

    }//End Catch
});//End Router.Post

router.post('/logout',(req,res) => {
    if(req.session.logged_in){
        req.session.destroy(() =>{ 
            res.status(204).end()
            console.log(204 + 'Session ended')
        });
     } else{
            res.status(404).end();
            console.log(res.status(404))
            alert(404 + 'Sesson ended')
        }
    }
)
router.get('/profile', async (req, res) => {
    try {
        if (!req.session.logged_in) {
            res.redirect('/login');
        }
        console.log("Hello")
        const userId = req.session.user_id;
        console.log(userId)
        const [userData, mediaEntries] = await Promise.all([
            User.findByPk(userId),
            Media.findAll({
                where: { user_id: userId },
                include: [
                    { model: Types, attributes: ['medtype'] },
                ]
            })
        ])
        // res.render('profile', {
        //     title: 'Profile',
        //     username: userData.username,
        //     mediaEntries: mediaEntries, 
        // })
        console.log(mediaEntries, userData)
    } catch (err) {
        res.status(500).json(err);
        console.error(err)
    }

})


// router.post("/signup"),(req,res) => {
// }

module.exports = router;