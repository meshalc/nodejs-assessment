const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    restaurantName: String,
    log: String,
    lat: String,
    Address: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('restaurants', restaurantSchema);