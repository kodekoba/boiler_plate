const mongoose = require("mongoose");
const ChildSchema = require("./child.js").schema;

//change schema attributes as needed
const ParentSchema = new mongoose.Schema(
    {
    title: {type: String, required: true, trim: true, unique: true, minlength: 3},
    childs: [ChildSchema]
    }, {timestamps: true}
);

module.exports = mongoose.model("Parent", ParentSchema);