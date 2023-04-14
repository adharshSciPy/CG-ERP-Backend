const College = require("../models/collegeSchema");
module.exports = {

  // post

  addCollegeDetails: async (req, res) => {
    const data = new College({
        CollegeName: req.body.CollegeName,
        Address: req.body.Address,
        PhoneNo: req.bodyPhoneNo,
        Email: req.body.Email,
        State: req.body.State,
        District: req.body.District,
        CityORTown: req.body.CityORTown,
        ProgramType: req.body.ProgramType,
        Type: req.body.Type,
        CourseType: req.body.CourseType,
        Stream: req.body.Stream,
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

  getCollegeDetails: async (req, res) => {
    try {
      const school = await College.find();
      res.json(school);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //delete

  deleteCollegeDetails: async (req, res) => {
    try {
      const college = await College.findByIdAndDelete(req.params.id);
      if (!college) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editCollegeDetails: async (req, res) => {
    try {
      await College.findByIdAndUpdate(req.params.id, {
        CollegeName: req.body.CollegeName,
        Address: req.body.Address,
        PhoneNo: req.bodyPhoneNo,
        Email: req.body.Email,
        State: req.body.State,
        District: req.body.District,
        CityORTown: req.body.CityORTown,
        ProgramType: req.body.ProgramType,
        Type: req.body.Type,
        CourseType: req.body.CourseType,
        Stream: req.body.Stream,
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  // get by id

  getidCollegeDetails: async (req, res) => {
    const college = req.params;
    try {
      const data = await College.findById(college.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}