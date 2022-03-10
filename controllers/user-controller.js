const User = require('../models/User')


module.exports = { 
    createUser:async (req,res) => {
        console.log(req.body)
        try {
            
            const user = await User.create(req.body)
            res.status(200).json(user)
        } catch(err) {
            console.log(err);
            res.status(404).json(err)
        }
    },
    getAllUsers:async (req,res) => {
        try {
            const users = await User.find()
            .populate([
                { path: 'thoughts', select: "-__v" },
                { path: 'friends', select: "-__v" }
            ])
            res.status(200).json(users)
        } catch(err) {
            console.log(err);
            res.status(400).json(err)
        }
    },
    getUserById:async (req,res) => {
        try {
            const user = await User.findById(req.params.id)
            .populate([
                { path: 'thoughts', select: "-__v" },
                { path: 'friends', select: "-__v" }
            ])
            res.status(200).json(user)
        } catch(err) {
            console.log(err);
            res.status(400).json(err)
        }
    },
    updateUser:async(req,res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id,req.body)
            res.status(201).json(user)
        } catch(err) {
            console.log(err);
            res.status(400).json(err)
        }
    },
    deleteUser:async (req,res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json(user)
        } catch(err) {
            console.log(err);
            res.status(400).json(err)
        }
    },
    addFriend({params}, res) {
        User.findOneAndUpdate({_id: params.userid}, {$push: { friends: params.friendId}}, {new: true})
        .populate({path: 'friends', select: ('-__v')})
        .select('-__v')
        .then(dbUsersData => {
            if (!dbUsersData) {
                res.status(404).json({message: 'No User with this particular ID!'});
                return;
            }
        res.json(dbUsersData);
        })
        .catch(err => res.json(err));
    },
}


