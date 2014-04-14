var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PersonSchema = new Schema({
    added_at: {
        type: Date,
        default: Date.now
    },
    name: String,
    gender: Number, // 0 male, 1 female
    age: Number,
    bed_preference_min: Number,
    bed_preference_max: Number,
    bath_preference_min: Number,
    bath_preference_max: Number
});

module.exports = mongoose.model('Person', PersonSchema);
