var peopleData = require("../data/friends")
module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(peopleData);
    });

    app.post("../data/friends", function (req, res) {
        peopleData.push(req.body)
    });
}