const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
	PName: { type: String, required: true },
	date: { type: String, required: true },
	useremail: { type: String, required: true },
	Languages: { type: Array, required: true },
	translations:{type:Object,required:true}
});

const Project = mongoose.model("project", ProjectSchema);
module.exports = {Project};