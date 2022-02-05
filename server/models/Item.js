const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    categories: [
        {
            type: String,
            required: true,
            trim: true
        }
    ],
    storageLocation: {
        type: String,
        required: true,
        trim: true
    },
    addedDate: {
        type: Date,
        default: Date.now
    },
    expirationDate: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        default: 1
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;