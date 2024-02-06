const books = require('../models/books')

const getbooks = async (req, res) => {
    try {
        let data = await books.getAllbooks();
        console.log(data);
        res.json(data);
    } catch (err) {
        console.error(err);
    }
};


module.exports = {getbooks}