const DB = require("../models/permit");
const Helper = require("../utils/helper");

let add = async (req, res, next) => {
  let dbPermit = await DB.findOne({ name: req.body.name });
  if (dbPermit) {
    next(new Error("Permission name is already in use"));
  } else {
    let result = await new DB(req.body).save();
    Helper.fMsg(res, "New Permit Added", result);
  }
};

module.exports = {
  add,
};
