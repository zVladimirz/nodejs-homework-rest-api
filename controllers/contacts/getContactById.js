const { Сontact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Сontact.findById(id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = getContactById;
