const mongoose = require("mongoose");
const { Schema } = mongoose;

const PermitSchema = new Schema({
  name: { type: String, required: true },
  permits: [{ type: Schema.Types.ObjectId, ref: "permit" }],
});

const Permit = mongoose.model("permit", PermitSchema);
module.exports = Permit;
