const mongoose = require('mongoose')
const subjectSchema = new mongoose.Schema({
    Department: {
        type: String,
        require: true
    },
    Year: {
        type: Number,
        require: true
    },
    Scheme: {
        type: String,
        require: true
    },
    Semester: {
        type: String,
        require: true
    },
    SubjectName: {
        type: String,
        require: true
    },
    Hours: {
        type: Number,
        require: true
    },
    Teacher: {
        type: String,
        require: true
    }
})
const Subject = mongoose.model("subject", subjectSchema);
module.exports = Subject;