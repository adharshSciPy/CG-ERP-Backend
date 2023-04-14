const School = require("../models/schoolSchema");
module.exports = {

  // post

  addSchoolDetails: async (req, res) => {
    const data = new School({
        SchoolName: req.body.SchoolName,
        Address: req.body.Address,
        PhoneNo: req.bodyPhoneNo,
        Email: req.body.Email,
        State: req.body.State,
        District: req.body.District,
        CityORTown: req.body.CityORTown,
        Board: req.body.Board,
        Type: req.body.Type,
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

  getSchoolDetails: async (req, res) => {
    try {
      const school = await School.find();
      res.json(school);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deleteSchoolDetails: async (req, res) => {
    try {
      const school = await School.findByIdAndDelete(req.params.id);
      if (!school) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editSchoolDetails: async (req, res) => {
    try {
      await School.findByIdAndUpdate(req.params.id, {
        SchoolName: req.body.SchoolName,
        Address: req.body.Address,
        PhoneNo: req.bodyPhoneNo,
        Email: req.body.Email,
        State: req.body.State,
        District: req.body.District,
        CityORTown: req.body.CityORTown,
        Board: req.body.Board,
        Type: req.body.Type,

      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  // get by id

  getidSchoolDetails: async (req, res) => {
    const school = req.params;
    try {
      const data = await School.findById(school.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}