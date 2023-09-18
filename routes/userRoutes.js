const express = require("express");
// const {
//   registerUser,
//   currentUser,
//   loginUser,
// } = require("../controllers/userController");
// const validateToken = require("../middleware/validateTokenHandler");

// const router = express.Router();

// router.post("/register", registerUser);

// router.post("/login", loginUser);

// router.get("/current", validateToken, currentUser);


const router = express.Router();

router.post("/register", (req, res) => {
    res.json({message: "Register User"})
});

router.post("/login", (req, res) => {
    res.json({message: "Login User"})
});

router.post("/current", (req, res) => {
    res.json({message: "Current User Information"})
});

module.exports = router;
