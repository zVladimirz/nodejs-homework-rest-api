const { Сontact } = require("../../models/contact");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, ...filter } = req.query;
  const skip = (page - 1) * limit;
  const result = await Сontact
    .find({ owner, ...filter }, "-createdAt -updatedAt -favorite", {
      skip,
      limit,
    })
    .populate("owner", "name email");
  res.json(result);
};

module.exports = listContacts;