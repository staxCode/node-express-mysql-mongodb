const { storageModel } = require("../models");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createStorage = (req, res) => {
    console.log(req.file)
    const data = [];
    return res.send({ successGet: true, data });
};

module.exports = {
    createStorage,
};