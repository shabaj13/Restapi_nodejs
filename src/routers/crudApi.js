const express = require("express");
const Student = require("../models/studentSchema");
const router = new express.Router();


router.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    const insertStudent = await student.save();
    res.status(201).send(insertStudent);
  } catch (error) {
    res.status(400).send(error);
  }
})

router.get("/students", async (req, res) => {
  try {
   const getStudents = await Student.find({})
    res.status(200).send(getStudents);
  } catch (error) {
    res.status(400).send(error);
  }
})
router.get("/students/:name", async (req, res) => {
  try {
    const name = req.params.name;
   const getStudent = await Student.findOne({name})
    res.status(200).send(getStudent);
  } catch (error) {
    res.status(400).send(error);
  }
})

router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
   const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{new:true})
    res.status(200).send(updateStudent);
  } catch (error) {
    res.status(400).send(error);
  }
})

router.delete("/students/:id", async (req, res) => {
  try {
   const deleteStudent = await Student.findByIdAndDelete(req.params.id)
    res.status(200).send(deleteStudent);
  } catch (error) {
    res.status(400).send(error);
  }
})

module.exports = router;