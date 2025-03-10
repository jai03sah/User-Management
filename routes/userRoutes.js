const express = require("express");
const { registerUser, loginUser, currentUser, getUser, updateUser, deleteUser } = require("../controllers/userController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, currentUser);
router.get("/:id", protect, getUser);
router.patch("/:id", protect, updateUser);
router.delete("/:id", protect, deleteUser);

module.exports = router;

