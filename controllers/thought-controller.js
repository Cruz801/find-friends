const Thought = require('../models/Thought')
const User = require('../models/User');
module.exports = { 
    createThought:async (req,res) => {
        try {
            const thought = await Thought.create({thoughtText: req.body.thoughtText, username: req.body.username})
            await User.findOneAndUpdate(
                { username: req.body.username },
            { $push: { thoughts: thought._id } },
            { new: true, runValidators: true}
            )
            res.status(201).json(thought)
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    getAllThoughts:async(req,res) => {
        try {
            const thoughts = await Thought.find()
            res.status(200).json(thoughts)
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    getThoughtById:async(req,res) => {
        try {
            const thoughts = await Thought.findById()
            res.status(200).json(thoughts)
        } catch(err) {
            console.log(err);
            res.status(500).json(err)
        }
    },
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },
    
    deleteThought:async(req,res) => {
        
    },
    addReaction:async(req,res) => {

    },
    deleteReaction:async(req,res) => {
        
    }
}