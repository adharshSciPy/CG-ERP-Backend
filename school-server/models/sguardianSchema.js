const mongoose = require('mongoose')
const sguardianSchema = new mongoose.Schema({

    // Guardian Details

    // 1. Father

    FName: {
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
const Guardian = mongoose.model("guardian", sguardianSchema);
module.exports = Guardian;