const DB = require("../models/permit");

let add = async (req, res, next) => {
  let data = new DB(req.body);
  let result = await data.save();
  res.send({ con: true, msg: "model Saved!", result });
};
let all = async (req, res, next) => {
  let result = await DB.find();
  res.send({ con: true, msg: "All models!", result });
};
let get = async (req, res, next) => {
  let result = await DB.findById(req.params.id);
  res.send({ con: true, msg: "Single model!", result });
};
let patch = async (req, res, next) => {
  await DB.findByIdAndUpdate(req.params.id, req.body);
  let result = await DB.findById(req.params.id);
  res.send({ con: true, msg: "Model updated!", result });
};
let drop = async (req, res, next) => {
  let result = await DB.findByIdAndDelete(req.params.id, { new: true });
  res.send({ con: true, msg: "Model Deleted!", result });
};

module.exports = {
  add,
  all,
  get,
  patch,
  drop,
};
