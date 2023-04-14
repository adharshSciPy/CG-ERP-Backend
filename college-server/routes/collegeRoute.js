const express = require("express");
const collegeController = require("../controllers/collegeController");

const router = express.Router();

    // Post

    router.post("/addCollegeDetails", collegeController.addCollegeDetails)

    // Get

    router.get("/getCollegeDetails", collegeController.getCollegeDetails)

    // Get by id

    router.get("/getidCollegeDetails/:id", collegeController.getidCollegeDetails)

    // Delete

    router.delete("/deleteCollegeDetails/:id", collegeController.deleteCollegeDetails)

    // Put

    router.put("/editCollegeDetails/:id", collegeController.editCollegeDetails)


module.exports = router;