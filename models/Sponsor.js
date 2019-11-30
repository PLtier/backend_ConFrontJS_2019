const mongoose = require('mongoose');
const CompetitionSchema = require('./Competition');
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

    competitions: [CompetitionSchema],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Sponsor = mongoose.model('sponsor', SponsorSchema);