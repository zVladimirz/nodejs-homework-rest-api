const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const updateSubscription = require("./updateSubscription");
const avatars = require("./avatars");
const verify = require("./verify");
const resendEmail = require("./resendEmail");

module.exports = {
  signup,
  login,
  logout,
  current,
  updateSubscription,
  avatars,
  verify,
  resendEmail,
};
