import express from "express";
const router = express.Router();

router.get("/me", (req, res) => {
  console.log("GET");
  res.send("GET");
});

// console.log("ERROR");

router.post("/me", (req, res) => {
  console.log("POST");
  res.send("POST");
});

export default router;
