const Personal = require("../models/personalSchema");
module.exports = {

  // post

  addPDetails: async (req, res) => {
    const data = new Personal({

      // Basic Details

      Name: req.body.Name,
      Gender: req.body.Gender,
      DOB: req.body.DOB,
      AdhaarNo: req.body.AdhaarNo,
      MotherTongue: req.body.MotherTongue,
      Category: req.body.Category,
      Religion: req.body.Religion,
      Nationality: req.body.Nationality,
      BloodGroup: req.body.BloodGroup,

      // ----------------------------------- //

      // Contact Details

      CommAddress: req.body.CommAddress,
      Landline: req.body.Landline,
      Mobile: req.body.Mobile,
      Email: req.body.Email,
      PermAddress: req.body.PermAddress,

      // ----------------------------------- //

      // Qualification Details

      Qualification: req.body.Qualification,
      BoardORUniversity: req.body.BoardORUniversity,
      QualifiedYear: req.body.QualifiedYear,
      TotalMark: req.body.TotalMark,
      Percentage: req.body.Percentage,

    // ----------------------------------- //

      // Qualifying Exam Certificate

      DocName: req.body.DocName,
      Doc: req.body.Doc,

      // --------------------------------- //

      // Guardian Details

      // 1. Father

      FNAMe: req.body.FNAMe,
      FOccupation: req.body.FOccupation,
      FCommAddress: req.body.FCommAddress,
      FPermAddress: req.body.FPermAddress,
      FLandline: req.body.FLandline,
      FMobile: req.body.FMobile,
      FEmail: req.body.FEmail,

      // 2. Mother

      MNAMe: req.body.MNAMe,
      MOccupation: req.body.MOccupation,
      MCommAddress: req.body.MCommAddress,
      MPermAddress: req.body.MPermAddress,
      MLandline: req.body.MLandline,
      MMobile: req.body.MMobile,
      MEmail: req.body.MEmail,

      // 3. Guardian

      GNAMe: req.body.GNAMe,
      GOccupation: req.body.GOccupation,
      GCommAddress: req.body.GCommAddress,
      GPermAddress: req.body.GPermAddress,
      GLandline: req.body.GLandline,
      GMobile: req.body.GMobile,
      GEmail: req.body.GEmail,

      // --------------------------------- //

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

  getPDetails: async (req, res) => {
    try {
      const personal = await Personal.find();
      res.json(personal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deletePDetails: async (req, res) => {
    try {
      const personal = await Personal.findByIdAndDelete(req.params.id);
      if (!personal) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editPDetails: async (req, res) => {
    try {
      await Personal.findByIdAndUpdate(req.params.id, {

        // Basic Details

        Name: req.body.Name,
        Gender: req.body.Gender,
        DOB: req.body.DOB,
        AdhaarNo: req.body.AdhaarNo,
        MotherTongue: req.body.MotherTongue,
        Category: req.body.Category,
        Religion: req.body.Religion,
        Nationality: req.body.Nationality,
        BloodGroup: req.body.BloodGroup,

        // ----------------------------------- //

        // Contact Details

        CommAddress: req.body.CommAddress,
        Landline: req.body.Landline,
        Mobile: req.body.Mobile,
        Email: req.body.Email,
        PermAddress: req.body.PermAddress,

        // ----------------------------------- //

        // Qualification Details

        Qualification: req.body.Qualification,
        BoardORUniversity: req.body.BoardORUniversity,
        QualifiedYear: req.body.QualifiedYear,
        TotalMark: req.body.TotalMark,
        Percentage: req.body.Percentage,

        // ----------------------------------- //

        // Qualifying Exam Certificate

        DocName: req.body.DocName,
        Doc: req.body.Doc,

        // --------------------------------- //

        // Guardian Details

        // 1. Father

        FNAMe: req.body.FNAMe,
        FOccupation: req.body.FOccupation,
        FCommAddress: req.body.FCommAddress,
        FPermAddress: req.body.FPermAddress,
        FLandline: req.body.FLandline,
        FMobile: req.body.FMobile,
        FEmail: req.body.FEmail,

        // 2. Mother

        MNAMe: req.body.MNAMe,
        MOccupation: req.body.MOccupation,
        MCommAddress: req.body.MCommAddress,
        MPermAddress: req.body.MPermAddress,
        MLandline: req.body.MLandline,
        MMobile: req.body.MMobile,
        MEmail: req.body.MEmail,

        // 3. Guardian

        GNAMe: req.body.GNAMe,
        GOccupation: req.body.GOccupation,
        GCommAddress: req.body.GCommAddress,
        GPermAddress: req.body.GPermAddress,
        GLandline: req.body.GLandline,
        GMobile: req.body.GMobile,
        GEmail: req.body.GEmail,

        // --------------------------------- //

      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  // get by id

  getidPDetails: async (req, res) => {
    const personal = req.params;
    try {
      const data = await Personal.findById(personal.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}