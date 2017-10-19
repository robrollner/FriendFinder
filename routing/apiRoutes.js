const friends = require('../app/data/friends');

module.exports = (app) => {
    app.get('/api/data/friends', (req, res) => {
        res.json(friends);
    })
    app.post('/api/data/friends', (req, res) => {
        friends.push(req.body);
    })

}