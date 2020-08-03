const Express = require("express");
const router = Express.Router();
const data = require("../data/friends");

module.exports = router

router.get("/friends", (req, res) => {
    res.json(data)
});
router.post("/friends", (req, res) => {
    console.log(req.body)
    data.push(req.body)
    res.json(data)
    let returnSurvey = {
        name: req.body.name,
        photo: req.body.photo,
        scores: [
            parseInt(req.body.question1),
            parseInt(req.body.question2),
            parseInt(req.body.question3),
            parseInt(req.body.question4),
            parseInt(req.body.question5),
            parseInt(req.body.question6),
            parseInt(req.body.question7),
            parseInt(req.body.question8),
            parseInt(req.body.question9),
            parseInt(req.body.question10),
        ]
    }
    const result = [];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        const friendScores = friend.scores;
        const differences = [];

        for (let i = 0; i < friendScores.length; i++) {
            const friendScore = friendScores[i];
            differences.push(calc(returnSurvey.scores[i], friendScore));
        }

        var difference = differences.reduce((a, b) => a + b, 0);
        result.push({
            friend: friend,
            difference: difference
        });


    }
    friends.push(returnSurvey);
    result.sort((a, b) => (a.difference > b.difference) ? 1 : -1);
    return res.json(result[0]);
});

var calc = function (a, b) {
    return Math.abs(parseInt(a) - parseInt(b));
};