const { Schema, model, Types } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/
        },
        thoughts: [{
            type: Types.ObjectId,
            required: true,
            ref: "thought"
        },],
        friends: [{
            type: Types.ObjectId,
            required: true,
            ref: "user"
        }],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user', userSchema);

module.exports = User;
