const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wallSchema = new Schema({
    height: {
        type: Number,
    },
    width: {
        type: Number,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Wall', wallSchema);