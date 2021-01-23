const Restaurant = require('../model/restaurant.js');

//Create new restaurant
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "restaurant content can not be empty"
        });
    }

    // Create a restaurant
    const restaurant = new Restaurant({
        restaurantName: req.body.restaurantName || "No restaurant title", 
        lat: req.body.lat,
        log: req.body.log,
        Address: req.body.Address
    });

    // Save restaurant in the database
    restaurant.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the restaurant."
        });
    });
};

// Retrieve all restaurants from the database.
exports.findAll = (req, res) => {
    Restaurant.find()
    .then(restaurants => {
        res.send(restaurants);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving restaurants."
        });
    });
};

// Find a single restaurant with a restaurantId
exports.findOne = (req, res) => {
    Restaurant.findById(req.params.restaurantId)
    .then(restaurant => {
        if(!restaurant) {
            return res.status(404).send({
                message: "restaurant not found with id " + req.params.restaurantId
            });            
        }
        res.send(restaurant);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "restaurant not found with id " + req.params.restaurantId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving restaurant with id " + req.params.restaurantId
        });
    });
};

// Update a restaurant
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "restaurant content can not be empty"
        });
    }

    // Find and update restaurant with the request body
    Restaurant.findByIdAndUpdate(req.params.restaurantId, {
        restaurantName: req.body.restaurantName || "No restaurant title", 
        age: req.body.age,
        location: req.body.location
    }, {new: true})
    .then(restaurant => {
        if(!restaurant) {
            return res.status(404).send({
                message: "restaurant not found with id " + req.params.restaurantId
            });
        }
        res.send(restaurant);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "restaurant not found with id " + req.params.restaurantId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.restaurantId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Restaurant.findByIdAndRemove(req.params.restaurantId)
    .then(restaurant => {
        if(!restaurant) {
            return res.status(404).send({
                message: "restaurant not found with id " + req.params.restaurantId
            });
        }
        res.send({message: "restaurant deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "restaurant not found with id " + req.params.restaurantId
            });                
        }
        return res.status(500).send({
            message: "Could not delete restaurant with id " + req.params.restaurantId
        });
    });
};