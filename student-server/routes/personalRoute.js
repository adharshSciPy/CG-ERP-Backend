const express = require("express");
const personalController = require("../controllers/personalController");

const router = express.Router();

    // Post

    router.post("/addPDetails", personalController.addPDetails)

    // Get

    router.get("/getPDetails", personalController.getPDetails)

    // Get by id

    router.get("/getidPDetails/:id", personalController.getidPDetails)

    // Delete

    router.delete("/deletePDetails/:id", personalController.deletePDetails)

    // Put

    router.put("/editPDetails/:id", personalController.editPDetails)


module.exports = router;