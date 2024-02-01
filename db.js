const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Connected To Mongo Successfully");
            }
        })
}

module.exports = connectToMongo;