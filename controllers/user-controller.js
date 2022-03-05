const User = require('../models/User')


module.exports = { 
    createUser:async (req,res) => {
        try {
            const user = await User.create({username:req.body.username, email:req.body.email})
            res.status(404).json(user)
        } catch(err) {
            console.log(err);
            res.status(404).json(err)
        }
    },
    getAllUsers:async (req,res) => {
        try {
            const users = await User.find()
            res.status(404).json(users)
        } catch(err) {
            console.log(err);
            res.status(400).json(err)
        }
    },
    getUserById:async (req,res) => {
        try {
            const user = await User.findById(req.params.id)
            res.status(201).json(user)
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    updateUser:async(req,res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id,req.body)
            res.status(201).json(user)
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    deleteUser:async (req,res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(201).json(user)
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    }
}