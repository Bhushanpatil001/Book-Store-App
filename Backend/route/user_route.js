const express = require("express")
const {signup , login} = require("../controller/user_controller.js")

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);


module.exports = router;