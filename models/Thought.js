const { Schema, model, Types } = require('mongoose');
const dateFormat = require("../utils/dateFormat");



const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    userName: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);


const ReactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength:280
    },
    userName: {
        type: String,
        required: "Username required"
    },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)



const Thought = model('Thought', ThoughtSchema);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});



module.exports = Thought;