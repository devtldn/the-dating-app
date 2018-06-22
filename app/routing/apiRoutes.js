/*
Your apiRoutes.js file should contain two routes:

A GET route with the url /api/dates. This will be used to display a JSON of all possible dates.

A POST routes /api/dates. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/

const friends = require('../data/friends.js');

module.exports = (app) => {


    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        friends.push(req.body);
    });
}