const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models/user");
var Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const avatars = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const extension = originalname.split(".").pop();
  const filename = `${_id}.${extension}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const image = await Jimp.read(resultUpload);
  await image.resize(250, 250);
  await image.writeAsync(resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({
    avatarURL,
  });
};

module.exports = avatars;
