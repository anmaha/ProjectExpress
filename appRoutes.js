const express = require("express");
const router = express.Router();
const appController = require("./appRouteControls");

router.route("/").get(appController.findAllObjects).post(appController.createObject);
router.route("/new").get(appController.createForm);
router.route("/:id/update").get(appController.getSingleObject);
router.route("/:id").get(appController.getSingleObject).patch(appController.updateObject).delete(appController.deleteObject);

// edit in same show page
//router.route("/:param/edit").patch(appController.updateSingleObject)



module.exports = router; 