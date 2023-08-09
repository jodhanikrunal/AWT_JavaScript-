const UserModels = require('../models/userModel');

const userController = {
    getLogin (req, res){
        res.render('login');
    },
    getRegister(req, res){
        res.render('register');
    },
    // postRegister(req, res) {
    //     const user = req.body;
    //     const userId = UserModels.createUser(user);
    //     res.send(`User registered with ${userId}`);
    // },
};

module.exports = userController;