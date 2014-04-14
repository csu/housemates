var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PropertySchema = new Schema({
    added_at: {
        type: Date,
        default: Date.now
    },
    loc: {
        "lat": Number,
        "lng": Number
    },
    bed_count: Number,
    bath_count: Number,
    rent: Number, // rent per month
    gender: Number, // 0 male, 1 female, 2 doesn't matter
    description: String
});

module.exports = mongoose.model('Property', PropertySchema);
