const Subject = require("../models/subjectSchema");
module.exports = {

  // post

  addSDetails: async (req, res) => {
    const data = new Subject({
      Department: req.body.Department,
      Year: req.body.Year,
      Scheme: req.body.Scheme,
      Semester: req.body.Semester,
      SubjectName: req.body.SubjectName,
      Hours: req.body.Hours,
      Teacher: req.body.Teacher,
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

  getSDetails: async (req, res) => {
    try {
      const subject = await Subject.find();
      res.json(subject);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //delete

  deleteSDetails: async (req, res) => {
    try {
      const subject = await Subject.findByIdAndDelete(req.params.id);
      if (!subject) throw Error("No user found");
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  //put

  editSDetails: async (req, res) => {
    try {
      await Subject.findByIdAndUpdate(req.params.id, {
        Department: req.body.Department,
        Year: req.body.Year,
        Scheme: req.body.Scheme,
        Semester: req.body.Semester,
        SubjectName: req.body.SubjectName,
        Hours: req.body.Hours,
        Teacher: req.body.Teacher
      });
      res.status(200).json("Successfully updated");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("ServerError");
    }
  },

  // get by id

  getidSDetails: async (req, res) => {
    const subject = req.params;
    try {
      const data = await Subject.findById(subject.id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  },

}