const router = require("express").Router();
const controller = require("../controller/permit");

router.post("/", controller.add);

module.exports = router;
