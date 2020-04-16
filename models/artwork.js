const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    year: {
        type: String,
    },
    signature: {
        type: String,
    },
    createdBy: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Artist' 
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Artwork', artworkSchema);