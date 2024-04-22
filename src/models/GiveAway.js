const { Schema, model} = require('mongoose');

const GiveAwaySchema = new Schema({
    UserId: {
        type: String,
        required: true
    },
    MessageId: {
        type: String,
        required: true
    }
})

module.exports = model('giveaway',GiveAwaySchema)