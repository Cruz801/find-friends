const express = require('express');
const router = express.Router();
const { createUser, getUserById, getAllUsers, updateUser, deleteUser } = require('../controllers/user-controller')

router.route("/").get(getAllUsers).post(createUser);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
// router.post("/", createUser);
router.post("/:userId/friends/:friendId");
router.delete("/:userId/friends/:friendId")

module.exports = router;