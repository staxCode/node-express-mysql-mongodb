const express = require("express")
const fs = require("fs")
const router = express.Router();
const PATH_ROUTES = __dirname;

fs.readdirSync(PATH_ROUTES).forEach(fileName => {
    const name = fileName.split(".")[0];
    if (name !== "index") {
        router.use(`/${name}`, require(`./${fileName}`))
    }
});

module.exports = router
