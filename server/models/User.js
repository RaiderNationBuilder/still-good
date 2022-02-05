const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
    itemCount: {
        type: Number,
        default: 1
    },
    saveItem: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }
    ]
});
const User = model('User', UserSchema);

module.exports = User;