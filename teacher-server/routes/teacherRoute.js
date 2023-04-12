const express = require("express");
const teacherController = require("../controllers/teacherController");

const router = express.Router();

    // Post

    router.post("/addTDetails", teacherController.addTDetails)

    // Get

    router.get("/getTDetails", teacherController.getTDetails)

    // Get by id

    router.get("/getidTDetails/:id", teacherController.getidTDetails)

    // Delete

    router.delete("/deleteTDetails/:id", teacherController.deleteTDetails)

    // Put

    router.put("/editTDetails/:id", teacherController.editTDetails)


module.exports = router;