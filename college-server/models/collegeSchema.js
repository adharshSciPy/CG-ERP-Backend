const mongoose = require('mongoose')
const collegeSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    CollegeName: {
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
    ProgramType: {
        type: String,
        require: true
    },
    Type: {
        type: String,
        require: true
    },
    CourseType: {
        type: String,
        require: true
    },
    Course: {
        type: String,
        require: true
    },
    Stream: {
        type: String,
        require: true
    }
})
const College = mongoose.model("college", collegeSchema);
module.exports = College;