const express = require("express");
const guardianController = require("../controllers/guardianController");

const router = express.Router();

    // Post

    router.post("/addGuardianDetails", guardianController.addGuardianDetails)

    // Get

    router.get("/getGuardianDetails", guardianController.getGuardianDetails)

    // Get by id

    router.get("/getidGuardianDetails/:id", guardianController.getidGuardianDetails)

    // Delete

    router.delete("/deleteGuardianDetails/:id", guardianController.deleteGuardianDetails)

    // Put

    router.put("/editGuardianDetails/:id", guardianController.editGuardianDetails)


module.exports = router;