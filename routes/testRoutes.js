import express from "express";
const router = express.Router();

router.get("/me", (req, res) => {
  console.log("GET");
  res.send("GET");
});

router.post("/me", (req, res) => {
  console.log("POST");
  res.send("POST");
});

export default router;

// TODO: work out issue with router
