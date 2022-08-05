const router = require("express").Router();
const { Project } = require("../models/Projects");
// const zip=require("express-zip")
var AdmZip = require("adm-zip");
const JSZip=require("jszip");
const fs=require("fs");

router.post("/", async (req, res) => {
	try {
		console.log("rea is here",req.body);
		

		const project = await Project.find({ useremail: req.body.useremail });
		res.status(200).send({ data: project});

	} catch (error) {
		res.status(500).send({ error });
		console.log("erorr ",error);
	}
});

router.post("/findpid", async (req, res) => {
	try {
		console.log("rea is here",req.body);
		

		const project = await Project.find({ _id: req.body.pid });
		res.status(200).send({ data: project});

	} catch (error) {
		res.status(500).send({ error });
		console.log("erorr ",error);
	}
});

router.post("/create", async (req, res) => {
	try {
		console.log("create project",req.body);
        const user=req.body;
        const newProject=new Project(user);
        await newProject.save();
		// console.log(newProject);
        res.json(newProject);

	} catch (error) {
		res.status(500).send({ message: "project creation Server Error",error });
	}
});

router.post("/update", async(req,res)=>{
	try{
		Project.findByIdAndUpdate({ _id: req.body._id }, req.body, (err, doc) => {
			if (!err) { console.log("updated successfully") }
			else {
					console.log('Error during record update : ' + err);
			}
		});
	}
	catch(error){
		res.status(500).send({message:"there was error updating the project",error});
	}
});



module.exports = router;