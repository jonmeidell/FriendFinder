const Express = require("express");
const router = Express.Router();

router.get("/survey", (req, res) => {
    console.log("survey route hit");
    res.sendFile(__dirname, "../public/survey.html")
});

router.get("/*", (req, res) => {
    res.sendFile(__dirname, "../public/index.html")
});

module.exports = router