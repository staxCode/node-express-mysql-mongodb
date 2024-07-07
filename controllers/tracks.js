const { tracksModel } = require("../models");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getItem = (req, res) => {
    const data = [];
    return res.send({ successGet: true, data });
};
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    return res.send({ successGetAll: true, data });
};
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createItem = async (req, res) => {
    const data = req.body
    console.log(data);

    const response = await tracksModel.create(data)

    return res.send({ created: true, response });
};
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const updateItem = (req, res) => {
    const data = [];
    return res.send({ updated: true, data });
};

const deleteItem = (req, res) => {
    const data = [];
    return res.send({ deleted: true, data });
};

module.exports = {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem
};
