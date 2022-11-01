const express = require("express");

const ctrl = require("../../controllers/users");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post(
  "/signup",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.signup)
);

// signin
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.get("/current", authenticate, ctrlWrapper(ctrl.current));

router.patch(
  "/",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

module.exports = router;
