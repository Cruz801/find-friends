const express = require('express');
const router = express.Router();
const { createUser, getUserById, getAllUsers, updateUser, deleteUser } = require('../controllers/user-controller')

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/", createUser);

module.exports = router;