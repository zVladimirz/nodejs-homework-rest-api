const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/contacts");
const {ctrlWrapper} = require("../../helpers");
const {validateBody, isValidId} = require("../../middlewares")

const {schemas} = require("../../models/contact") 


router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schemas.addSchema),ctrlWrapper(ctrl.addContact));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeContact));

router.put("/:id", isValidId, validateBody(schemas.addSchema),ctrlWrapper(ctrl.updateContact));

module.exports = router;


