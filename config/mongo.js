const mongoose = require("mongoose");
const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    }).then(res => {
        console.log(`🎯 Connect databa Mongo success!`);
    }).catch(err => console.error(err))
}

module.exports = {
    dbConnect
}   