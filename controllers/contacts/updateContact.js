const { Сontact } = require("../../models/contact");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await Сontact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
  result = await contacts.updateContact();
  res.json(result);
};

module.exports = updateContact;
