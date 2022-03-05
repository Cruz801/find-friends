const express = require('express');
const router = express.Router();
const { createThought, getThoughtById, getAllThoughts, updateThought, deleteThought, addReaction, deleteReaction } = require('../controllers/thought-controller')

router.get("/", getAllThoughts);
router.get("/:id", getThoughtById);
router.put("/:id", updateThought);
router.delete("/:id", deleteThought);
router.post("/", createThought);
router.post("/:thoughtId/reactions", addReaction);
router.delete("/:thoughtId/reactions", deleteReaction);


module.exports = router;