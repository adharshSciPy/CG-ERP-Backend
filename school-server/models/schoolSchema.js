const mongoose = require('mongoose')
const schoolSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    SchoolName: {
        type: String,
        require: true
    },
    Address: {
        type: String,
        require: true
    },
    PhoneNo: {
        type: Number,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    District: {
        type: String,
        require: true
    },
    CityORTown: {
        type: String,
        require: true
    },
    Board: {
        type: String,
        require: true
    },
    Type: {
        type: String,
        require: true
    },


})
const School = mongoose.model("school", schoolSchema);
module.exports = School;