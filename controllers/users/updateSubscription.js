const { User } = require("../../models/user");

const { RequestError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  if (subscription) {
    const result = await User.findByIdAndUpdate(
      _id,
      { subscription: subscription },
      { new: true }
    );
    res.json(result);
  } else {
    throw RequestError(404, "Not subscription");
  }
};

module.exports = updateSubscription;
