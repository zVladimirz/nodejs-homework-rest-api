const express = require("express");
const contacts = require("../../models/contacts");
const {RequestError} = require("../../helpers");
const Joi = require("joi")

const router = express.Router();

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
})

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.json(result);
  } catch {
    // res.status(500).json({ massage: "Server error" });
    next(error)

  }
});

router.get("/:contactId", async (req, res, next) => {
  try {

    const contactId = req.params;
    const result = await contacts.getContactById(contactId);
    if (!result) {
      throw RequestError(404,"Not found");
      // const error = new Error ("Not found")
      // error.status=404;
      // throw error;

      // return res.status(404).json({ massage: "Not found" });

    }
      res.json(result);
  } catch {
    // const {status=500, message="Server error"}= error
    // res.status(status).json({ massage,});
  next(error)
  }

});

router.post("/", async (req, res, next) => {
  try {
    const {error} = addSchema.validate(req.body);
    if(error) {
        throw RequestError(400, error.message)
    }
    const result = await contacts.addContact(req.body);
    res.status(201).json(result)


  } catch {

  next(error)
  }


});

router.delete("/:contactId", async (req, res, next) => {
  try {

    const contactId = req.params;
    const result = await contacts.removeContact(contactId);
    if (!result) {
      throw RequestError(404,"Not found");

    }
      res.json({message: "Delete success"});
  } catch {

  next(error)
  }



});

router.put("/:contactId", async (req, res, next) => {
  try {
    const {error} = addSchema.validate(req.body);
    if(error) {
        throw RequestError(400, error.message)
    }
    const contactId = req.params;
    const result = await contacts.updateContact(contactId, req.body);
    if(!result){
      throw RequestError(404, "Not found")
  }
  res.json(result)


  } catch {

  next(error)
  }

  const result = await contacts.updateContact();
  res.json(result);
});

module.exports = router;
