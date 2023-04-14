const express = require("express");
const schoolController = require("../controllers/schoolController");

const router = express.Router();

    // Post

    router.post("/addSchoolDetails", schoolController.addSchoolDetails)

    // Get

    router.get("/getSchoolDetails", schoolController.getSchoolDetails)

    // Get by id

    router.get("/getidSchoolDetails/:id", schoolController.getidSchoolDetails)

    // Delete

    router.delete("/deleteSchoolDetails/:id", schoolController.deleteSchoolDetails)

    // Put

    router.put("/editSchoolDetails/:id", schoolController.editSchoolDetails)


module.exports = router;