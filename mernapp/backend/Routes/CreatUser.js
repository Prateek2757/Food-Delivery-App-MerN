const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret= "mynameispratikguragainjhapa";


router.post("/creatuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5, max: 25 }),

    body('password', 'invalid').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
        await User.create({
            name: req.body.name,
            password: secPassword,
            number: req.body.number,
            location: req.body.location,
            email: req.body.email
        });

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
});



router.post("/loginuser", [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(500).json({ errors: errors.array() });
        }
        let email = req.body.email;
    
        try {


            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "try logging with correct email" });
            }

            const pwdCompare = await bcrypt.compare(req.body.password, userData.password);

            if (!pwdCompare) {
                return res.status(400).json({ errors: "try logging with correct pass" });
            }
             
             const data ={
                user:{
                    id:userData.id
                }
             }  
                
             const authtoken = jwt.sign(data,jwtSecret);

            return res.json({ success: true,authtoken:authtoken })
        }
        catch (error) {
            console.error(error);
            res.json({ success: false });
        }
    });

module.exports = router;
