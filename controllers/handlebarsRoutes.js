const router = require('express').Router();

router.get("/", (req,res) => {
    res.render("login",{});
} )
router.get("/profile", (req,res) => {
    res.render("profile",{});
} )

// router.get("/login",(req,res) => {
//     res.render("login")
// })

router.get("/signup",(req,res) => {
    res.render("signup");
})

// router.get("/signout",(req,res) => {
//     res.render("signout");
// })

// router.get("/search",(req,res) => {
//     res.render('search')
// })
module.exports = router;
