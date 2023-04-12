const mongoose = require('mongoose')
const personalSchema = new mongoose.Schema({

    // Basic Details

    Name: {
        type: String,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },
    DOB: {
        type: String,
        require: true
    },
    AdhaarNo: {
        type: Number,
        require: true
    },
    MotherTongue: {
        type: String,
        require: true
    },
    Category: {
        type: String,
        require: true
    },
    Religion: {
        type: String,
        require: true
    },
    Nationality: {
        type: String,
        require: true
    },
    BloodGroup: {
        type: String,
        require: true
    },

    // ------------------- //

    // Contact Details
    
    CommAddress: {
        type: String,
        require: true
    },
    Landline: {
        type: Number,
        require: true
    },
    Mobile: {
        type: Number,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    PermAddress: {
        type: String,
        require: true
    },

    // ------------------- //

    // Qualification Details

    Qualification: {
        type: String,
        require: true
    },
    BoardORUniversity: {
        type: String,
        require: true
    },
    QualifiedYear: {
        type: Number,
        require: true
    },
    TotalMark: {
        type: Number,
        require: true
    },
    Percentage: {
        type: Number,
        require: true
    },

    // -------------------- //

    // Qualifying Exam Certificate

    DocName: {
        type: String,
        require: true
    },
    Doc: {
        type: String,
        require: true
    },

    // -------------------- //

    // Guardian Details

    // 1. Father

    FNamee: {
        type: String,
        require: true
    },
    FOccupation: {
        type: String,
        require: true
    },
    FCommAddress: {
        type: String,
        require: true
    },
    FPermAddress: {
        type: String,
        require: true
    },
    FLandline: {
        type: Number,
        require: true
    },
    FMobile: {
        type: Number,
        require: true
    },
    FEmail: {
        type: String,
        require: true
    },

    // 2. Mother

    MName: {
        type: String,
        require: true
    },
    MOccupation: {
        type: String,
        require: true
    },
    MCommAddress: {
        type: String,
        require: true
    },
    MPermAddress: {
        type: String,
        require: true
    },
    MLandline: {
        type: Number,
        require: true
    },
    MMobile: {
        type: Number,
        require: true
    },
    MEmail: {
        type: String,
        require: true
    },

    // 3. Guardian

    GName: {
        type: String,
        require: true
    },
    GOccupation: {
        type: String,
        require: true
    },
    GCommAddress: {
        type: String,
        require: true
    },
    GPermAddress: {
        type: String,
        require: true
    },
    GLandline: {
        type: Number,
        require: true
    },
    GMobile: {
        type: Number,
        require: true
    },
    GEmail: {
        type: String,
        require: true
    }
})
const Personal = mongoose.model("personal", personalSchema);
module.exports = Personal;