const contacts = require("../../models/contacts");

const updateContact=async (req, res) => {

    const { id } = req.params;
    const result = await contacts.updateContact(id, req.body);
    if (!result) {
      throw RequestError(404, "Not found");
    }
    res.json(result);
  result = await contacts.updateContact();
  res.json(result);
}

module.exports = updateContact;