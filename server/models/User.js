const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 7,

        },
        saveItem: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Item'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.pre('save', async function (next) {
    console.log("hello from userJS");
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;

        this.password = await bcrypt.hash(this.password, saltRounds);

    }

    next();
});
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('itemCount').get(function () {
    return this.saveItem.length;
});

const User = model('User', userSchema);
module.exports = User;