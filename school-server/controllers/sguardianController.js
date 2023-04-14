const Guardian = require("../models/sguardianSchema");
module.exports = {

  // post

  addSGuardianDetails: async (req, res) => {
    const data = new Guardian({

      // Guardian Details

      // 1. Father

      FName: req.body.FName,
      FOccupation: req.body.FOccupation,
      FCommAddress: req.body.FCommAddress,
      FPermAddress: req.body.FPermAddress,
      FLandline: req.body.FLandline,
      FMobile: req.body.FMobile,
      FEmail: req.body.FEmail,

      // 2. Mother

      MName: req.body.MName,
      MOccupation: req.body.MOccupation,
      MCommAddress: req.body.MCommAddress,
      MPermAddress: req.body.MPermAddress,
      MLandline: req.body.MLandline,
      MMobile: req.body.MMobile,
      MEmail: req.body.MEmail,

      // 3. Guardian

      GName: req.body.GName,
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

  getSGuardianDetails: async (req, res) => {
    try {
      const guardian = await Guardian.find();
      res.json(guardian);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deleteSGuardianDetails: async (req, res) => {
    try {
      const guardian = await Guardian.findByIdAndDelete(req.params.id);
      if (!guardian) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editSGuardianDetails: async (req, res) => {
    try {
      await Guardian.findByIdAndUpdate(req.params.id, {

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

  getidSGuardianDetails: async (req, res) => {
    const guardian = req.params;
    try {
      const data = await Guardian.findById(guardian.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}