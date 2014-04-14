var mongoose = require('mongoose');
var Property = mongoose.model('Property');
var Person = mongoose.model('Person');

exports.index = function(req, res) {
    return res.send({'Start': 'Hello'});
}

exports.getAll = function(req, res) {
    Property.find({}, function(err, all) {
        if (err) {
            res.json({'Error': 'Something went wrong'})
        } else {
            res.json({'properties': all});
        }
    })
}

exports.addProperty = function(req, res) {
    var newProperty = new Property({
        "loc": {
            "lat": req.body.lat,
            "lng": req.body.lng,
        },
        "bed_count": req.body.bed_count,
        "bath_count": req.body.bath_count,
        "rent": req.body.rent,
        "gender": req.body.gender,
        "description": req.body.description
    });
    console.log(newProperty);
    newProperty.save(function(err) {
        if (!err) {
            return console.log('created');
        } else {
            return console.log(err);
        }
    });
    return res.send(newProperty)
}

exports.getProperty = function(req, res) {
    Property.findById(req.params.id, function(err, property) {
        if (!err) {
            return res.json(property);
        } else {
            console.log(err);
        }
    })
}
