const express = require("express");
const router = express.Router();
const appController = require("./appRouteControls");

// Main Page and IndexAll
router.route("/").get(appController.findAllObjects).post(appController.createObject);

// Forms
router.route("/new").get(appController.createForm);
router.route("/:id/update").get(appController.updateForm);
// IndexWun and Update Wun Object
router.route("/:id").get(appController.getSingleObject);
router.route("/:id").post(appController.updateObject);

//router.route("/:id/patch").get(appController.updateObject)

// Delete Wun Object
router.route("/:id/delete").get(appController.deleteObject);

// edit in same show page
//router.route("/:param/edit").patch(appController.updateSingleObject)



module.exports = router; 