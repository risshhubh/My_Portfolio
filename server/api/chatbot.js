const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Simple Chatbot logic
router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "Please provide a message." });
  }

  const lowerMessage = message.toLowerCase();

  // Check if user is asking about projects
  if (
    lowerMessage.includes("projects") ||
    lowerMessage.includes("portfolio") ||
    lowerMessage.includes("work")
  ) {
    try {
      const projects = await Project.find().sort({ createdAt: -1 });

      if (projects.length === 0) {
        return res.json({ reply: "I don't have any projects to show right now." });
      }

      const formatted = projects
        .map(
          (p, i) =>
            `🔹 **${p.name}**\n🛠️ ${p.technologies.join(", ")}\n🔗 [Live](${p.liveLink}) | [Code](${p.githubLink})`
        )
        .join("\n\n");

      return res.json({ reply: `Here are some of my projects:\n\n${formatted}` });
    } catch (err) {
      console.error("❌ Error fetching projects:", err);
      return res.status(500).json({ reply: "Something went wrong while fetching projects." });
    }
  }

  // Fallback
  res.json({ reply: "I'm still learning. Ask me about my projects to start!" });
});

module.exports = router;
