const mongoose = require('mongoose');
const UserSchema = require('./User');
const Schema = mongoose.Schema;

const CompetitionSchema = new Schema({
    competitionName: {
        type: String,
        required: true
    },
    participants: [UserSchema]
});

module.exports = CompetitionSchema;