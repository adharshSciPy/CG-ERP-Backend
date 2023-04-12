const Teacher = require("../models/teacherSchema");
module.exports = {

  // post

  addTDetails: async (req, res) => {
    const data = new Teacher({

      // Basic Details

      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      DOB: req.body.DOB,
      Age: req.body.Age,
      Gender: req.body.Gender,
      BloodGroup: req.body.BloodGroup,
      MobileNo: req.body.MobileNo,
      Email: req.body.Email,
      EmpId: req.body.EmpId,

      // Address

      Line1: req.body.Line1,
      Line2: req.body.Line2,
      CityORTown: req.body.CityORTown,
      State: req.body.State,
      PinCode: req.body.PinCode,
      Country: req.body.Country,

      // --------------------------------- //

      JobTitle: req.body.JobTitle,
      PositionORDesignation: req.body.PositionORDesignation,
      Department: req.body.Department,
      EmpType: req.body.EmpType,
      AppDate: req.body.AppDate,
      Exp: req.body.Exp,
      HighestQualification: req.body.HighestQualification,

      // --------------------------------------------------------- //

      // Additional Information

      AdhaarNo: req.body.AdhaarNo,
      PanNo: req.body.PanNo,
      Religion: req.body.Religion,
      Category: req.body.Category,
      FatherName: req.body.FatherName,
      MotherName: req.body.MotherName,
      MaritalStatus: req.body.MaritalStatus,
      SpouseName: req.body.SpouseName,
      EmergContactNo: req.body.EmergContactNo,

      // --------------------------------------- //

      // Previous Experience

      InstituteName: req.body.InstituteName,
      JoiningDateRelievingDate: req.body.JoiningDateRelievingDate,
      RelievingDate: req.body.RelievingDate,
      Location: req.body.Location,
      RefName: req.body.RefName,
      RefMobileNo: req.body.RefMobileNo,

      // ------------------------------------ //

      // Bank Acoount

      BankAccNo: req.body.BankAccNo,
      BankAccName: req.body.BankAccName,
      BankBranch: req.body.BankBranch,
      BankIFSCCode: req.body.BankIFSCCode,

      // -------------------- //

    });
    console.log(data);

    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
      console.log("Details added");
    }
    catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  //get

  getTDetails: async (req, res) => {
    try {
      const teacher = await Teacher.find();
      res.json(teacher);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deleteTDetails: async (req, res) => {
    try {
      const teacher = await Teacher.findByIdAndDelete(req.params.id);
      if (!teacher) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editTDetails: async (req, res) => {
    try {
      await Teacher.findByIdAndUpdate(req.params.id, {

        // Basic Details

        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DOB: req.body.DOB,
        Age: req.body.Age,
        Gender: req.body.Gender,
        BloodGroup: req.body.BloodGroup,
        MobileNo: req.body.MobileNo,
        Email: req.body.Email,
        EmpId: req.body.EmpId,

        // Address

        Line1: req.body.Line1,
        Line2: req.body.Line2,
        CityORTown: req.body.CityORTown,
        State: req.body.State,
        PinCode: req.body.PinCode,
        Country: req.body.Country,

        // --------------------------------- //

        JobTitle: req.body.JobTitle,
        PositionORDesignation: req.body.PositionORDesignation,
        Department: req.body.Department,
        EmpType: req.body.EmpType,
        AppDate: req.body.AppDate,
        Exp: req.body.Exp,
        HighestQualification: req.body.HighestQualification,

        // --------------------------------------------------------- //

        // Additional Information

        AdhaarNo: req.body.AdhaarNo,
        PanNo: req.body.PanNo,
        Religion: req.body.Religion,
        Category: req.body.Category,
        FatherName: req.body.FatherName,
        MotherName: req.body.MotherName,
        MaritalStatus: req.body.MaritalStatus,
        SpouseName: req.body.SpouseName,
        EmergContactNo: req.body.EmergContactNo,

        // --------------------------------------- //

        // Previous Experience

        InstituteName: req.body.InstituteName,
        JoiningDateRelievingDate: req.body.JoiningDateRelievingDate,
        RelievingDate: req.body.RelievingDate,
        Location: req.body.Location,
        RefName: req.body.RefName,
        RefMobileNo: req.body.RefMobileNo,

        // ------------------------------------ //

        // Bank Acoount

        BankAccNo: req.body.BankAccNo,
        BankAccName: req.body.BankAccName,
        BankBranch: req.body.BankBranch,
        BankIFSCCode: req.body.BankIFSCCode,

        // -------------------- //

      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  // get by id

  getidTDetails: async (req, res) => {
    const teacher = req.params;
    try {
      const data = await Teacher.findById(teacher.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}