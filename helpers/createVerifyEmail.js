const createVerifyEmail = (email, verificationToken) => {
  const { BASE_URL } = process.env;
  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
  };

  return mail;
};

module.exports = createVerifyEmail;
