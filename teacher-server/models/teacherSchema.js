const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema({

    // ⁡⁣⁣⁢ Basic Details⁡

    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    DOB: {
        type: String,
        require: true
    },
    Age: {
        type: Number,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },
    BloodGroup:{
        type: String,
        require: true
    },
    MobileNo: {
        type: Number,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    EmpId: {
        type: Number,
        require: true
    },

    // ------------------ //

    // Address⁡
    
    Line1: {
        type: String,
        require: true
    },
    Line2: {
        type: String,
        require: true
    },
    CityORTown: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    PinCode: {
        type: Number,
        require: true
    },
    Country: {
        type: String,
        require: true
    },
    
    // ---------------------- //
    
    JobTitle: {
        type: String,
        require: true
    },
    PositionORDesignation: {
        type: String,
        require: true
    },
    Department: {
        type: String,
        require: true
    },
    EmpType: {
        type: String,
        require: true
    },
    AppDate: {
        type: String,
        require: true
    },
    Exp: {
        type: Number,
        require: true
    },
    HighestQualification: {
        type: String,
        require: true
    },

    // Additional Information

    AdhaarNo: {
        type: Number,
        require: true
    },
    PanNo: {
        type: Number,
        require: true
    },
    Religion: {
        type: String,
        require: true
    },
    Category: {
        type: String,
        require: true
    },
    FatherName: {
        type: String,
        require: true
    },
    MotherName: {
        type: String,
        require: true
    },
    MaritalStatus: {
        type: String,
        require: true
    },
    SpouseName: {
        type: String,
        require: true
    },
    EmergContactNo: {
        type: Number,
        require: true
    },

    // ------------------------- //

    // Previous Experience

    InstituteName: {
        type: String,
        require: true
    },
    JoiningDate: {
        type: String,
        require: true
    },
    RelievingDate: {
        type: String,
        require: true
    },
    Location: {
        type: String,
        require: true
    },
    RefName: {
        type: String,
        require: true
    },
    RefMobileNo: {
        type: Number,
        require: true
    },

    // ------------------------- //

    // Bank Account
    
    BankAccNo: {
        type: Number,
        require: true
    },
    BankAccName: {
        type: String,
        require: true
    },
    BankBranch: {
        type: String,
        require: true
    },
    BankIFSCCode: {
        type: String,
        require: true
    },
    
    // ------------------- //

})
const Teacher = mongoose.model("teacher", teacherSchema);
module.exports = Teacher;