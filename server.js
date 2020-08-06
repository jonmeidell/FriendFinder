const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/app'))

const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");

app.use(express.static(path.join(__dirname, "./app/public")));
app.use("/", htmlRoutes);
app.use("/survey", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log("Finding friends on port: " + PORT));