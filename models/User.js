const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const UserSchema = new Schema ({
    userName: {
        type: String,
        required: "Username is required",
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: "Email is required",
        unique: true,
        match:  [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
            ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
            ref: 'User'
    }]
},
{
    toJSON: {
        virtuals: true,
        getter: true,
    },
    id:false
}
)

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})


const User = model('User', UserSchema);


module.exports = User;