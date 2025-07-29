const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET /api/projects - Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    console.error("❌ Error fetching projects:", err);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

// POST /api/projects - Add new project
router.post("/", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Error saving project:", err);
    res.status(400).json({ message: "Failed to save project" });
  }
});

module.exports = router;
