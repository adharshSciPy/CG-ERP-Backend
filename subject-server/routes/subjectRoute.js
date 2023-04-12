const express = require("express");
const subjectController = require("../controllers/subjectController");

const router = express.Router();

    // Post

    router.post("/addSDetails", subjectController.addSDetails)

    // Get

    router.get("/getSDetails", subjectController.getSDetails)

    // Get by id

    router.get("/getidSDetails/:id", subjectController.getidSDetails)

    // Delete

    router.delete("/deleteSDetails/:id", subjectController.deleteSDetails)

    // Put

    router.put("/editSDetails/:id", subjectController.editSDetails)


module.exports = router;