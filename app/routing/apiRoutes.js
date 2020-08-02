const Express = require("express");
const router = Express.Router();
const data = require("../data/friends");

router.get("/friends", (req, res) => {
    res.json(data)
});
router.post("/friends", (req, res) => {
    console.log(req.body)
    data.push(req.body)
    res.json(data)
});

module.exports = router