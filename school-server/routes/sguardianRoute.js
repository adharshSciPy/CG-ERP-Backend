const express = require("express");
const sguardianController = require("../controllers/sguardianController");

const router = express.Router();

    // Post

    router.post("/addSGuardianDetails", sguardianController.addSGuardianDetails)

    // Get

    router.get("/getSGuardianDetails", sguardianController.getSGuardianDetails)

    // Get by id

    router.get("/getidSGuardianDetails/:id", sguardianController.getidSGuardianDetails)

    // Delete

    router.delete("/deleteSGuardianDetails/:id", sguardianController.deleteSGuardianDetails)

    // Put

    router.put("/editSGuardianDetails/:id", sguardianController.editSGuardianDetails)


module.exports = router;