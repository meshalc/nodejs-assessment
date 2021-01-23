module.exports = (app) => {
    const restaurants = require('../controller/restaurantController.js');

    // Create a new restaurant
    app.post('/restaurants', restaurants.create);

    // Retrieve all restaurants
    app.get('/restaurants', restaurants.findAll);

    // Retrieve a single restaurant with restaurantId
    app.get('/restaurants/:restaurantId', restaurants.findOne);

    // Update a Note with restaurantId
    app.put('/restaurants/:restaurantId', restaurants.update);

    // Delete a Note with restaurantId
    app.delete('/restaurants/:restaurantId', restaurants.delete);
}