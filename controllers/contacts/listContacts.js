const {Сontact} = require("../../models/contact");

const listContacts=async (req, res) => {
    const result = await Сontact.find({}, "-createdAt -updatedAt -favorite");
    res.json(result);
}

module.exports = listContacts;