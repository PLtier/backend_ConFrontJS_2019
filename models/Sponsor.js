const mongoose = require('mongoose');
const UserSchema = require('./User');
const Schema = mongoose.Schema;

const SponsorSchema = new Schema({
    sponsorName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8

    },

    participants: [UserSchema],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Sponsor = mongoose.model('sponsor', SponsorSchema);